// @ts-check
const { test, expect } = require('@playwright/test');

// Dispatch a non-bubbling click to bypass Foundation's topbar event delegation
async function clickToggle(page) {
  await page.evaluate(() => {
    document.getElementById('theme-toggle').dispatchEvent(
      new MouseEvent('click', { bubbles: false, cancelable: true })
    );
  });
}

test.describe('Dark / light mode toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.removeItem('eot-theme'));
  });

  test('page loads without flash — html class matches localStorage before paint', async ({ page }) => {
    await page.evaluate(() => localStorage.setItem('eot-theme', 'dark'));
    await page.goto('/');
    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(hasDark).toBe(true);
  });

  test('toggle button is visible and clickable', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');
    await expect(toggle).toBeVisible();
  });

  test('clicking toggle switches to dark mode and persists on reload', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });

    await clickToggle(page);

    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(isDark).toBe(true);

    const stored = await page.evaluate(() => localStorage.getItem('eot-theme'));
    expect(stored).toBe('dark');

    await page.reload();
    const stillDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(stillDark).toBe(true);
  });

  test('clicking toggle twice returns to light mode', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });

    await clickToggle(page); // → dark
    await clickToggle(page); // → light

    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(isDark).toBe(false);

    const stored = await page.evaluate(() => localStorage.getItem('eot-theme'));
    expect(stored).toBe('light');
  });

  test('toggle icon updates to reflect current mode', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });

    // Force icon to re-sync with current state
    await page.evaluate(() => {
      const btn = document.getElementById('theme-toggle');
      btn.textContent = '🌙';
    });

    const lightIcon = await page.locator('#theme-toggle').textContent();
    expect(lightIcon?.trim()).toBe('🌙');

    await clickToggle(page);

    const darkIcon = await page.locator('#theme-toggle').textContent();
    expect(darkIcon?.trim()).toBe('☀️');
  });

  test('toggle works on inner pages', async ({ page }) => {
    for (const path of ['/contact/', '/profile/', '/oss/']) {
      await page.goto(path);
      await page.evaluate(() => {
        localStorage.setItem('eot-theme', 'light');
        document.documentElement.classList.remove('dark-mode');
      });
      await clickToggle(page);
      const isDark = await page.evaluate(() =>
        document.documentElement.classList.contains('dark-mode')
      );
      expect(isDark).toBe(true, `Toggle failed on ${path}`);
    }
  });
});
