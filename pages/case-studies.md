---
layout: page-fullwidth
title: "Case Studies"
subheadline: "Real engagements. Measurable outcomes."
teaser: "From large-scale quality transformations to intensive team upskilling - here is how I have helped organisations build durable quality capability."
permalink: "/case-studies/"
header:
    title: Case Studies
    image_fullwidth: "header-bg.jpeg"
---

<div style="margin-bottom:2rem;">
  <p>Each engagement below is a real example of quality strategy, transformation, or training in practice - with context, approach, and outcomes.</p>
</div>

<div style="display:flex; flex-wrap:wrap; gap:1.5rem; margin-top:1rem;">

{% for post in site.categories.case-studies %}
<div style="flex:1 1 300px; border:1px solid #dde4ed; border-radius:8px; padding:1.5rem; border-top:4px solid #c8821a; background:#fff; box-shadow:0 2px 8px rgba(28,58,92,0.07); transition:box-shadow 0.2s;">
  <h3 style="margin-top:0; font-size:1.15rem;">
    <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" style="color:#1c3a5c; text-decoration:none; border:none;">{{ post.title }}</a>
  </h3>
  <p style="color:#4a5e72; font-size:0.95rem; margin-bottom:1.2rem;">{{ post.teaser }}</p>
  <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" style="display:inline-block; background:#1c3a5c; color:#fff; padding:0.45rem 1rem; border-radius:4px; font-size:0.875rem; font-weight:600; text-decoration:none; border:none;">Read case study →</a>
</div>
{% endfor %}

</div>

<div class="eot-cs-cta">
  <strong>Working on a quality challenge?</strong> These case studies represent a fraction of the engagements I have run across telecom, gaming, e-commerce, SaaS, and enterprise platforms.
  <br><br>
  <a href="/contact/" class="eot-btn eot-btn--primary">Get in touch →</a>
</div>
