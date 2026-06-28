---
layout: page
title: "Recording video of test execution via Protractor"
date: 2016-10-06 10:50:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "protractor"
  - "testing"
  - "resources"
  - "video"
  - "test_automation"
  - "automation_framework"
  - "javascript"
author: Anand Bagmar
show_meta: true
---

Recently I came across a use case of recording the video of the test execution in my CI environment - where tests run in headless mode). 

  


My thought was - record video of the test execution in CI - save it if test failed, else discard it.

  


Below are some resources I came across for potentially implementing this - 

  * [https://www.npmjs.com/package/protractor-video-reporter/tutorial](<https://www.npmjs.com/package/protractor-video-reporter/tutorial>)
  * [https://github.com/tepez/protractor-video-reporter/issues/5](<https://github.com/tepez/protractor-video-reporter/issues/5>)
  * [https://github.com/tepez/protractor-video-reporter](<https://github.com/tepez/protractor-video-reporter>)

  
  


  


Unfortunately for me - due to some other infrastructure constraints - this got de-prioritized. But hopefully I will be getting back to this soon.
