# Site Changelog

A private, human-readable log of changes to the site. This file is excluded from
the published Jekyll build (see `exclude:` in `_config.yml`) and is for maintainer
reference only.

Newest entries first. Format: `## DDD, DD-MMM-YYYY` then a bullet per change.

## Fri, 19-Jun-2026

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
