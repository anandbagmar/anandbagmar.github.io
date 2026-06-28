---
layout: page
title: "Any browsermob-proxy users facing issues with some requests not getting fired?"
date: 2016-07-06 05:01:00 +0000
categories:
  - blog
tags:
  - "proxy"
  - "java"
  - "automation"
  - "browsermob-proxy"
  - "protractor"
  - "selenium"
  - "linux"
  - "opensource"
  - "javascript"
  - "mac"
  - "ruby"
redirect_from:
  - "/blog/any-browsermob-proxy-users-facing/"
author: Anand Bagmar
show_meta: true
---

Is there anyone using browsermob-proxy who is having issues with some requests not getting fired?  
  


I have integrated browsermob-proxy with my protractor tests. This works wonderfully when I run my tests from Mac (against local environment, or any other test environment).

  


However, when I run my tests from CI (agent is SUSE Enterprise 11.4) - my tests fail. 

  


I narrowed down the problem to the following scenario:

**  
**

**On some specific user action in the UI, there are a lot ( >100) of requests fired from the browser in parallel (batches). There are a couple of scenarios like this in my application - and the test fails in all these cases.**

  


Here is a screenshot of what the captured HAR file shows -

  


[![](/assets/img/blog/screen-shot-2016-07-06-at-9.01.04-am.png)](</assets/img/blog/screen-shot-2016-07-06-at-9.01.04-am.png>)

  


  


The same test works when I run this locally from Mac

  


Any idea how to fix this? Thank you in advance!

  


See [this issue](<https://github.com/lightbody/browsermob-proxy/issues/492>) for more details - (<https://github.com/lightbody/browsermob-proxy/issues/492>)
