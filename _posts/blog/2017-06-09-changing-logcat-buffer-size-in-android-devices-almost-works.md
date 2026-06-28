---
layout: page
title: "Changing logcat buffer size in Android devices ... almost works"
date: 2017-06-09 12:10:00 +0000
categories:
  - blog
tags:
  - "viu"
  - "appium"
  - "cucumber-jvm"
  - "vuclip"
  - "android"
  - "webdriver"
  - "madlab"
redirect_from:
  - "/blog/changing-logcat-buffer-size-in-android/"
author: Anand Bagmar
show_meta: true
---

My (debug-build of) app under test logs extra information about test execution to system logs which is accessible via logcat on Android devices. This is very powerful as now I can run my cucumber-jvm / Appium tests, copy the logcat file after the test execution completes, parse it for relevant information, and do appropriate assertions on the same.

  


The default buffer size on Android devices I have seen is 256kb. This is less for me - as I end up losing the earlier information, and hence my assertions fail.

  


Thankfully, there is a programmatic way to change the logcat buffer size in the device before running tests. The command is

**_  
_**

**_adb logcat -G 3M_**

  


This adb command works in the Motorola devices in my [MAD LAB](<https://essenceoftesting.blogspot.com/2017/04/introducing-mad-lab-for-mobile.html>), but does not work in Samsung devices. The error I see on running the above command is "**_failed to set the log size_** "

  


Any idea why this would not work in Samsung devices? or rather, what do I need to do to change the logcat buffer size?

  


**[UPDATE]** \- Interestingly - this works on Samsung Galaxy S7, but NOT in Samsung J5 Prime OR Samsung J7 Prime
