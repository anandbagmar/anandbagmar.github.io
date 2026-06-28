---
layout: page
title: "WAAT - Web Analytics Automation Testing Framework"
date: 2011-04-07 20:03:00 +0000
categories:
  - blog
tags:
  - "waat"
redirect_from:
  - "/blog/waat-web-analytics-automation-testing/"
author: Anand Bagmar
show_meta: true
---

**[UPDATE]   See my post about how you can get WAAT ****[here](<http://essenceoftesting.blogspot.com/2011/04/waat-is-alive.html>) ********(http://essenceoftesting.blogspot.com/2011/04/waat-is-alive.html).**  
  
**Problem statement:**

  


On one of the projects that I worked on, I needed to test if Omniture reporting was done correctly. 

  


The client relied a lot on Omniture reports to understand and determine the direction of their business. They have a bunch of Omniture tags reported for a lot of different actions on the site. Manual testing was the only way this functionality could be done verified. But given the huge number of tags, it was never possible to be sure that all tags were being reported correctly on a regular basis.

  


So I came up with a strategy to remove this pain-point.

  


**Approach:**

I created a framework in our existing automation framework to do Omniture testing. The intention of creating this framework was:

1\. There is minimal impact on existing tests.

2\. There should be no need to duplicate the tests just to do Omniture testing.

3\. Should be easy to use (specify Omniture tags for various different actions, enable testing, etc.)

  


**How it helped us?**

1\. We provided a huge and reliable safety net to the client and the development team by having Omniture testing automated.

2\. Reduced the manual testing effort required for this type of testing, and instead got some bandwidth to focus on other areas.

  


**Next Steps:**

I am making this into a generic framework - a.k.a. _**WAAT - Web Analytics Automation Testing Framework**_ to enable others doing Omniture testing to easily automate this functionality. This project will be hosted on github. 

  


Phase 1 of this implementation will be for Omniture Debugger and input data provided in xml format. This framework will be available as a jar file.

  
Phase 2 also now complete includes support for any Web Analytic tool. I have tested this with Google Analytics as well as Omniture (NOT using Omniture Debugger). This uses a generic mechanism to capture packets from the network layer and processes them appropriately. Given this generic approach to work with any Web Analytic tool, the framework does become OS dependent.  
  


Watch this space for more information (instructions, links to github, etc). Also, please do contact me with ideas / suggestions / comments about the same.
