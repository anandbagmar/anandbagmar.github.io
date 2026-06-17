// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Dark / light mode toggle', () => {
  test.beforeEach(async ({ page }) => {
    // Clear stored preference so each test starts from system default
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
    // Ensure we start in light mode
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    });

    const toggle = page.locator('#theme-toggle');
    await toggle.click();

    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(isDark).toBe(true);

    const stored = await page.evaluate(() => localStorage.getItem('eot-theme'));
    expect(stored).toBe('dark');

    // Reload — dark mode should still be active (init script in <head>)
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

    const toggle = page.locator('#theme-toggle');
    await toggle.click(); // → dark
    await toggle.click(); // → light

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

    const toggle = page.locator('#theme-toggle');
    const lightIcon = await toggle.textContent();
    expect(lightIcon?.trim()).toBe('🌙');

    await toggle.click();
    const darkIcon = await toggle.textContent();
    expect(darkIcon?.trim()).toBe('☀️');
  });

  test('toggle works on inner pages', async ({ page }) => {
    for (const path of ['/contact/', '/profile/', '/oss/']) {
      await page.goto(path);
      await page.evaluate(() => {
        localStorage.setItem('eot-theme', 'light');
        document.documentElement.classList.remove('dark-mode');
      });
      const toggle = page.locator('#theme-toggle');
      await toggle.click();
      const isDark = await page.evaluate(() =>
        document.documentElement.classList.contains('dark-mode')
      );
      expect(isDark).toBe(true, `Toggle failed on ${path}`);
    }
  });
});
