---
layout: page-fullwidth
title: "Blog Archive"
subheadline: "All posts by year"
teaser: "Browse the full archive of Essence of Testing articles, grouped by year."
permalink: /blog/archive/
header:
    title: Blog Archive
    image_fullwidth: "header-bg.jpeg"
---

<div class="eot-blog-archive-page">

  <p class="eot-blog-archive-intro">
    Looking for the latest articles instead? Head back to the
    <a href="/blog/">blog home</a>.
  </p>

  {% assign blog_posts = site.posts | where_exp: "post", "post.categories contains 'blog'" %}
  {% assign posts_by_year = blog_posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year_group in posts_by_year %}
  <details class="eot-year-group" {% if forloop.first %}open{% endif %}>
    <summary class="eot-year-heading">{{ year_group.name }} <span class="eot-year-count">({{ year_group.items | size }})</span></summary>
    <ul class="eot-year-posts">
      {% for post in year_group.items %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}

</div>

<style>
.eot-blog-archive-page { max-width: 860px; margin: 0 auto; }

.eot-blog-archive-intro {
  margin: 0 0 1.5rem;
  color: #4a5e72;
}

.eot-blog-archive-intro a { color: #283890; font-weight: 700; }
.eot-blog-archive-intro a:hover { color: #0b9444; }

.eot-year-group {
  border: 1px solid #dde1f0;
  border-radius: 6px;
  margin-bottom: 0.6rem;
  overflow: hidden;
}
.eot-year-heading {
  font-size: 1rem;
  font-weight: 700;
  color: #283890;
  padding: 0.65rem 1rem;
  cursor: pointer;
  list-style: none;
  background: #eef1fb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.eot-year-heading::-webkit-details-marker { display: none; }
.eot-year-count { font-weight: 400; color: #6b7a99; font-size: 0.85rem; }
.eot-year-posts {
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
}
.eot-year-posts li {
  display: flex;
  gap: 1rem;
  padding: 0.35rem 1rem;
  border-bottom: 1px solid #f0f2fa;
  font-size: 0.9rem;
}
.eot-year-posts li:last-child { border-bottom: none; }
.eot-year-posts time {
  color: #6b7a99;
  font-size: 0.8rem;
  white-space: nowrap;
  padding-top: 2px;
  min-width: 4.5rem;
}
.eot-year-posts a { color: #283890; text-decoration: none; }
.eot-year-posts a:hover { color: #0b9444; }

html.dark-mode .eot-blog-archive-intro { color: #7aabcc !important; }
html.dark-mode .eot-blog-archive-intro a { color: #b5d0e8 !important; }
html.dark-mode .eot-year-group { border-color: #243d58 !important; }
html.dark-mode .eot-year-heading { background: #1e3550 !important; color: #b5d0e8 !important; }
html.dark-mode .eot-year-posts li { border-bottom-color: #243d58 !important; }
html.dark-mode .eot-year-posts time { color: #7aabcc !important; }
html.dark-mode .eot-year-posts a { color: #b5d0e8 !important; }
</style>
