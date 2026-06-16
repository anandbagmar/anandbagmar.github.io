---
layout: page-fullwidth
title: "Blogs & Articles"
subheadline: "Thought leadership through writing and open knowledge-sharing"
teaser: "Articles and blogs exploring quality engineering, test automation, and AI-driven testing."
permalink: "/content/"
header:
    title: Blogs & Articles
    image_fullwidth: "header-bg.jpeg"
---

<div class="eot-content-section">

  <div class="eot-content-block">
    <span class="eot-eyebrow-sm">WRITING</span>
    <h2 class="eot-content-h2">Published Articles &amp; Blogs</h2>
    <div class="eot-content-grid">

      <a href="https://essenceoftesting.blogspot.com/" target="_blank" class="eot-content-card">
        <div class="eot-content-card-icon">✍️</div>
        <div>
          <h3>Essence of Testing Blog</h3>
          <p>Personal blog covering quality strategy, test automation, AI testing, and engineering practices - written for practitioners and leaders alike.</p>
          <span class="eot-content-link">Read articles →</span>
        </div>
      </a>

      <a href="https://applitools.com/blog/author/anandbagmar/" target="_blank" class="eot-content-card">
        <div class="eot-content-card-icon">👁️</div>
        <div>
          <h3>Applitools Blog</h3>
          <p>Guest author articles on visual AI testing, cross-browser automation, and building reliable test infrastructure at scale.</p>
          <span class="eot-content-link">Read articles →</span>
        </div>
      </a>

    </div>
  </div>

  <div class="eot-content-block">
    <span class="eot-eyebrow-sm">PRESENTATIONS</span>
    <h2 class="eot-content-h2">Slides</h2>
    <div class="eot-content-grid">

      <a href="https://www.slideshare.net/abagmar/" target="_blank" class="eot-content-card">
        <div class="eot-content-card-icon">📊</div>
        <div>
          <h3>SlideShare Presentations</h3>
          <p>Slides from conference talks and workshops on automation strategy, AI-driven testing, quality frameworks, and more.</p>
          <span class="eot-content-link">View slides →</span>
        </div>
      </a>

    </div>
  </div>

</div>

<style>
.eot-content-section { max-width: 900px; margin: 0 auto; }

.eot-content-block { margin-bottom: 3rem; }

.eot-content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (max-width: 640px) { .eot-content-grid { grid-template-columns: 1fr; } }

.eot-content-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: #f0f5fa;
  border: 1px solid #dde4ed;
  border-left: 4px solid #2b7fb0;
  border-radius: 6px;
  padding: 1.25rem;
  text-decoration: none !important;
  transition: box-shadow 0.2s, transform 0.15s;
}
.eot-content-card:hover {
  box-shadow: 0 4px 16px rgba(28,58,92,0.1);
  transform: translateY(-2px);
  border-left-color: #c8821a;
}

.eot-content-card-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.eot-content-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1c3a5c;
  margin: 0 0 0.4rem;
}

.eot-content-card p {
  font-size: 0.85rem;
  color: #4a5e72;
  margin: 0 0 0.6rem;
  line-height: 1.55;
}

.eot-content-link {
  font-size: 0.82rem;
  font-weight: 700;
  color: #c8821a;
}
html.dark-mode .eot-content-card { background: #1e3550 !important; border-color: #243d58 !important; border-left-color: #5ab0dc !important; }
html.dark-mode .eot-content-card:hover { border-left-color: #c8821a !important; }
html.dark-mode .eot-content-card h3 { color: #b5d0e8 !important; }
html.dark-mode .eot-content-card p { color: #7aabcc !important; }
html.dark-mode .eot-content-link { color: #c8821a !important; }
</style>
