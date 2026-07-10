# Essence of Testing Website

This is the repository for the personal website and blog of Anand Bagmar, hosted at [essenceoftesting.com](https://essenceoftesting.com). The site is built using **Jekyll** and styled with Foundation CSS.

---

## Local Development

### 1. Prerequisites
Make sure you have the following installed:
- **Ruby** (v3.0+ recommended) and Bundler (`gem install bundler`)
- **Node.js** (v18+ recommended) for search indexing and running Playwright tests

### 2. Install Dependencies
Install Ruby gems and npm packages:
```bash
bundle install
npm install
```

### 3. Running the Dev Server
The project includes a helper script (`server.sh`) to manage the Jekyll server and search index builds:
- **Start the server:** `./server.sh start` (starts the server at `http://localhost:4000`)
- **Stop the server:** `./server.sh stop`
- **Check status:** `./server.sh status`

*Alternatively, you can run the server directly using Jekyll:*
```bash
bundle exec jekyll serve
```
*(Note: A custom Jekyll plugin `_plugins/search_index.rb` automatically regenerates the Lunr search index `_site/search-index.json` on every local build).*

---

## Testing

A Playwright test suite is included to verify page load health, accessibility, dark mode, responsive viewports, sitemap consistency, and search functionality.

Before committing changes or declaring them done, verify that the suite passes:
1. Ensure the local Jekyll server is running (`./server.sh start`).
2. Run the test suite:
   ```bash
   npm test
   ```
3. To view the last Playwright test report, run:
   ```bash
   npm run test:report
   ```

---

## Adding Content (Blog Posts & Case Studies)

This repository is equipped with an **interactive content creation workflow** that works with any modern AI coding assistant (such as Antigravity, Claude Code, Cursor, Codex, or VS Code AI extensions).

### Interactive AI-Assisted Creation (Recommended)
1. Open a chat with your AI assistant and say:
   > *"I want to create a new blog post"* or *"Let's draft a new case study"*
2. The agent will read [.agents/skills/create-content/SKILL.md](file://.agents/skills/create-content/SKILL.md) and guide you through the interactive protocol:
   - **Provide Content:** You paste your raw notes, bullets, or draft content.
   - **Title Selection:** The AI suggests 3-5 SEO-friendly titles; you select one or enter your own.
   - **Metadata:** It prompts for tags (blog posts) or Domain/Type/Duration/Scale metrics (case studies).
   - **Media:** It asks if you want to add your own image path, let the AI generate a header image, or add videos.
   - **Review & Scaffold:** The assistant creates the correctly formatted file under `_posts/blog/` or `_posts/case-studies/`, updates `CHANGELOG.md`, and runs Playwright tests.

---

### Manual Creation
If you prefer to create content manually:

1. Create a markdown file with the name format `YYYY-MM-DD-your-slug.md` inside:
   - Blog Posts: `_posts/blog/`
   - Case Studies: `_posts/case-studies/`

2. Populate the front matter with the correct templates:

#### Blog Post Front Matter Template:
```yaml
---
layout: page
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories:
  - blog
tags:
  - testing
  - automation
author: Anand Bagmar
show_meta: true
---
```

#### Case Study Front Matter Template:
```yaml
---
layout: page-fullwidth
title: "Your Case Study Title"
teaser: "A short one-sentence teaser description."
breadcrumb: true
show_meta: false
header:
    title: Case Study
    image_fullwidth: "header-bg.jpeg"
categories:
    - case-studies
---

<div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-bottom:2rem;">
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DOMAIN: [e.g. Gaming]</span>
  <span style="background:#2b7fb0;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">TYPE: [e.g. Training]</span>
  <span style="background:#c8821a;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">DURATION: [e.g. 5 Weeks]</span>
  <span style="background:#1c3a5c;color:#fff;padding:0.35rem 0.9rem;border-radius:4px;font-size:0.85rem;font-weight:600;">SCALE: [e.g. 50 SDETs]</span>
</div>
```