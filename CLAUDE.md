# Project conventions

## Changelog (required)

Whenever you make any change to the site, add a corresponding entry to
[CHANGELOG.md](CHANGELOG.md) in the same change.

- Newest entries first.
- Date heading format: `## DDD, DD-MMM-YYYY` (e.g. `## Fri, 19-Jun-2026`).
  Add a new heading only if today's date isn't already present; otherwise append
  a bullet under the existing heading for today.
- One bullet per change, written for a human skimming "what changed and why" —
  not a copy of the commit message.
- `CHANGELOG.md` is excluded from the published Jekyll build (see `exclude:` in
  `_config.yml`); it is maintainer-only and must never appear on the live site.

## Testing (required)

Before telling the user a change is ready/done, run the Playwright test suite
and confirm it passes. Do not declare a change ready on the basis of the edit
alone.

- The tests run against a live site at `http://localhost:4000`, so start the
  Jekyll server first: `bundle exec jekyll serve` (or set `BASE_URL`).
- Run the suite: `npm test` (`playwright test`). View the last report with
  `npm run test:report`.
- If tests fail, report the failure with output — do not call the change ready.
- If a change has no test coverage and could plausibly break behavior, add or
  update a test under `tests/` as part of the change.

