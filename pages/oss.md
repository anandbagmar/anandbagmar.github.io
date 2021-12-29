---
layout: page
show_meta: false
title: "My Open Source Contributions"
permalink: "/oss/"
---
<ul>
    {% for post in site.categories.oss %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

In addition, I have contributed to the following open source projects:
* <a href="https://github.com/znsio/getting-started-with-teswiz" target="_blank">getting-started-with-teswiz</a> - Easy way to start using teswiz
* <a href="https://specmatic.in" target="_blank">Specmatic</a> - Contract Driven Development
* <a href="https://github.com/anandbagmar/taas" target="_blank">TaaS</a> - Integration testing across a variety of products via Test Automation

