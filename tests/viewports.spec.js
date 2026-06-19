// @ts-check
const { test, expect } = require('@playwright/test');

// Errors from third-party scripts (Foundation 5, GA, jQuery) that we don't control
const IGNORED_ERROR_PATTERNS = [
  /googletagmanager/i,
  /google-analytics/i,
  /gtag/i,
  /foundation/i,
  /jquery/i,
  /Cannot read prop.*undefined/i,   // Foundation 5 common in headless
  /ResizeObserver loop/i,
  /Unexpected end of input/i,       // External script (e.g. GA) blocked/empty in CI
  /Failed to fetch/i,
  /NetworkError/i,
  /Load failed/i,
];

function isOwnError(message) {
  return !IGNORED_ERROR_PATTERNS.some((re) => re.test(message));
}

const KEY_PAGES = [
  { name: 'Home',           path: '/' },
  { name: 'Profile',        path: '/profile/' },
  { name: 'Areas of Spec',  path: '/areas-of-specialization/' },
  { name: 'References',     path: '/references/' },
  { name: 'OSS',            path: '/oss/' },
  { name: 'Talks & Videos', path: '/talks-and-videos/' },
  { name: 'Contact',        path: '/contact/' },
];

for (const pg of KEY_PAGES) {
  test(`${pg.name} page loads without critical errors`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => {
      if (isOwnError(err.message)) errors.push(err.message);
    });

    await page.goto(pg.path);
    await expect(page).not.toHaveTitle(/404|Not Found/i);

    // Navigation and footer must be present on every page
    await expect(page.locator('#navigation')).toBeVisible();
    await expect(page.locator('#theme-toggle')).toBeVisible();
    await expect(page.locator('#footer-content')).toBeVisible();

    expect(
      errors,
      `Critical JS errors on ${pg.path}:\n${errors.join('\n')}`
    ).toHaveLength(0);
  });
}

async function clickToggle(page) {
  await page.locator('#theme-toggle').dispatchEvent('click');
}

test.describe('Responsive layout', () => {
  test('mobile nav toggle is visible on narrow viewport', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 1024) test.skip();
    await page.goto('/');
    await expect(page.locator('li.toggle-topbar')).toBeVisible();
  });

  test('dark mode toggle is visible on all viewports', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#theme-toggle')).toBeVisible();
  });

  test('theme toggle shows correct label for current mode', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });
    await page.reload();
    await expect(page.locator('#theme-toggle')).toHaveText('DARK MODE');

    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'dark');
      document.documentElement.classList.add('dark-mode');
    });
    await page.reload();
    await expect(page.locator('#theme-toggle')).toHaveText('LIGHT MODE');
  });

  test('theme toggle sits within the nav bar height', async ({ page, viewport }) => {
    if (viewport && viewport.width < 1024) test.skip();
    await page.goto('/');
    const toggleBox = await page.locator('#theme-toggle').boundingBox();
    const navBox = await page.locator('#navigation').boundingBox();
    expect(toggleBox).not.toBeNull();
    expect(navBox).not.toBeNull();
    // Toggle's vertical midpoint must be within the nav container
    const toggleMid = toggleBox.y + toggleBox.height / 2;
    expect(toggleMid >= navBox.y, 'Toggle midpoint above nav').toBe(true);
    expect(toggleMid <= navBox.y + navBox.height, 'Toggle midpoint below nav').toBe(true);
  });

  test('industry grid renders on references page', async ({ page }) => {
    await page.goto('/references/');
    const groups = page.locator('.eot-industry-group');
    await expect(groups).toHaveCount(9);
  });

  test('dark mode toggle adds dark-mode class to html element', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });

    await clickToggle(page);

    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(hasDark).toBe(true);
  });
});
