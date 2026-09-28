---
layout: page-fullwidth
title: "1,080 Combinations, 15 Real Ones: The Full Technical Deep-Dive"
subheadline: "An engineering architecture story: turning a combinatorial explosion into a domain model"
teaser: "How the right abstraction boundary - not more test-writing effort - turned a recurring, multi-day integration cost into a one-off, one-hour one. Two frameworks that failed and why, the decision not to adopt the shared platform, five design decisions, and the honest limits of what's built vs. designed."
permalink: "/case-studies/gaming-supplier-integration-automation-deep-dive/"
breadcrumb: true
show_meta: false
header:
    title: Case Study — Deep Dive
    image_fullwidth: "header-bg.jpeg"
---

<div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-bottom:2rem;">
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DOMAIN: Gaming</span>
  <span style="background:#2b7fb0;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">TYPE: Architecture &amp; Test Automation</span>
  <span style="background:#c8821a;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">SCALE: 6 Integrations · 88 Scenarios</span>
</div>

<p><a href="/case-studies/gaming-supplier-integration-automation/">← Back to the case-study summary</a></p>

> **What is masked and what is not.** This describes real work at a large multi-brand online
> gaming operator. The **operator, its brands, its game suppliers and its internal frameworks are
> masked** — they are not the interesting part. The **tools are named**, because they are public and
> reproducible: [teswiz](https://github.com/anandbagmar/teswiz), Cucumber, RestAssured, JUnit 5,
> Gradle, GitLab CI, Selenium, Playwright, Appium, Applitools, Specmatic, Oracle, HikariCP, AssertJ.
> Every structural metric — file counts, line counts, test counts, timings — is real and unmodified.

> **Why this belongs under Engineering, not just Testing.** The interesting decisions here aren't
> testing decisions - they're architecture and engineering-effectiveness decisions that happen to be
> demonstrated through a test framework. Modelling a matrix as a tree instead of a product, drawing a
> hard boundary between business intent and wire format, generating a CI pipeline from a domain model,
> converting every false-positive into an enforced rule - none of that is testing-specific. It's how
> you keep a fast-changing, multi-dialect system verifiable as it grows. §9 makes the connection to
> AI-enabled engineering explicit: the same problem - proving a system still behaves correctly as its
> parts keep changing - is what makes agentic systems hard to trust in production.

---

### Executive Summary

**The shape of the problem.** Test one business operation — place a bet — across 6 integrations,
5 brands, 3 markets, 3 environments and 4 games. Multiplied out that is **1,080 combinations**.
Every integration performs the *same* business operations and reports them in a **different
technical dialect**. This is the combinatorial problem that breaks conventional test suites:
duplication grows on every axis at once, and each axis is expected to keep growing.

**Why the obvious approaches failed.** Two test frameworks were built and both stalled. Neither
could add an integration without multiplying the codebase; neither could run in parallel. Onboarding
a new integration for testing took **days**, largely manually, and that cost recurred on every
regression cycle. Adopting the organisation's central shared framework was evaluated seriously and
declined for one structural reason.

**What changed.** Two decisions did most of the work. First, **the matrix is a tree, not a
product** — model it correctly and 1,080 nominal combinations collapse to **15 real ones**. Second,
**the combination is injected at runtime as a tag filter** rather than written into the tests — so
15 combinations cost **88 scenarios instead of 1,320**.

**The outcome.**

| Measure | Before | After |
|---|---|---|
| Onboard + automate a new integration | **Days**, manual, repeated every cycle | **~1 hour**, once — then automated |
| Files to add an integration | ~15, copy-pasted, no shared base | **2 classes + 5 lines of wiring** |
| Effect on existing tests | Regression risk across the suite | **Zero existing files changed** |
| Combinations covered | — | **15, from 88 scenarios** |
| Parallel execution | Impossible (shared static state) | Built in, 5-way |
| Who can author a test | Test engineers only | **Anyone who can read a sentence** |
| CI pipeline maintenance | Hand-edited | **93% generated** from the domain model |
| Fastest feedback | — | **515 tests in ~9 seconds** |

**The transferable insight.** The win was not making a task faster. It was moving cost from *every
regression cycle* to *once per integration* — and discovering that the combinatorial explosion was
98% imaginary.

---

### 1. Why this domain is combinatorially nasty

An online casino does not build its own games. It integrates **suppliers** who do. A player sees
one seamless product; behind it each game may be served by a different company, over a different
API, under different regulatory rules, for a different brand, in a different currency.

Six integrations were in scope: three third-party suppliers (**Supplier-A**, **Supplier-B**,
**Supplier-C**) and three first-party platform services (**Wallet-API**, **Casino-API**,
**Integration-Service**).

Integrations also run in two directions, which changes the blast radius of a mistake:

| Direction | Who calls whom | Who owns the contract | Risk |
|---|---|---|---|
| **Platform → Supplier** | Platform calls the supplier | Supplier publishes | One integration breaks |
| **Supplier → Platform** | Supplier calls the platform | Platform publishes | **Every** integration breaks at once |

#### 1.1 The root difficulty: identical meaning, incompatible truth

One business outcome — *a bet is rejected because the player's session is invalid* — reported four
different ways:

```
Business meaning (identical everywhere)
    "the bet was rejected because the player session is invalid"

Technical truth (different everywhere)
    Supplier-A           HTTP 200, error nested at  response.error.errorCode
    Supplier-B           HTTP 200, numeric code in  body.statusCode
    Wallet-API           HTTP 4xx, plus             body.error_code
    Integration-Service  its own shape again
```

A test asserting on technical truth must be **rewritten per integration**. A test asserting on
business meaning can be written **once** — but only if something underneath translates. That
missing translation layer is the whole problem.

The same pattern repeats on every axis: one logical game carries a different identifier per
integration; currency, locale and regulatory jurisdiction vary by market; the account balance
appears at a different path depending on which call you just made.

#### 1.2 The naive arithmetic

```
6 integrations × 5 brands × 3 markets × 3 environments × 4 games  =  1,080 combinations
```

Every axis was expected to grow. Under a structure of ~15 files per integration, copy-pasted with
no shared base, the integration axis alone compounds:

```
1 integration   →   ~15 files
6 integrations  →   ~90 files, maintained in parallel, drifting apart
```

---

### 2. Why two previous frameworks could not scale

Two frameworks preceded this one. They failed for *different* reasons, which matters because the
replacement had to answer both.

| | Framework 1 | Framework 2 |
|---|---|---|
| **Stack** | Cucumber-JVM + Spring Context + OkHttp + an internal service registry | RestAssured + JUnit 5 + Oracle JDBC + HikariCP |
| **Business-readable tests?** | Yes (Gherkin) | No — Java only |
| **Coverage** | Multi-brand, API only | **One** integration |
| **Decisive flaw** | No layering; shared static state | No abstraction; duplication per integration |

**Framework 1** got real things right: Gherkin scenarios non-developers could read, reusable steps,
per-environment config, direct database verification, genuinely-issued auth tokens. What killed it:

- **No layered architecture.** Step definitions made HTTP calls directly, so business intent and
  transport were the same code and neither could change independently.
- **A shared `static` token field.** Parallel execution was not slow, it was *impossible*.
- **One monolithic step-definition class.** Adding an integration meant growing it.
- **OkHttp with unsafe TLS and no request/response logging** — a security anti-pattern and a
  debugging dead end.
- **Spring and service-registry coupling** that added enterprise complexity with no benefit to test
  code.
- Hardcoded identifiers and tokens; no contract testing; no offline mode; no path to UI testing;
  and **no unit tests of the framework itself**.

**Framework 2** was, in isolation, cleaner code: proper separation of config, constants, helpers,
request builders and tests; real HTTP logging via RestAssured; traceable generated IDs; thorough
multi-table database validation; HikariCP pooling. It failed **on scale, not on quality**:

- **Structural duplication.** Each integration needed its own suite class, base class, client,
  request builder, response validator, constants and data beans — ~15 files, no shared base. A
  second integration meant copy-paste.
- **A separate class per request and response type.**
- **Onboarding cost.** A newcomer had to understand beans, builders, clients, validators, a
  three-level-deep config hierarchy, suite definitions and base classes *before writing one test*.
- **No BDD**, so only test engineers could author or review.
- **No environment-fault detection.** A gateway 502 looked exactly like a test failure, so every
  red run needed manual triage.
- **No parallelism, no tag-based selection**, and dead code for four abandoned integrations.

#### 2.1 The eight shared gaps — and the one that mattered

| # | Gap | Consequence |
|---|---|---|
| 1 | No layered architecture | Tests welded to HTTP |
| 2 | No thread safety, no parallelism | Runtime grows linearly with test count, forever |
| 3 | Hardcoded data, static tokens | Tests break when data changes or tokens expire |
| 4 | No contract testing | API drift found only at runtime, in a flaky environment |
| 5 | No offline/mock capability | Every test needs live environment access |
| 6 | No UI path | No route to browser automation |
| 7 | **No multi-integration abstraction** | Every new integration multiplies the codebase |
| 8 | No unit tests of framework code | Framework bugs surface late, inside integration runs |

**Gap 7 forced a rebuild.** Gaps 1–6 and 8 are ordinary debt a determined team can pay down inside
either codebase. Gap 7 is an *architectural absence*: there was nowhere to express "this operation
means the same thing but happens differently here." You cannot refactor your way to a missing seam.

The cost being paid, stated plainly: **days of largely manual work per integration, recurring every
regression cycle.** Neither framework reduced the marginal cost of the *next* integration.

---

### 3. Why not just adopt the shared framework?

The obvious move is to stop building bespoke frameworks and adopt the central one. It was evaluated
properly, and the reasoning generalises well beyond this organisation.

The shared framework was mature and genuinely capable: a published library, broad coverage (web,
API, database, message queues, SOAP, SSH), rich reporting, test-management integration, cloud
execution. For most work in the organisation it is the right answer.

It did not fit **this** problem for one structural reason: **no business abstraction layer**, so
assertions sit at HTTP level. The same test, both ways:

**Shared framework — the assertion welds the test to one integration's wire format**

```java
@Test
public void betWithExpiredTokenIsRejected() {
    Response response = post(BASE_URL + "/bet", buildExpiredTokenBody());
    validateStatusCode(response, 200);
    assertTrue(response.getBody().contains("\"statusCode\":101"), "...");
}
```

**What was built instead — the assertion states the business outcome; routing is a tag**

```gherkin
@supplier_b @brand_a1 @negative
Scenario: Bet with expired token returns invalid player session error
  Given a player session is active for "expired-token" user
  When the player places a bet of 2.0
  Then the bet is rejected with "INVALID_PLAYER_SESSION"
```

The second scenario is integration-agnostic. Change the tag to `@wallet_api` and it still expresses
the right intent, because `INVALID_PLAYER_SESSION` resolves to each integration's real code from
configuration, and the decoding lives in that integration's own transport class. The first scenario
has `101` welded in permanently.

Across 6 integrations and 88 scenarios, HTTP-level assertions reproduce exactly the Framework 2
failure: **duplication on every axis.**

**Decision: don't merge.** One is a domain-specific solution, the other a general-purpose library;
merging dilutes both. The recommendation went both ways — the shared framework would benefit from
the JSON Schema config validation described in §5.3, since its own config errors surfaced as cryptic
runtime stack traces. And it remains the better choice for general-purpose automation,
test-management traceability, and message-queue/SOAP/SSH work, none of which this framework does.

#### 3.1 Why teswiz, and what it cost

[teswiz](https://github.com/anandbagmar/teswiz) was chosen as the foundation. It supplies the
thread-local execution context, Cucumber lifecycle, parallel execution, driver management and
reporting, over Selenium, Playwright-Java, Playwright-TypeScript, Appium and RestAssured. Two things
made it the right call.

**It covers the organisation's approved stacks rather than diverging from them.** The internal
standards group recommended Playwright+TypeScript or Java+Selenium; teswiz supports both natively,
so it is an opinionated layer on approved tools, not a departure.

**It supplies the skeleton for a team without deep Java.** Contributors *follow* patterns rather
than *design* them. Building directly on RestAssured and Selenium would have meant hand-building
thread-safe context management, driver lifecycle, parallel session isolation and a config layer —
exactly the work the team was least equipped to do well.

The costs, accepted knowingly:

- Deeper stack traces — you debug your code *and* framework code.
- Framework upgrades can introduce breaking changes you do not control.
- Triage spans **three** layers (framework bug / test bug / environment) rather than two.
- A smaller community than the raw libraries, so less searchable prior art.
- A dual learning curve: teswiz patterns *plus* project conventions.

Four reconsider triggers were recorded, so the decision is dated rather than permanent: team Java
depth improving; teswiz becoming unmaintained; scope expanding to heavy UI work; or the standards
group mandating Playwright+TypeScript, which teswiz already supports.

---

### 4. The approach

Five decisions, each answering a named failure above.

#### 4.1 Separate business meaning from wire truth — and enforce the boundary

```
Feature files (Gherkin)   business language, zero technical detail
      │
Step definitions          max ~3 lines, one call, ZERO assertions
      │
Business Layer            business intent + ALL assertions
      │                   no Response, Map, UUID or JSON type ever appears here
Transport (*ApiClient)    endpoints, headers, marshalling, credentials,
                          the private RestAssured Response, all wire decoding
```

The load-bearing rule: **no HTTP or JSON type may cross from transport back up to the business
layer.** The transport exposes *operations* (`bet`, `win`, `voidBet`) and *business questions*
(`wasLastBetAccepted()`, `currentBalance()`, `isSessionActive()`) answering with a boolean or value.
The business layer turns answers into AssertJ assertions; it never sees a response.

The payoff: every integration's assertion code is **identical**.

```java
@Override public IntegrationBL assertBetRejected(String errorCode) {
    softly().assertThat(transport().wasLastBetRejectedWith(errorCode))
            .as("Bet should be rejected with '%s'", errorCode)
            .isTrue();
    return this;
}
```

All six integrations have that method, character for character. Every dialect difference lives
inside each transport's `wasLastBetRejectedWith(...)`.

#### 4.2 Turn everything that could be an `if` into data

| Dimension | Lives in | Code change to add one? |
|---|---|---|
| Region / market / brand / integration / game topology | `topology.json` | No |
| Brand identifiers and behaviour flags | `brands.json` | No |
| Integration endpoints **and error-code → business-name maps** | `integrations.json` | No |
| Games (per-integration identifiers) | `games.json` | No |
| Country → regulatory jurisdiction | `jurisdictions.json` | No |
| Test accounts (pooled per brand + integration) | `users-{env}.json` | No |
| Per-combination expected outcomes | `expectedData.json` | No |
| Environments (URLs, database, API keys) | `environments.json` | No |
| **A new integration's protocol** | 1 business-layer class + 1 transport + 2 wiring lines | **Yes** |

The integration is the *only* thing needing code, because a new protocol is genuinely new
behaviour. Everything else is new *data*. Two details that are design, not detail:

- **Derived, not stored.** Regulatory jurisdiction is derived from the market's country, so it
  cannot drift out of sync with the market it describes.
- **Error codes are data.** Each integration's config carries its own map, e.g.
  `{"101": "INVALID_PLAYER_SESSION", "102": "INSUFFICIENT_FUNDS"}`. Even the first-party /
  third-party tag prefix is derived from an ownership field rather than hand-maintained.

#### 4.3 Inject the combination at runtime; keep it out of the tests

A scenario declares which axes it is *valid for*. A run declares which single combination it *is*.
The intersection is computed at runtime — see §5.2. This is what prevents 15× duplication.

#### 4.4 Design for parallelism from the first commit

Framework 1 died on one `static` field. The replacement inverts the rule: **business-layer classes
hold no mutable state at all.** Per-scenario state lives in teswiz's thread-local
`TestExecutionContext`, keyed by constants.

That is not a convention — it is **enforced by a Gradle task** that fails the build if any
business-layer class declares a mutable field, wired into both the local test command and a
dedicated GitLab CI job.

#### 4.5 Make false greens impossible

In a test framework, a passing test that should have failed is the worst possible defect: it
destroys the only thing the suite exists to provide. Each occurrence produced a rule *and* an
automated guard. Three real ones:

- **A positive check that ignored status.** One transport's "did the feed come back?" question
  checked only response *shape* — but an error response has a shape too, so it returned `true`
  against an HTTP 500 and passed for a whole CI run. The rule now: every positive business question
  must assert `statusWas(HTTP_OK) && <shape check>`. Shape alone is never enough.
- **A parallelism race inside RestAssured.** An environment-fault filter was registered on
  RestAssured's *static global* filter list; under `PARALLEL=5`, concurrent `given()` calls raced it
  and every scenario for one integration died with an NPE. Requests now go through a per-request
  factory, and **two architecture tests fail the build** if a bare `RestAssured.given()` or
  `RestAssured.filters(...)` returns.
- **A wrong-account pass.** If a scenario requested a transport for a *different* user profile than
  the one already active, silently returning the cached one would make a negative test exercise the
  wrong account and **pass for the wrong reason**. It now throws. A scenario needing two profiles
  must be split in two.

A standing rule reinforces this: tests are **never** edited to make them pass. A failure gets a
root-cause analysis and a human decision.

---

### 5. The solution

#### 5.1 One shared base; a new integration is a thin delta

```
AbstractBL                       log4j2 logger + AssertJ soft assertions
 └── AbstractIntegrationBL       user + token resolution, balance tracking, DB verification
      └── SupplierIntegrationBL  lazy, PLATFORM-resolved, per-scenario transport
           ├── Supplier-A BL            282 lines
           ├── Supplier-B BL            240 lines
           ├── Supplier-C BL            342 lines
           ├── Wallet-API BL            333 lines
           ├── Casino-API BL            233 lines
           └── Integration-Service BL   313 lines
```

The class that makes the hierarchy work is **71 lines**. It adds one thing: a transport resolved
lazily and cached for the scenario in the teswiz context.

Two resolution axes, deliberately separate:

| Run input | Answers | Mechanism |
|---|---|---|
| `INTEGRATION` | *which* integration | A factory — a 60-line `switch` |
| `PLATFORM` (`api` / `web`) | *how* it is driven | A resolver: `api` → the RestAssured client; anything else fails fast |

So the business layer is **platform-agnostic**: the same business intent can be driven over HTTP or
through a browser without the business layer knowing which.

The resulting asymmetry is the point:

```
Business layer   233–342 lines   one-line intent methods; assertions identical across integrations
Transport        553–949 lines   where every dialect difference is absorbed
Step classes     ~73 lines avg   98 step definitions across 15 classes, zero assertions
```

Thin steps, thin business layer, fat transports. Complexity is pushed into the one layer that
genuinely differs.

#### 5.2 The matrix is a tree — and the coordinate is a runtime input

Brands do not expose the same integrations. Modelling the matrix as a cross-product invents
hundreds of combinations that do not exist, each becoming a false CI job or a false coverage gap.

```
Region-1
├── Market-A  (3 environments)
│   ├── Brand-A1 → Supplier-A, Supplier-B, Wallet-API, Casino-API, Integration-Service   5
│   └── Brand-A2 → Supplier-A, Supplier-B, Wallet-API, Casino-API, Integration-Service   5
└── Market-B  (1 environment)
    ├── Brand-B1 → Supplier-B, Supplier-C                                                2
    └── Brand-B2 → Supplier-B, Supplier-C                                                2
Region-2
└── Market-C  (1 environment)
    └── Brand-C1 → Supplier-A                                                            1
                                                              real combinations:        15
```

**15 real combinations, not 1,080.** A 98% reduction from modelling the domain correctly, before
writing any code.

A scenario declares the axes it is valid for — note *two* brands on one axis:

```gherkin
@env_staging @region_1 @market_a @brand_a1 @brand_a2 @supplier_a @negative
Scenario: Money transaction with expired secure token returns error
```

A run declares one combination, and Gradle composes the Cucumber filter:

```bash
## Run inputs (env vars, else config.properties)
ENVIRONMENT=staging  REGION=region_1  MARKET=market_a  BRAND=brand_a1  INTEGRATION=supplier_a

## Composed automatically
TAG = @env_staging and @region_1 and @market_a and @brand_a1 and @supplier_a

## A user-supplied TAG is ANDed on, never replaces the combination
TAG="@sanity" ./gradlew run
  → @env_staging and @region_1 and @market_a and @brand_a1 and @supplier_a and (@sanity)
```

A teswiz `@Before` hook runs the reciprocal half: it narrows each multi-valued axis to exactly one
using the run's filter, then validates the result against the topology — **failing before any
account is leased, any token minted, or any HTTP call made**, with an error listing only the
combinations that actually exist.

```
Scenarios written:                                          88
If each combination needed its own copy:  88 × 15  =     1,320
Scenarios actually written:                                 88
```

#### 5.3 Configuration errors cannot reach a test run

Five guards, all runnable in one local command and each a dedicated GitLab CI job:

| Guard | Catches |
|---|---|
| JSON Schema validation at startup | Malformed config, missing required fields |
| Cross-file + topology consistency | A topology referencing a brand/integration/game that doesn't exist |
| Tag validation | Unknown identity tags; a filter that would silently match zero tests |
| Stateless-business-layer validator | Any business-layer class that grew a mutable field |
| Generated-pipeline staleness validator | Committed CI files drifting from the domain model |

The principle: a misconfiguration should fail **at startup with a precise message**, not as a
cryptic assertion twenty minutes into a pipeline.

#### 5.4 The CI pipeline is generated from the domain model

`topology.json` is also the pipeline's source of truth. A generator walks it and emits **2,072 of
the 2,236 lines** of GitLab CI YAML. Only 164 lines are hand-written.

```
Parent:   build → unit tests → per-market API tests → per-market workflow tests
                  (6 trigger jobs: one per market × {api, workflow})
                                   │
Child (per market):  15 API leaves + 15 workflow leaves = 30 leaf jobs
                     + 6 aggregation/gate jobs
```

Leaf jobs are named to exploit GitLab's grouping-by-prefix, so each brand becomes an expandable card
and the graph reads as a drill-down:

```
▸ BRAND-A1: supplier_a [market_a]        ▸ BRAND-A2: supplier_a [market_a]
▸ BRAND-A1: supplier_b [market_a]        ▸ BRAND-A2: supplier_b [market_a]
▸ BRAND-A1: wallet_api [market_a]        ▸ BRAND-A2: wallet_api [market_a]
```

A leaf job is pure data — the combination as variables — and Gradle turns it into the tag filter.
Three behaviours worth stealing:

**Coverage gaps are amber, not red, and visible.** Every combination gets a job, but one may
legitimately have no scenario yet. Each leaf runs a coverage pre-flight; with no match it writes a
valid zero-test JUnit report and exits with a code declared in `allow_failure: exit_codes` — so
GitLab shows a warning rather than a hard failure that would skip the downstream gate. The job name
carries the gap in plain sight:

```
BRAND-A1: supplier_a [market_a]                            ← covered, blocking
BRAND-A1: integration_service [market_a] ⚠️ no scenarios    ← real gap, visible
```

The suffix means exactly one thing: *a real combination is missing coverage.* Work-in-progress
placeholder brands are exempt, so it never cries wolf.

**Shared test accounts are protected at two levels.** Within a JVM, a pool leases one account per
scenario from a per-(brand, integration) pool — 15 pools × 5 accounts = 75 accounts — with pool size
validated to be at least `PARALLEL`. Across pipelines, a GitLab `resource_group` per
(brand, integration) serialises jobs that would touch the same real accounts.

**Failure reporting is built for the medium.** The aggregation job emits a failure tree and a
per-feature summary as **YAML rather than fixed-width tables**, because tables soft-wrap and
misalign in narrow CI logs. Each failing combination links to the exact failing job:

```
failures:
  "BRAND-A1: integration_service":
    job: "https://ci.example/-/jobs/48213101"
    features:
      "Bet Negative Scenarios":
        - "Bet with insufficient funds returns error"
totals: { tests: 13, passed: 11, failed: 2, errors: 0 }
```

---

### 6. Results

#### 6.1 Days to about an hour

**Before.** Bringing a new integration under test was largely manual and took **days** — recurring
every regression cycle, for every integration.

**After.** A new integration is onboarded **and automated in about an hour**, then runs on every
pipeline at effectively zero marginal cost.

The *shape* of the change matters more than the ratio:

```
BEFORE                                       AFTER
one-off setup cost:   low                    one-off setup cost:   ~1 hour
per-cycle cost:       DAYS, manual           per-cycle cost:       ~0, automated
                      × every integration                          runs in CI
                      × every cycle
```

A **recurring** cost became a **one-off** one. Every cycle after the first is close to free.

> These figures are reported by the team who did the work before and after — practitioner
> measurements, not instrumented timings. The structural evidence below was verified independently
> from the codebase and corroborates them.

#### 6.2 Corroboration: one integration, one commit

The sixth integration was onboarded in a **single commit**. That commit is the measurement.

```
18 files changed, 831 insertions(+)
```

| Category | Files | Lines | Hand-written? |
|---|---|---|---|
| Transport (all dialect-specific work) | 1 | 408 | Yes |
| Business layer (thin intent + assertions) | 1 | 71 | Yes |
| **Wiring** (factory case + resolver arm) | 2 | **5** | Yes — 1 line and 4 lines |
| **Config** (topology, integration, game, users, env) | 5 | **36** | Yes, but data — no code |
| Feature file (first scenario) | 1 | 18 | Yes — Gherkin |
| Unit tests | 3 | 224 | Yes — written first, TDD |
| **GitLab CI YAML** | 5 | ~100 | **No — generated** |

The more important half is what that commit **did not** touch, verified path by path:

```
step definitions        UNTOUCHED     ← all 98 reused as-is
existing feature files  UNTOUCHED     ← no existing scenario edited
sibling integration BLs UNTOUCHED     ← no other integration's code edited
the shared base class   UNTOUCHED     ← needed no change
IntegrationBL contract  UNTOUCHED     ← needed no change
transport contract      UNTOUCHED     ← needed no change
```

That is the return on the architecture in one screen — against Framework 2, where the same change
meant ~15 copy-pasted files *and* a standing risk of regressing everything already covered.

**Caveat, so it is not over-read:** ~484 lines bought that integration's **first** scenario. Those
two classes have since grown to 342 and 949 lines as coverage deepened. The honest claim is *"an
integration enters the framework cheaply and disrupts nothing"*, not *"a fully covered integration
costs 480 lines."*

#### 6.3 Cost to extend, by change type

| Change | Work required | Code? |
|---|---|---|
| New test for an existing combination | Write a Gherkin scenario | No |
| New game | One `games.json` entry with per-integration identifiers | No |
| New brand | Two config edits + accounts + regenerate pipeline | No |
| New market or region | One topology node (jurisdiction derives itself) | No |
| New environment | Two config files | No |
| **New integration** | **~480 lines, nothing else disturbed, ~1 hour** | Yes, bounded |

Adding a brand or market makes CI jobs, tag filters and validation appear **automatically**, and the
staleness guard fails the pipeline if generated files were not regenerated — so a new combination
cannot silently escape CI.

#### 6.4 Reuse leverage

| Leverage | Ratio | Meaning |
|---|---|---|
| Scenario reuse across combinations | **88 → 15** | Per-combination duplication would need 1,320 |
| Step reuse across integrations | **98 steps → 6 integrations** | Integration six needed **zero** new steps for common operations |
| Pipeline authored vs generated | **164 / 2,072** | 93% of CI maintains itself from `topology.json` |

#### 6.5 Measured feedback speed

From report artefacts, not design targets:

| Layer | Measured |
|---|---|
| Unit suite | **515 tests in ~9 seconds** |
| Full API suite (87 scenarios) | **~50 seconds** — three consecutive runs at 50.11s / 51.26s / 49.68s |

The unit figure confirms the long-stated "under 10 seconds for first feedback" as genuinely
achieved. The 87-scenario figure is a recorded wall-clock across three consecutive runs; the run
configuration is not captured in the artefact, so treat it as evidence the suite is fast rather than
a controlled benchmark.

#### 6.6 What is deliberately not claimed

A monetary ROI would need three inputs the codebase does not hold:

| Missing input | Why it matters |
|---|---|
| Instrumented engineer-hours, before and after | Would convert the days→hour report into an audited figure |
| Defects caught pre-release, and their escape cost | Likely the largest ROI component, and entirely unmeasured |
| Manual triage hours saved by fail-fast fault detection | "A 502 looks like a test failure" had a recurring cost |

This case study claims **measured cost of change, measured reuse, and practitioner-reported
effort** — not an audited financial return. An invented ROI figure would be the first thing
challenged, and it would discredit the numbers that are real.

---

### 7. Honest limits

A case study that only reports wins is not useful.

**Designed but not built.** The wider strategy describes nine test layers; several are roadmap:

| Capability | Status |
|---|---|
| Contract testing via Specmatic (spec conformance + backward-compatibility) | Designed, not implemented |
| API and workflow tests against Specmatic stubs (fully offline) | Designed, not implemented |
| Guided generators for onboarding integrations and brands | Designed, not implemented |
| Dynamic game discovery, automated test-data refresh | Designed, not implemented |
| Back-office-driven feature workflows (bonuses, jackpots) | Partly blocked on API availability |
| UI testing (Selenium/Playwright via teswiz, Applitools visual checks) | Early — one login and game-launch journey |
| Canvas-rendered game content (OCR / image recognition) | Capability still to build |

This matters for the quoted end-to-end timings in the strategy documents: those are **design targets
for the complete pyramid**, not measured results. The layers that would deliver fast offline
feedback are precisely the unbuilt ones.

**Genuinely weaker than the alternatives.**

- No test-management integration; the shared framework has it.
- No message-queue, SOAP or SSH utilities at all.
- Leaner reporting than mature Allure/Extent-style stacks.
- **Not reusable as a library.** Project-specific; extraction is a future option, not a current fact.
- A real learning curve — Cucumber plus teswiz plus project conventions — and debugging means
  reading framework code as well as your own.
- **Environment dependence is unresolved.** Because the Specmatic layers are unbuilt, a flaky
  environment still produces red pipelines needing triage — the very problem contract testing was
  meant to address.

---

### 8. Transferable lessons

**1. Find the axis that actually multiplies.** Six of eight shared legacy problems were payable
debt. The one that was not — no abstraction for "same operation, different implementation" — forced
a rebuild. Diagnose *that* axis before choosing between refactor and rewrite.

**2. A combinatorial matrix is usually a tree.** Modelling brands × integrations as a product would
have produced hundreds of phantom combinations, each a false CI job or false coverage gap. 15 real
out of 1,080 nominal is a 98% reduction from *modelling the domain correctly*, before writing code.

**3. Keep the coordinate out of the test.** Inject the combination at runtime and 88 scenarios cover
15 combinations. Encode it in the tests and you have 1,320, and an unmaintainable suite long before
the matrix stops growing.

**4. "Adopt the shared framework" deserves a real answer, and it can legitimately be no.** The
central framework was stronger in general and remains right for other work. It was declined for one
articulable structural reason, not on preference. Declining a standard obliges you to state the
reason precisely and name the conditions under which you would revisit.

**5. Separate "what I mean" from "how it happens", then police the boundary.** Forbidding HTTP and
JSON types from crossing into the business layer is what lets six integrations share one assertion
vocabulary. Boundaries that are merely documented erode; these are enforced by architecture tests
and build-failing validators.

**6. Convert every framework bug into a guard rail.** A false green that passed for a whole CI run,
a parallelism race, a wrong-account pass — each produced a rule *and* an automated check, so the bug
class cannot return.

**7. Generate the pipeline from the domain model.** 93% of the CI configuration is generated, with a
staleness check that fails the build on drift. A new market cannot silently skip CI, and nobody
hand-edits 30 near-identical job definitions.

**8. Design for parallelism on day one.** One `static` field made Framework 1 permanently
single-threaded. Statelessness enforced by a build task is cheap at the start and nearly impossible
to retrofit.

**9. Make gaps visible.** Reporting "no tests exist for this real combination" as an amber warning
in the pipeline graph converts an invisible coverage hole into a visible work item.

**10. Turn recurring costs into one-off costs.** The real win was not making a task faster. It was
moving effort from *every regression cycle* to *once per integration*. When evaluating automation,
measure the marginal cost of the next unit of work, not the absolute cost of the first.

---

### 9. Why this generalises to AI-enabled engineering

None of this work involved an AI agent. It's included here because the underlying problem - **proving
a system still does the right thing as its parts keep changing** - is the same problem that makes
agentic and AI-assisted systems hard to trust in production, and the architecture answers above
transfer more directly than they might look.

**A business/transport boundary is also an intent/execution boundary.** The rule that no HTTP or JSON
type may cross into the business layer exists so that *what a scenario means* stays stable while *how
it's carried out* changes underneath it. That is the same seam an agentic system needs between "what
the user asked for" and "which model, prompt version, or tool call answered it" - without it, every
upstream change (a new supplier dialect here; a new model version, prompt, or tool schema there)
forces a rewrite of the thing meant to verify correctness, not just the thing being verified.

**Injecting the combination at runtime is the same move as parameterising the environment an agent
runs in.** 15 combinations produced 88 reusable scenarios instead of 1,320 hardcoded ones because the
*coordinate* - which integration, which brand - was kept out of the test and supplied at run time. The
equivalent question for an AI system is whether your evals are written against a fixed model/prompt/
tool combination (and silently stale the moment any of those changes) or against the same business
intent regardless of which combination answered it.

**The false-green guard rails are a preview of AI drift.** A status check that ignored an HTTP error
and passed for a whole CI run, a race condition that silently mis-attributed results, a cached session
answering for the wrong account - each is a system that *looked* correct while being wrong for a
structural reason. That is functionally what AI drift is: an agent that continues to produce
plausible-looking output after a model, prompt, tool, or data change has quietly altered *why* it's
producing that output. The fix in both cases is the same discipline - convert every such incident into
an explicit, automated rule, not a one-off patch.

**"Should we adopt the shared framework?" is the same question as "should we adopt the shared agent
platform?"** The answer here was a considered no, for one stated structural reason, with the
conditions for revisiting it written down. That's the right shape of answer for engineering leaders
now facing the same question about AI agent frameworks and platforms - the decision should be
articulable and reversible, not a default.

The broader claim: engineering assurance for systems that keep changing underneath you - whether the
change is a sixth supplier integration or a new model version - is an architecture problem before it's
a tooling problem. Solve the boundary and the domain model first; the framework choice matters less
than getting those two right.

---

### Appendix — how the numbers were derived

Structural figures were counted directly from the codebase and are reproducible:

| Figure | Method |
|---|---|
| Scenarios (88), feature files (29) | Count `Scenario:` declarations and `.feature` files in the source tree, excluding build output |
| Real combinations (15) | Walk `topology.json`, summing integrations per (region, market, brand) |
| Integrations (6) | `integrations.json`, which also carries each one's ownership flag |
| Leaf jobs (30) | Count leaf job names across the six generated GitLab CI child files |
| Production code (89 files / 16,919 lines) | `wc -l` over the framework's source packages |
| Unit tests (448 `@Test` methods; 515 cases with parameterisation) | Annotation count over the unit-test package; case count from the JUnit runner |
| Pooled accounts (75) | 15 pools × 5 valid entries in the environment's user file |
| Integration-onboarding cost | `git show --stat` on the single commit that added the sixth integration |
| Timings | JUnit XML for the unit suite; Cucumber JUnit XML for the API suite |

Legacy figures (~8 and ~15 files per integration; the seven-step versus two-step flow for adding a
negative test) are quoted from internal analysis written at the time. Those codebases have since
been removed, so they could not be independently re-verified. The days-to-an-hour onboarding figures
are practitioner-reported, as noted in §6.1.

---

*Built on [teswiz](https://github.com/anandbagmar/teswiz) — an open-source test automation framework
unifying API, web and mobile testing over Cucumber, RestAssured, Selenium, Playwright and Appium.*
