---
name: Content Creation Guide
description: Step-by-step interactive workflow for creating blog posts and case studies with correct structure and front matter.
---

# Content Creation Protocol

This guide defines the interactive protocol that **any** AI programming assistant (Antigravity, Claude, Codex, Cursor, etc.) must follow when the user asks to add, create, or draft a new blog post or case study.

You must follow these steps in sequence, waiting for user input at each confirmation point.

---

## Step 1: Selection & Draft Content Input
Do not auto-generate the actual body content from scratch unless explicitly asked.
1. Ask the user:
   * "Are we creating a **Blog Post** or a **Case Study**?"
   * "Please provide the draft text, bullet points, or the file path to your content draft."
2. Wait for the user's response containing the core content.

---

## Step 2: Title Suggestions
1. Read and analyze the provided content draft.
2. Propose **3 to 5** engaging, SEO-optimized title options.
3. Ask the user to select one of the suggested titles or provide their own custom title.

---

## Step 3: Gather Metadata
Ask the user for the metadata based on the content type:

* **For Blog Posts:**
  * Ask for a comma-separated list of tags (e.g. `selenium, appium, testing`).
* **For Case Studies:**
  * Ask for the following fields (providing realistic suggestions based on the content):
    * **Domain:** (e.g. `Gaming`, `Fintech`, `Telecom`)
    * **Type:** (e.g. `Classroom Training`, `Consulting`, `QA Audit`)
    * **Duration:** (e.g. `5 Weeks`, `3 Months`)
    * **Scale:** (e.g. `50 SDETs`, `10 Teams`)
  * Ask for a short **teaser** sentence (e.g. *"A 5-week intensive training program..."*).

---

## Step 4: Image Options
Ask the user how they would like to handle the header image:
1. **Provide my own image:** Prompt them for the image filename/path (to be saved in `/images/` or `/assets/`).
2. **AI-generated image:**
   * If the agent has the `generate_image` tool (like Antigravity), generate the image using a descriptive prompt based on the content topic, save it to `images/` or `assets/`, and note it in the front matter.
   * If the agent does not have an image generation tool, output a recommended text prompt that the user can run in an external generator.
3. **Skip image:** Do not set a header image.

---

## Step 5: Video Options
1. Ask the user: *"Would you like to include any videos in this page?"*
2. If yes:
   * Ask for the video URL (e.g., YouTube/Vimeo link) or iframe embed code.
   * Ask where inside the content structure the video should be placed (e.g. under "Approach", at the top, or at the bottom).

---

## Step 6: File Scaffolding & Front Matter
Create the markdown file with the filename format: `YYYY-MM-DD-slugified-title.md` under the correct directory:
* **Blog Posts:** `_posts/blog/`
* **Case Studies:** `_posts/case-studies/`

Populate it with the following templates:

### Blog Post Template
```markdown
---
layout: page
title: "[SELECTED TITLE]"
date: YYYY-MM-DD HH:MM:SS +0000
categories:
  - blog
tags:
  - [TAG_1]
  - [TAG_2]
author: Anand Bagmar
show_meta: true
---

[BODY CONTENT]
```

### Case Study Template
```markdown
---
layout: page-fullwidth
title: "[SELECTED TITLE]"
teaser: "[TEASER TEXT]"
breadcrumb: true
show_meta: false
header:
    title: Case Study
    image_fullwidth: "[IMAGE_PATH or header-bg.jpeg]"
categories:
    - case-studies
---

<div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-bottom:2rem;">
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DOMAIN: [DOMAIN]</span>
  <span style="background:#2b7fb0;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">TYPE: [TYPE]</span>
  <span style="background:#c8821a;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DURATION: [DURATION]</span>
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">SCALE: [SCALE]</span>
</div>

[BODY CONTENT]

---

## Outcomes

| Metric/Area | Achievement |
|---|---|
| [Metric 1] | [Result 1] |
| [Metric 2] | [Result 2] |

---

<a href="/contact/" style="display:inline-block;background:#1c3a5c;color:#fff;padding:0.6rem 1.3rem;border-radius:4px;text-decoration:none;font-weight:600;">Discuss a training programme →</a>
&nbsp;
<a href="/case-studies/" style="display:inline-block;background:#2b7fb0;color:#fff;padding:0.6rem 1.3rem;border-radius:4px;text-decoration:none;font-weight:600;">← All Case Studies</a>
```

*(Note: Adjust the visual elements or outcomes table template based on the specific content provided by the user.)*

---

## Step 7: Present for Review
1. Print the path of the generated file.
2. Present the full Markdown structure (including front matter) to the user for final review and approval.

---

## Step 8: Post-Creation Tasks
Once approved:
1. Update `CHANGELOG.md` in the same changes, following project conventions (newest entries first, date format `## DDD, DD-MMM-YYYY`, one bullet per change).
2. Run the Playwright test suite using `npm test` to verify the site builds successfully and the listing page tests pass.
