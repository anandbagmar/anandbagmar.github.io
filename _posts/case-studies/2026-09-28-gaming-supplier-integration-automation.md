---
layout: page-fullwidth
title: "1,080 Combinations, 15 Real Ones"
teaser: "An engineering architecture story at a large multi-brand online gaming operator: modelling a supplier matrix as a tree - not a product - cut 1,080 combinations to 15, and turned a recurring multi-day cost into a one-off, one-hour one."
breadcrumb: true
show_meta: false
header:
    title: Case Study
    image_fullwidth: "header-bg.jpeg"
categories:
    - case-studies
---

<div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-bottom:2rem;">
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DOMAIN: Gaming</span>
  <span style="background:#2b7fb0;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">TYPE: Architecture &amp; Test Automation</span>
  <span style="background:#c8821a;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">SCALE: 6 Integrations · 88 Scenarios</span>
</div>

> **What is masked and what is not.** This describes real work at a large multi-brand online gaming operator. The operator, its brands, its game suppliers and its internal frameworks are masked - they are not the interesting part. The tools are named because they are public and reproducible: [teswiz](https://github.com/anandbagmar/teswiz), Cucumber, RestAssured, JUnit 5, Gradle, GitLab CI, Selenium, Playwright, Appium, Applitools, Specmatic. Every structural metric below is real and unmodified.

## The Challenge

Test one business operation - place a bet - across 6 integrations, 5 brands, 3 markets, 3 environments and 4 games. Multiplied out, that's **1,080 combinations**. Every integration performs the same business operations but reports them in a different technical dialect - the same rejected-bet error comes back as a nested error code from one supplier, a numeric status from another, an HTTP error from a third.

Two test frameworks had already been built and both stalled. Neither could add an integration without multiplying the codebase, and neither could run in parallel. Onboarding a new integration took **days**, mostly manual, and that cost recurred on every regression cycle. Adopting the organisation's central shared test framework was evaluated seriously and declined for one specific structural reason: it has no business-abstraction layer, so its assertions are welded to each integration's wire format.

**This is phase one, not the ceiling.** Today's 1,080 combinations describe the current scope. The grand goal spans 2 regions, 15+ markets, 15+ brands, 20+ suppliers, 3+ games per supplier, and 4 environments (dev, QA, stage, UAT) - run consistently across API, web, and Android/iOS automation. Multiplied out as an illustrative cross-product, that's over **108,000 nominal combinations** - more than 100x today's 1,080 - and over **432,000 execution contexts** once API, web, Android and iOS are counted as separate automation surfaces per combination. Brands won't expose every supplier in every market any more at that scale than they do today, so the real count will again be a small fraction of that - the same tree-not-product principle, just proven at 100x the size. Adding the next market, brand, supplier, or game only means adding its data - the tests scale automatically, with no new code required - and because the same automated tests are written once against business intent, they already run unchanged across API, web, and mobile (Android/iOS), in whichever environment a run targets.

<div style="margin:1.75rem 0;">
  <img src="/assets/img/gaming-scale-infographic.png" alt="Diagram comparing the original case study (6 integrations, 5 brands, 3 markets, 3 environments, 4 games = 1,080 combinations) against the grand-goal scale (2 regions, 15+ markets, 15+ brands, 20+ suppliers, 3+ games per supplier, 4 environments = 108,000+ nominal combinations, 432,000+ execution contexts across API, web, Android and iOS)" style="width:100%; height:auto; border-radius:8px; border:1px solid #dde1f0; box-shadow:0 2px 8px rgba(40,56,144,0.08);" />
</div>

---

## Approach

**The matrix is a tree, not a product.** Brands don't expose every integration - modelling the domain correctly (walking the real topology instead of a full cross-product) collapsed 1,080 nominal combinations to **15 real ones**, before writing a line of code.

**Separate business meaning from wire truth, and enforce the boundary.** Feature files stay in business language. A transport layer absorbs every dialect difference and exposes only business questions (`wasLastBetAccepted()`, `currentBalance()`). No HTTP or JSON type may cross into the business layer - so every integration's assertion code is identical, character for character. This rule is what let a sixth integration be onboarded without touching a single existing file.

**Inject the combination at runtime instead of writing it into the tests.** A scenario declares which brands/markets/integrations it's valid for; a CI job supplies the one combination it *is*, composed into a Cucumber tag filter automatically. That's what turned 15 combinations into 88 scenarios instead of 1,320.

**Design for parallelism from the first commit, and make false greens impossible.** No mutable state is allowed in the business layer - enforced by a Gradle task that fails the build on violation. Every close call that produced a false-positive test (a status check that ignored HTTP errors, a parallelism race, a wrong-account pass) became a rule *and* an automated guard, not just a fix.

**Generate the CI pipeline from the same domain model that drives the tests.** 93% of the GitLab CI YAML (2,072 of 2,236 lines) is generated from the topology - a coverage gap shows up as a visible amber warning in the pipeline graph rather than a silent hole.

---

## Outcomes

| Measure | Before | After |
|---|---|---|
| Onboard + automate a new integration | Days, manual, repeated every cycle | **~1 hour**, once - then automated |
| Files to add an integration | ~15, copy-pasted, no shared base | **2 classes + 5 lines of wiring** |
| Effect on existing tests | Regression risk across the suite | **Zero existing files changed** |
| Combinations covered | - | **15, from 88 scenarios** (not 1,320) |
| Parallel execution | Impossible (shared static state) | Built in, 5-way |
| Who can author a test | Test engineers only | **Anyone who can read a sentence** |
| CI pipeline maintenance | Hand-edited | **93% generated** from the domain model |
| Fastest feedback | - | **515 unit tests in ~9 seconds** |
| Scale the architecture is built for | - | **2 regions · 15+ markets · 15+ brands · 20+ suppliers · 3+ games/supplier · 4 environments, over API, web, and Android/iOS** |

The sixth integration was onboarded in a single, measured commit: 18 files, 831 lines - and every existing step definition, feature file, sibling integration and shared contract stayed untouched.

*These figures are reported by the team who did the work before and after, and corroborated independently against the codebase - see the full technical deep-dive for how each number was verified.*

---

> *The win wasn't making a task faster. It was moving cost from every regression cycle to once per integration - and discovering the combinatorial explosion was 98% imaginary.*

---

Read the [full technical deep-dive](/case-studies/gaming-supplier-integration-automation-deep-dive/) - architecture, the two frameworks that failed and why, the decision not to adopt the shared framework, the honest limits of what's built vs. designed, and why the same architecture principles apply to keeping AI-enabled systems trustworthy as they change →

<a href="/contact/" style="display:inline-block;background:#1c3a5c;color:#fff;padding:0.6rem 1.3rem;border-radius:4px;text-decoration:none;font-weight:600;">Discuss an engineering challenge →</a>
&nbsp;
<a href="/case-studies/" style="display:inline-block;background:#2b7fb0;color:#fff;padding:0.6rem 1.3rem;border-radius:4px;text-decoration:none;font-weight:600;">← All Case Studies</a>
