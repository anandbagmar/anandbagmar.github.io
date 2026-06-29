// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = process.env.BASE_URL || 'http://localhost:4000';

// ── /blog/ listing page ────────────────────────────────────────────────────

test.describe('Blog index', () => {
  test('loads without JS errors', async ({ page }) => {
    /**
     * @type {any[]}
     */
    const errors = [];
    page.on('pageerror', (err) => {
      if (!/googletagmanager|google-analytics|gtag|foundation|jquery|ResizeObserver|Unexpected end|Failed to fetch|NetworkError|Load failed/i.test(err.message))
        errors.push(err.message);
    });
    await page.goto('/blog/');
    expect(errors).toEqual([]);
  });

  test('shows Recent Posts section with at least 10 posts', async ({ page }) => {
    await page.goto('/blog/');
    const count = await page.locator('.eot-blog-item').count();
    expect(count).toBeGreaterThan(9);
  });

  test('shows Archive section with year groups', async ({ page }) => {
    await page.goto('/blog/');
    const count = await page.locator('.eot-year-group').count();
    expect(count).toBeGreaterThan(3);
  });

  test('post titles are links pointing to /blog/...', async ({ page }) => {
    await page.goto('/blog/');
    const firstLink = page.locator('.eot-blog-title a').first();
    const href = await firstLink.getAttribute('href');
    expect(href).toMatch(/^\/blog\//);
  });

  test('tag badges link to /blog/tags/#...', async ({ page }) => {
    await page.goto('/blog/');
    const firstTag = page.locator('.eot-tag').first();
    const href = await firstTag.getAttribute('href');
    expect(href).toMatch(/^\/blog\/tags\/#/);
  });
});

// ── /blog/tags/ page ───────────────────────────────────────────────────────

test.describe('Blog tags page', () => {
  test('loads and lists tags', async ({ page }) => {
    await page.goto('/blog/tags/');
    const count = await page.locator('.eot-tag-section').count();
    expect(count).toBeGreaterThan(10);
  });

  test('tag cloud links use anchor format', async ({ page }) => {
    await page.goto('/blog/tags/');
    const firstCloudLink = page.locator('.eot-tag-cloud-item').first();
    const href = await firstCloudLink.getAttribute('href');
    expect(href).toMatch(/^#/);
  });

  test('each tag section lists at least one post', async ({ page }) => {
    await page.goto('/blog/tags/');
    const firstSection = page.locator('.eot-tag-section').first();
    const count = await firstSection.locator('.eot-tag-posts li').count();
    expect(count).toBeGreaterThan(0);
  });
});

// ── Individual blog post ───────────────────────────────────────────────────

test.describe('Individual blog post', () => {
  // Use a known stable post
  const POST = '/blog/getting-selenium-4s-devtools-working-with-remotewebdriver-docker/';

  test('loads without JS errors', async ({ page }) => {
    /**
     * @type {any[]}
     */
    const errors = [];
    page.on('pageerror', (err) => {
      if (!/googletagmanager|google-analytics|gtag|foundation|jquery|ResizeObserver|Unexpected end|Failed to fetch|NetworkError|Load failed/i.test(err.message))
        errors.push(err.message);
    });
    await page.goto(POST);
    expect(errors).toEqual([]);
  });

  test('shows post title in heading', async ({ page }) => {
    await page.goto(POST);
    const h1 = page.locator('h1, .eot-blog-title, #page-title, header h1').first();
    const text = await h1.textContent();
    expect(text).toBeTruthy();
  });

  test('shows tag links pointing to /blog/tags/', async ({ page }) => {
    await page.goto(POST);
    const tagLink = page.locator('a[href*="/blog/tags/#"]').first();
    await expect(tagLink).toBeVisible();
  });

  test('post content is present', async ({ page }) => {
    await page.goto(POST);
    // Article body should have substantial text
    const body = page.locator('#page-content, article, .entry-content, main').first();
    const text = await body.textContent();
    expect((text || '').length).toBeGreaterThan(200);
  });
});

// ── Redirect from truncated Blogger slug ──────────────────────────────────

test.describe('Blogger slug redirects', () => {
  test('truncated slug redirects to full post', async ({ page }) => {
    // end-2-end-automated-integration-testing → full post
    const resp = await page.goto('/blog/end-2-end-automated-integration-testing/');
    // Should land on the full post URL (after meta-refresh) or show redirect page
    expect(resp?.status()).toBeLessThan(400);
    // The page should either be the post or the redirect intermediary
    const url = page.url();
    expect(url).toMatch(/\/blog\//);
  });

  test('redirect page has a valid href destination', async ({ page }) => {
    await page.goto('/blog/end-2-end-automated-integration-testing/');
    // If it's a redirect page, the "click here" link must not be empty
    const link = page.locator('a[href]').filter({ hasText: /click here|redirected/i }).first();
    const count = await link.count();
    if (count > 0) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).toMatch(/\/blog\//);
    }
  });
});

// ── Search page ───────────────────────────────────────────────────────────

test.describe('Search', () => {
  /**
   * Attach a console/error/network listener and return a cleanup object.
   * Call dump() to print everything collected so far.
   * @param {import('@playwright/test').Page} page
   */
  function attachDiagnostics(page) {
    /** @type {string[]} */ const consoleLogs = [];
    /** @type {string[]} */ const jsErrors    = [];
    /** @type {{url:string, status:number, ok:boolean}[]} */ const network = [];

    page.on('console', msg => {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
    });
    page.on('pageerror', err => {
      jsErrors.push(err.message);
    });
    page.on('response', resp => {
      network.push({ url: resp.url(), status: resp.status(), ok: resp.ok() });
    });

    return {
      async dump() {
        // Capture current DOM state
        const searchReady   = await page.evaluate(() => /** @type {any} */ (window).__searchReady).catch(() => 'N/A (page closed)');
        const inputValue    = await page.locator('#eot-search-input').inputValue().catch(() => 'N/A');
        const resultsText   = await page.locator('#eot-search-results').textContent().catch(() => 'N/A (page closed)');
        const resultCount   = await page.locator('.eot-result-item').count().catch(() => -1);
        const externalShown = await page.locator('#eot-search-external').isVisible().catch(() => false);

        console.log('=== Search diagnostics ===');
        console.log(`  window.__searchReady : ${searchReady}`);
        console.log(`  #eot-search-input    : "${inputValue}"`);
        console.log(`  .eot-result-item cnt : ${resultCount}`);
        console.log(`  #eot-search-external : ${externalShown ? 'visible' : 'hidden'}`);
        console.log(`  #eot-search-results  : "${(resultsText || '').slice(0, 200)}"`);
        console.log('  --- Network responses ---');
        network
          .filter(r => r.url.includes('search'))
          .forEach(r => console.log(`  ${r.status} ${r.ok ? 'OK' : 'FAIL'} ${r.url}`));
        console.log('  --- JS errors ---');
        jsErrors.length ? jsErrors.forEach(e => console.log(`  ${e}`)) : console.log('  (none)');
        console.log('  --- Console (errors/warnings) ---');
        const relevant = consoleLogs.filter(l => /\[error\]|\[warning\]/i.test(l));
        relevant.length ? relevant.forEach(l => console.log(`  ${l}`)) : console.log('  (none)');
        console.log('=== end diagnostics ===');
      },
    };
  }

  /** Pre-fetch JSON files and intercept browser requests to return them instantly. */
  async function interceptSearchData(page) {
    const [docsRes, idxRes] = await Promise.all([
      page.request.get('/search.json'),
      page.request.get('/search-index.json'),
    ]);
    expect(docsRes.ok(), `GET /search.json failed: ${docsRes.status()}`).toBeTruthy();
    expect(idxRes.ok(),  `GET /search-index.json failed: ${idxRes.status()}`).toBeTruthy();

    const docs = await docsRes.json();
    const idx  = await idxRes.json();
    console.log(`search.json: ${docs.length} docs`);
    console.log(`search-index.json: ${JSON.stringify(idx).length} bytes`);

    await page.route('/search.json',       route => route.fulfill({ json: docs }));
    await page.route('/search-index.json', route => route.fulfill({ json: idx }));
  }

  test('search index loads and returns results', async ({ page }) => {
    const diag = attachDiagnostics(page);
    await interceptSearchData(page);
    await page.goto('/search/?q=selenium');
    await page.screenshot({ path: 'test-results/search-after-goto.png' });

    const appeared = await page.waitForSelector('.eot-result-item', { timeout: 5000 }).catch(() => null);
    await page.screenshot({ path: 'test-results/search-after-wait.png' });
    await diag.dump();

    expect(appeared, 'No .eot-result-item appeared within 5 s').not.toBeNull();
    const count = await page.locator('.eot-result-item').count();
    expect(count).toBeGreaterThan(0);
  });

  test('Google fallback link appears after search', async ({ page }) => {
    const diag = attachDiagnostics(page);
    await interceptSearchData(page);
    await page.goto('/search/?q=automation');
    await page.screenshot({ path: 'test-results/search-fallback-after-goto.png' });

    const appeared = await page.waitForSelector('#eot-search-external', { state: 'visible', timeout: 5000 }).catch(() => null);
    await page.screenshot({ path: 'test-results/search-fallback-after-wait.png' });
    await diag.dump();

    expect(appeared, '#eot-search-external not visible within 5 s').not.toBeNull();
    const href = await page.locator('#eot-google-link').getAttribute('href');
    expect(href).toContain('google.com/search');
    expect(href).toContain('essenceoftesting.com');
  });
});
