---
layout: page-fullwidth
title: "Build Quality In!"
subheadline: "Instead of Testing for Quality"
teaser: "<em>Be Proactive, Not Reactive!</em>"
permalink: "/areas-of-specialization/"
header:
    title: Areas of Specialization
    image_fullwidth: "header-bg.jpeg"
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