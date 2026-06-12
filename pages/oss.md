---
layout: page-fullwidth
title: "Open-Source Tools"
subheadline: "Building tools the global QA community relies on"
teaser: "Creator of three open-source tools used by quality engineers worldwide - plus active contributor to Selenium and Appium."
permalink: "/oss/"
header:
    title: Open Source Contributions
    image_fullwidth: "header-bg.jpeg"
---

<div class="eot-oss-grid">

  <div class="eot-oss-card eot-oss-card--teswiz">
    <div class="eot-oss-header">
      <div class="eot-oss-badge" style="background:#1c3a5c;">T</div>
      <div>
        <h3>Teswiz</h3>
        <span class="eot-oss-subtitle">End-to-End Automation Framework</span>
      </div>
    </div>
    <p>Open-source, scalable test automation framework for web, mobile (Android &amp; iOS), API, and desktop. Built for real-world CI/CD integration and used globally.</p>
    <ul class="eot-oss-features">
      <li>✓ Web &amp; Mobile (Android / iOS)</li>
      <li>✓ API &amp; Desktop Testing</li>
      <li>✓ CI/CD Native Integration</li>
      <li>✓ Globally Adopted</li>
    </ul>
    <div class="eot-oss-links">
      <a href="https://github.com/znsio/teswiz" target="_blank" class="eot-btn eot-btn--secondary eot-btn--sm">GitHub →</a>
      <a href="https://github.com/znsio/getting-started-with-teswiz" target="_blank" class="eot-btn eot-btn--outline-dark eot-btn--sm">Getting Started →</a>
    </div>
  </div>

  <div class="eot-oss-card eot-oss-card--waat">
    <div class="eot-oss-header">
      <div class="eot-oss-badge" style="background:#c8821a;">W</div>
      <div>
        <h3>WAAT</h3>
        <span class="eot-oss-subtitle">Web Analytics Automation Testing</span>
      </div>
    </div>
    <p>Dedicated framework for automated testing of web analytics implementations - ensuring accurate data collection and event tracking at scale.</p>
    <ul class="eot-oss-features">
      <li>✓ Analytics Validation</li>
      <li>✓ Event Tracking Automation</li>
      <li>✓ Automated Assertions</li>
      <li>✓ Scalable Architecture</li>
    </ul>
    <div class="eot-oss-links">
      <a href="https://github.com/anandbagmar/waat" target="_blank" class="eot-btn eot-btn--secondary eot-btn--sm">GitHub →</a>
    </div>
  </div>

  <div class="eot-oss-card eot-oss-card--tta">
    <div class="eot-oss-header">
      <div class="eot-oss-badge" style="background:#2b7fb0;">TTA</div>
      <div>
        <h3>TTA</h3>
        <span class="eot-oss-subtitle">Test Trend Analyzer</span>
      </div>
    </div>
    <p>Intelligent analysis of test execution trends - surfacing patterns in stability, flakiness, and coverage to drive data-informed quality decisions.</p>
    <ul class="eot-oss-features">
      <li>✓ Trend &amp; Pattern Analysis</li>
      <li>✓ Flakiness Detection</li>
      <li>✓ Coverage Insights</li>
      <li>✓ Data-Driven Decisions</li>
    </ul>
    <div class="eot-oss-links">
      <a href="https://github.com/anandbagmar/tta" target="_blank" class="eot-btn eot-btn--secondary eot-btn--sm">GitHub →</a>
    </div>
  </div>

</div>

<div class="eot-oss-contrib">
  <h2>Other Contributions</h2>
  <div class="eot-oss-contrib-grid">
    <div class="eot-oss-contrib-item">
      <strong><a href="https://www.selenium.dev" target="_blank">Selenium</a></strong>
      <p>Active contributor to the Selenium browser automation project - the foundation of web testing globally.</p>
    </div>
    <div class="eot-oss-contrib-item">
      <strong><a href="https://appium.io" target="_blank">Appium</a></strong>
      <p>Contributor to Appium - the open-source standard for mobile test automation on iOS and Android.</p>
    </div>
    <div class="eot-oss-contrib-item">
      <strong><a href="https://specmatic.in" target="_blank">Specmatic</a></strong>
      <p>Contract Driven Development - enabling API contract testing across distributed teams.</p>
    </div>
  </div>
  <p style="margin-top:1.5rem;">
    <a href="https://github.com/anandbagmar" target="_blank" class="eot-btn eot-btn--outline-dark">View all contributions on GitHub →</a>
  </p>
</div>

<style>
.eot-oss-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
@media (max-width: 860px) { .eot-oss-grid { grid-template-columns: 1fr; } }

.eot-oss-card {
  background: #f0f5fa;
  border: 1px solid #dde4ed;
  border-radius: 8px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.15s;
}
.eot-oss-card:hover { box-shadow: 0 6px 20px rgba(28,58,92,0.1); transform: translateY(-2px); }

.eot-oss-header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}
.eot-oss-badge {
  width: 44px; height: 44px;
  border-radius: 10px;
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.eot-oss-header h3 { margin: 0; font-size: 1.2rem; color: #1c3a5c; }
.eot-oss-subtitle { font-size: 0.78rem; color: #c8821a; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

.eot-oss-card p { font-size: 0.875rem; color: #4a5e72; line-height: 1.65; margin-bottom: 1rem; }

.eot-oss-features {
  list-style: none;
  margin: 0 0 1.2rem;
  padding: 0;
}
.eot-oss-features li { font-size: 0.82rem; color: #4a5e72; padding: 0.2rem 0; }

.eot-oss-links { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: auto; }

.eot-oss-contrib { border-top: 2px solid #dde4ed; padding-top: 2rem; }
.eot-oss-contrib h2 { font-size: 1.3rem; color: #1c3a5c; margin-bottom: 1.25rem; }

.eot-oss-contrib-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
@media (max-width: 700px) { .eot-oss-contrib-grid { grid-template-columns: 1fr; } }

.eot-oss-contrib-item {
  background: #f7f9fc;
  border: 1px solid #dde4ed;
  border-radius: 6px;
  padding: 1.1rem 1.2rem;
}
.eot-oss-contrib-item strong a { color: #1c3a5c !important; font-size: 1rem; border: none !important; }
.eot-oss-contrib-item p { font-size: 0.82rem; color: #4a5e72; margin: 0.3rem 0 0; line-height: 1.55; }

@media (prefers-color-scheme: dark) {
  .eot-oss-card {
    background: #1e3550 !important;
    border-color: #243d58 !important;
  }
  .eot-oss-header h3 { color: #b5d0e8 !important; }
  .eot-oss-subtitle { color: #c8821a !important; }
  .eot-oss-card p, .eot-oss-features li { color: #7aabcc !important; }
  .eot-oss-contrib { border-top-color: #243d58 !important; }
  .eot-oss-contrib h2 { color: #b5d0e8 !important; }
  .eot-oss-contrib-item {
    background: #182c40 !important;
    border-color: #243d58 !important;
  }
  .eot-oss-contrib-item strong a { color: #5ab0dc !important; border: none !important; }
  .eot-oss-contrib-item p { color: #7aabcc !important; }
}
</style>
