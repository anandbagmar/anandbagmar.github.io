---
layout: page
title: "Why not to use PageFactory and FindsBy in Selenium WebDriver"
date: 2022-02-21 17:30:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "selenium"
  - "design_pattern"
  - "web"
  - "patterns"
  - "opensource"
  - "webdriver"
  - "page-object-pattern"
  - "test_automation"
  - "automation_framework"
  - "practices"
author: Anand Bagmar
show_meta: true
---

Many users of Selenium WebDriver may be using the PageFactory created by Simon Stewart. However, it is not a good idea to use it.

You may be thinking why should I not use it? It is so easy to use it, and its popular.

Well, here are 2 reasons why you should not use the PageFactory:

**Reason #1**. [Simon Stewart](<https://twitter.com/shs96c>) (<https://twitter.com/shs96c>), the creator of [WebDriver](<https://www.selenium.dev/>), and the PageFactory himself says, do not use it. It is not recommended.

> The `FindsBy` annotation isn't recommended, because the PageFactory class is really badly implemented and inflexible, but it's not going away in the java bindings.
> 
> The `FindsByX` interfaces are going away. Better to use a `By` locator and use that.

  


[![PageFactory is really badly implemented](https://blogger.googleusercontent.com/img/a/AVvXsEjlSNpNODwWEJ8FacbMhllStsvRlUgPeeG2UlQFG0b21lE66Ye-AUGvCt6AopBk3OFgXOmNgW8KjGmSBMQaJ-RAilGM-TivlbqbDDpYklRiJXjLqpaBZGf37sOykyfFNYXkOeg9fxwCyBk5Nlks070nPBHZf4glQucoe5SbH4N-CQGSE7C2fkyDDsvQlQ=w400-h286)](<https://blogger.googleusercontent.com/img/a/AVvXsEjlSNpNODwWEJ8FacbMhllStsvRlUgPeeG2UlQFG0b21lE66Ye-AUGvCt6AopBk3OFgXOmNgW8KjGmSBMQaJ-RAilGM-TivlbqbDDpYklRiJXjLqpaBZGf37sOykyfFNYXkOeg9fxwCyBk5Nlks070nPBHZf4glQucoe5SbH4N-CQGSE7C2fkyDDsvQlQ=s1204>)

 

<https://twitter.com/shs96c/status/1196865907185868801>

  


**Reason #2:** While Reason #1 should have been sufficient, many people implementing automation using Selenium WebDriver do not know, or did not pay heed to what Simon said. So another WebDriver & WATIR contributor, Titus Fortner (<https://twitter.com/titusfortner>) explained in detail why using PageFactory is not a good idea in his blog post - <https://titusfortner.com/2021/02/03/page-factory-optimization.html>. 

 

I sincerely hope these reasons are sufficient for you to move away from the PageFactory and use something more efficient.
