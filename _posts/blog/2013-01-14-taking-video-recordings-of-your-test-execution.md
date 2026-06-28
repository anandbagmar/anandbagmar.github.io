---
layout: page
title: "Taking video recordings of your test execution"
date: 2013-01-14 06:30:00 +0000
categories:
  - blog
tags:
  - "thoughtworks"
  - "automation"
  - "mac"
  - "testing"
  - "ruby"
author: Anand Bagmar
show_meta: true
---

I have always wanted to take video recordings of my test execution ... discard the video if the test passes, and save it if the test fails. 

  


Recently, I found that the [**headless**](<https://github.com/leonid-shevtsov/headless>) gem does that for you. There is also some sample code to make the integration of this gem in your test framework very seamless.

  


While using the gem and its api's are very straightforward, this did not work very well for me.

  


Reasons:

  1. I run my tests from various different types of machines / os, namely, mac, RHEL and Windows
  2. The total number of machines I can run my tests from is huge (>20)  … mainly triggered via CI
  3. The RHEL environment is controlled and configured by puppet.
  4. There is a bunch of underlying library requirements for the video capture



  


So though it is easy to use the gem, it is not really easy to setup ALL test execution environments with these dependent libraries for this to work - at least for me.

  


Does anyone know of a better / easier solution?
