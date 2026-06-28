---
layout: page
title: "To test or not to test ... do you ask yourself this question?"
date: 2011-08-18 05:05:00 +0000
categories:
  - blog
tags:
  - "automation"
author: Anand Bagmar
show_meta: true
---

For people involved in Test Automation, I have seen that quite a few of us get carried away and start automating anything and everything possible. This inherently happens at the expense of ignoring / de-prioritizing other equally important activities like Manual (exploraratory / ad-hoc) testing.

  


Also, as a result, the test automation suite gets very large and unmaintainable, and in all possibilities, not very usable, with a long feedback cycle.

  
I have found a few strategies work well for me when I approach Test Automation:

  * Take a step back and look at the big picture.
  * Ask yourself the question - "**Should I automate this test or not?** **What value will the product get by automating this?** "
  * Evaluate what test automation will truly provide good and valuable feedback.
  * Based on the evaluation, build and evolve your test automation suite.



One technique that is simple and quick to evaluate what tests should be automated or not, is to do a **Cost Vs Value** analysis of your identified tests using the graph shown below.

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnjNJ2OaDmQZj-9IHG3Ar0lw0HFFNUHgOJ_jf2u7R3ZiYwJWVWeLQJemaEZ2-vmKmUF2CItu4M3qeCeFZd68S6mIiSg8lUFsHMXMWAFDuWay1-JfuIhtUaYYVQ_c9fIpJ-sKSrOqM6nGyK/s400/Cost+Vs+Value.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnjNJ2OaDmQZj-9IHG3Ar0lw0HFFNUHgOJ_jf2u7R3ZiYwJWVWeLQJemaEZ2-vmKmUF2CItu4M3qeCeFZd68S6mIiSg8lUFsHMXMWAFDuWay1-JfuIhtUaYYVQ_c9fIpJ-sKSrOqM6nGyK/s1600/Cost+Vs+Value.png>)

  


This is very straight forward to use.

  


To start off, analyze your tests and categorize them in the different quadrants of the above graph.

  1. First automate tests that provide **high value, and low cost** to build / maintain = **#1** in the graph. This is similar to the [80/20 rule](<http://en.wikipedia.org/wiki/Pareto_principle>).
  2. Then automate tests that provide **high value, but have a high cost** to build / maintain = **#2** in the graph.
  3. Beyond this, IF there is more time available, then **CONSIDER automating tests that have low value, and low cost**. I would rather better utilize my time at this juncture to do manual exploratory testing of the system.
  4. **DO****NOT automate tests that have low value and high cost** to build / maintain.
