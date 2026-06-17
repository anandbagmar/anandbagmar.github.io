// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact/');
  });

  test('page loads with correct heading', async ({ page }) => {
    await expect(page).not.toHaveTitle(/404|Not Found/i);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('contact form is present', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
  });

  test('email field is present and accepts input', async ({ page }) => {
    const emailInput = page.locator('input[type="email"], input[name="_replyto"]');
    await expect(emailInput).toBeVisible();
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
  });

  test('message textarea is present and accepts input', async ({ page }) => {
    const textarea = page.locator('textarea[name="message"]');
    await expect(textarea).toBeVisible();
    await textarea.fill('This is a test message.');
    await expect(textarea).toHaveValue('This is a test message.');
  });

  test('submit button is present', async ({ page }) => {
    const submit = page.locator('button[type="submit"], input[type="submit"]');
    await expect(submit).toBeVisible();
  });

  test('form fields are readable in dark mode', async ({ page }) => {
    await page.evaluate(() => {
      localStorage.setItem('eot-theme', 'dark');
      document.documentElement.classList.add('dark-mode');
    });

    const emailInput = page.locator('input[type="email"], input[name="_replyto"]');
    const inputBg = await emailInput.evaluate((el) =>
      getComputedStyle(el).backgroundColor
    );
    const inputColor = await emailInput.evaluate((el) =>
      getComputedStyle(el).color
    );

    // In dark mode the input background should not be pure white (#fff / rgb(255,255,255))
    expect(inputBg, 'Email input still has white background in dark mode').not.toBe(
      'rgb(255, 255, 255)'
    );
    // Text must not be invisible (white on white)
    expect(inputColor, 'Email input text is invisible in dark mode').not.toBe(inputBg);
  });
});
