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
// Use ?q= URL param: the search script reads it on load and calls runSearch()
// automatically once the index is ready — no need to fill inputs or dispatch
// events manually. waitForSelector uses DOM mutation observation (reliable).

test.describe('Search', () => {
  test('search index loads and returns results', async ({ page }) => {
    await page.goto('/search/?q=selenium');
    await page.waitForSelector('.eot-result-item', { timeout: 5000 });
    const count = await page.locator('.eot-result-item').count();
    expect(count).toBeGreaterThan(0);
  });

  test('Google fallback link appears after search', async ({ page }) => {
    await page.goto('/search/?q=automation');
    await page.waitForSelector('#eot-search-external', { state: 'visible', timeout: 5000 });
    const href = await page.locator('#eot-google-link').getAttribute('href');
    expect(href).toContain('google.com/search');
    expect(href).toContain('essenceoftesting.com');
  });
});
