# Site Changelog

A private, human-readable log of changes to the site. This file is excluded from
the published Jekyll build (see `exclude:` in `_config.yml`) and is for maintainer
reference only.

Newest entries first. Format: `## DDD, DD-MMM-YYYY` then a bullet per change.

## Sun, 29-Jun-2026

- Removed standalone "Blog" nav item; consolidated everything under Resources dropdown: Blog Posts, Browse by Tag, Talks & Videos, Case Studies, then external links (Applitools Articles ↗, Slides ↗, YouTube ↗) — all distinguished by ↗ suffix.
- Fixed search Playwright tests failing in CI: replaced `window.__searchReady` polling (which timed out on slow runners) with a `waitForFunction` loop that re-fires the input event every second until `.eot-result-item` elements actually appear — works regardless of how long the Lunr index takes to build.
- Added Playwright test suite (`tests/blog.spec.js`) covering: blog index (post count, archive years, tag links), tags page (tag sections, anchor links), individual post (content, tag links), Blogger slug redirect chain, and Lunr search (results appear, Google fallback link present). Added `window.__searchReady` signal to `_search.html` so tests can wait for the index to finish building rather than using a fixed sleep.
- Committed `blog/opaque_map.json` (maps the 5 opaque Blogger CDN images to `img-01`–`img-05`) so re-runs of `migrate_media.py` stay idempotent.
- Fixed `site.url` from `anandbagmar.github.io` to `essenceoftesting.com` so sitemap, canonical tags, and absolute URLs all use the correct live domain.
- Improved sitemap: blog posts now get `priority=0.8` / `changefreq=yearly` (vs `0.3` / `monthly` before); pages get `0.5`; redirect pages excluded; `lastmod` uses actual post date rather than build time.
- Cleaned up Resources nav dropdown: replaced redundant "Blogs & Articles → /blog/" (same as top-level Blog link) with "Blog Posts → /blog/" and "Browse by Tag → /blog/tags/".
- Replaced Google-only site search with Lunr.js local full-text search: a `search.json` index (generated at build time, 270 entries — all 252 blog posts + site pages) is queried client-side for instant results including title, tags, and excerpt highlighting. A "Search Google for this site" link appears below results for external fallback. Query is preserved in the URL (`?q=`) for shareability.
- Added `/blog/tags/` page listing all blog post tags alphabetically, each as a heading with all matching posts beneath it; the page is fully automatic — Jekyll regenerates it on every build so new tags appear without any manual work. Tag badges on the blog index and on individual post pages now link directly to the relevant tag section.
- Fixed infinite redirect loop on all Blogspot→new-site redirects: the theme's `_layouts/redirect.html` used `{{ page.redirect_to }}` but `jekyll-redirect-from` sets `{{ page.redirect.to }}` — the mismatch produced empty `url=` in every meta-refresh, sending the browser back to itself. Fixed by using `page.redirect.to | default: page.redirect_to` so both the plugin-generated pages and hand-authored redirect pages work.
- Fixed Blogger→new-site redirect 404s: corrected `blogger_slug()` in `convert_blogger.py` — the function was incorrectly backing up past the last hyphen even when the 39-char truncation already fell on a clean word boundary (e.g. `end-2-end-automated-integration-testing` was being shortened to `end-2-end-automated-integration`). Now only backs up when the cut falls mid-word.
- Fixed `migrate_media.py` re-generating hidden filenames (e.g. `.avvxseg…`) for opaque `/img/a/` images on each run: now uses a persistent `blog/opaque_map.json` mapping so re-runs reuse the same `img-NN.ext` names instead of creating new hidden files.

- Fixed GitHub code-scanning alerts: added `rel="noopener noreferrer"` to `target="_blank"` links in `_footer.html` and `_meta_information.html`; added URL scheme validation before assigning `data-src` to iframe `src` in `javascript.js`.
- Updated `faraday` (2.14.2→2.14.3) and `concurrent-ruby` (1.3.6→1.3.7) to close open Dependabot high-severity alerts.
- Dismissed 12 code-scanning alerts for vendored/generated code (mediaelement jQuery bundle, Foundation minified JS, `_site/` build artifacts).

## Sun, 29-Jun-2026

- Fixed `/blog/` 404 on live site: `blog/*` in `.gitignore` was blocking `blog/index.html` from being committed; added `!blog/index.html` negation rule and force-added the file to git.

## Sat, 28-Jun-2026

- Migrated all 252 posts from essenceoftesting.blogspot.com into `_posts/blog/` as Jekyll Markdown files, with tags, dates, and redirect_from front matter pointing back to original Blogspot URLs.
- Added `/blog/` listing page (paginated, 10 posts per page) using the existing `blog` layout.
- Added "Blog" link to site navigation; updated Resources dropdown to point to `/blog/` instead of Blogspot.
- Added `jekyll-redirect-from` plugin so old Blogspot post URLs redirect correctly.
- Updated content.md to link to the local `/blog/` instead of the external Blogspot URL.

## Wed, 24-Jun-2026

- Talks & Videos: added the "TheMCPJourney" video to the recent videos grid and
  renamed the section heading from "Latest Sessions" to "Recent Videos".
- Talks & Videos: moved "The Path to Autonomous Testing" out of Recent Videos
  into the Keynotes & Highlighted Sessions block (now badged FEATURED).

## Sun, 21-Jun-2026

- Removed duplicated content on the `/profile/` page. The custom gradient "hero"
  block restated the same name, role, and availability that the standard page
  header (subheadline + h1 + teaser) already shows. Dropped the hero so the page
  matches every other page, keeping only the genuinely unique extras as in-flow
  content: the fuller bio sentence and the positioning quote.
- Split the `/profile/` teaser onto two lines (role descriptors + "25+ Years" on
  the first, availability on the second). Added a clean `meta_description` so the
  line break doesn't leak into the SEO/Open Graph meta tags.

## Fri, 19-Jun-2026

- De-duplicated the client/references list. The industry-grouped grid was
  hand-maintained identically on both the homepage and `/references/`. Moved the
  data to a single source (`_data/clients.yml`) rendered by a shared include
  (`_includes/_client-grid.html`), so updates now happen in one place.
- Added balanced vertical padding above and below the EoT/TW/AI badge legend so
  it sits evenly within its section instead of hugging the bottom edge.
- Polished the new palette based on feedback: (1) increased the spacing between
  the EoT/TW/AI legend groups so they read as distinct items; (2) removed the
  empty light/dark band that sat above the footer — it was a 160px spacer on the
  back-to-top row (`#up-to-top`), now a slim full-width navy strip that blends
  into the footer with a subtle arrow; (3) in dark mode the logo's indigo arcs
  blended into the dark header, so the logo now sits on a light circular chip to
  make all three brand colours pop.
- Reworked the whole-site colour palette to derive from the EoT logo (indigo-blue
  `#283890`, green `#0b9444`, red `#bf1e2e`) instead of the old navy/steel-blue/amber
  scheme. Indigo is the brand anchor (nav, headings, hero, footer, buttons), green is
  the vibrant accent (stats band, links, card borders, footer links, ★ markers) and
  red stays for alerts. Applied across light + dark mode and mobile + desktop:
  re-pointed the `$ci-*` tokens (`_01_settings_colors`), the design tokens and
  dark-mode tokens (`_12_eot_overrides`, including a brightened `$dk-green` for
  accessible accents on dark), the engagement badges (EoT→green, AI→indigo; TW stays
  ThoughtWorks red so the three mirror the logo trio), the nav ★ colour, and all
  hardcoded inline colours in the content pages. All 84 Playwright tests pass.
- Added a "Last updated: DD Mon YYYY, HH:MM IST" line to the footer subfooter
  (visible on all pages), driven by the Jekyll build time and showing the
  timezone. Set `timezone: Asia/Kolkata` in `_config.yml` so the time renders in
  IST rather than the build server's UTC.
- Made local build assets (main stylesheet, modernizr, mediaelement) load via a
  host-relative path (`{{ site.baseurl }}/assets/...`) instead of the absolute
  `{{ site.url }}` path. In production builds `{{ site.url }}` is the live domain,
  so the CI Playwright tests were loading CSS/JS from the *deployed* site rather
  than the freshly built `_site` they serve on localhost — meaning no CSS change
  could ever be verified in CI (the deploy only happens after tests pass). This
  was the real reason the references-grid fixes "didn't work" in CI.
- Fixed the client-references grid on mobile: badges (EoT/TW/AI) were being
  clipped in the cramped 2-column layout on phones. Rewrote the industry grid as
  "narrow-first" — single column by default, widening to 2 columns at
  `min-width: 820px` and 3 at `min-width: 1180px`. Added a regression test
  asserting badges stay within their row.
- Listed Reliance Jio across four categories (Telecom, E-Commerce & Retail,
  Enterprise Products/Platforms/Tools, and Consulting & Professional Services),
  each annotated with the relevant product line (MyJio/Jio.com; Ajio/Jio Prime
  Merchant; JioMeet/Enterprise/JPW; QECC).
- Renamed the "Developer & Testing Tools" category to "Enterprise Products,
  Platforms & Tools" to reflect its mix of enterprise products and testing tools,
  and annotated Microsoft with LiveMeeting.
- Reorganised the client references (landing page and References page) from the
  broad "SaaS & Enterprise" bucket into more specific industries: added
  Banking, Finance & Insurance; Automotive; Consulting & Professional Services;
  Developer & Testing Tools; merged Gaming with OTT. Moved companies to fit
  (e.g. Tieto Evry → Banking, McKinsey → Healthcare, Moolya/Srijan → Consulting,
  Sony → E-Commerce, Vuclip → Gaming & OTT, OVE → Automotive).
- Added engagement-source badges to the client references (landing page and
  References page): an `EoT` badge (Essence of Testing) and a `TW` badge
  (ThoughtWorks), styled like the existing `AI` badge, with both shown in the
  legend.
- Added the missing ThoughtWorks clients to references: Sears (Retail), Sony
  (Gaming), and McKinsey, OVE, Suncorp (SaaS & Enterprise).
- Added a hidden honeypot (`_gotcha`) field to the contact form so Formspree
  silently discards bot submissions, with no friction for real visitors.
- Added a **Recent Videos** section at the top of the Talks & Videos page,
  highlighting the 2 most recent talks ("Let the AI experiments begin!" and
  "The Path to Autonomous Testing" — Agile India 2025) as click-to-play cards.
- Removed "The Path to Autonomous Testing" from the All Talks list to avoid
  duplication with the new Recent Videos section.

## Wed, 17-Jun-2026

- Reworked the theme (dark mode) toggle to sit inside `ul.right` as a nav-styled
  text label, matching the CONTACT / MY PROFILE appearance.
- Increased spacing between the theme toggle and the NAV label on mobile.
- Fixed the dark mode toggle reliability: moved `initThemeToggle` out of the nav
  IIFE into `default.html` (early-return bug) and moved the button outside the
  Foundation nav so clicks are no longer intercepted.
- Upgraded the CodeQL workflow to v3 actions to clear outdated-scan warnings.
- Upgraded GitHub Actions to Node 24-native versions.
- CI: capture screenshots on failure and upload the `test-results` artifact.
- CI: ignore external script errors (Google Analytics is blocked in headless runs).
- Fixed flaky tests by filtering third-party JS errors and using a non-bubbling
  click to bypass Foundation nav interception.
- Fixed the mobile overlap test to check the toggle's right edge against the
  hamburger zone instead of the full bounding box.
