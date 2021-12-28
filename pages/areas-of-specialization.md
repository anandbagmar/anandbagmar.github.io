---
layout: page
title: "Build Quality In!"
meta_title: "Build Quality In!"
subheadline: "Instead of Testing for Quality"
teaser: "<em>Be Proactive, Not Reactive!</em>"
header:
   image_fullwidth: "header_unsplash_9.jpg"
permalink: "/areas-of-specialization/"
---

I have been working for 20+ years in various roles related to testing. Over this time, I have realised that if anyone focuses on testing, then they will never be able to build a good quality product, inside-out. 

One needs to focus on Quality - which encompasses all roles in the SDLC process, from 
> planning 

> implementation

> release to production / customers

> feedback from customers

> incorporating feedback into the requirements

I have built specialization in the following areas of Quality:

<ul>
    {% for post in site.categories.areas-of-specialization %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>