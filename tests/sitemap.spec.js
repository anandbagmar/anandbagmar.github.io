// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = process.env.BASE_URL || 'http://localhost:4000';

// ── sitemap.xml ─────────────────────────────────────────────────────────────

test.describe('sitemap.xml', () => {
  /** @type {string} */
  let xml;
  /** @type {string[]} */
  let locs;

  test.beforeAll(async ({ request }) => {
    const res = await request.get(`${BASE}/sitemap.xml`);
    expect(res.ok()).toBeTruthy();
    xml = await res.text();
    locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  });

  test('lists no non-content resource files (.json/.xml/.txt)', async () => {
    const junk = locs.filter((u) => /\.(json|xml|txt)$/i.test(u));
    expect(junk).toEqual([]);
  });

  test('every URL is a directory page or .html', async () => {
    const bad = locs.filter((u) => !(u.endsWith('/') || u.endsWith('.html')));
    expect(bad).toEqual([]);
  });

  test('includes blog posts and key content pages', async () => {
    // Note: locs use the production host (site.url), not BASE, so assert on path suffixes.
    const blogPosts = locs.filter((u) => /\/blog\/.+/.test(u));
    expect(blogPosts.length).toBeGreaterThan(200);
    expect(locs.some((u) => u.endsWith('/blog/'))).toBeTruthy();
    expect(locs.some((u) => u.endsWith('/profile/'))).toBeTruthy();
  });
});
