// @ts-check
const { test, expect } = require('@playwright/test');

const PDF_LINKS = [
  {
    label: 'LinkedIn profile PDF',
    href: '/assets/pdfs/Anand_Bagmar_Profile_LinkedIn.pdf',
  },
  {
    label: 'EoT profile PDF',
    href: '/assets/pdfs/AnandBagmar-EoT-Profile.pdf',
  },
];

test.describe('Profile PDF downloads', () => {
  test('profile page renders download buttons', async ({ page }) => {
    await page.goto('/profile/');
    for (const pdf of PDF_LINKS) {
      const link = page.locator(`a[href="${pdf.href}"]`);
      await expect(link, `Missing link for ${pdf.label}`).toBeVisible();
    }
  });

  for (const pdf of PDF_LINKS) {
    test(`${pdf.label} is reachable (HTTP 200, content-type PDF)`, async ({ request }) => {
      const response = await request.get(pdf.href);
      expect(response.status(), `${pdf.label} returned non-200`).toBe(200);
      const contentType = response.headers()['content-type'] ?? '';
      expect(contentType, `${pdf.label} is not a PDF`).toContain('application/pdf');
    });
  }
});
