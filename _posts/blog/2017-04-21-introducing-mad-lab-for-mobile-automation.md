---
layout: page
title: "Introducing MAD LAB - for Mobile Automation"
date: 2017-04-21 05:14:00 +0000
categories:
  - blog
tags:
  - "tta"
  - "viu"
  - "appium"
  - "android"
  - "mobile"
  - "waat"
  - "ios"
  - "test_automation"
  - "test_strategy"
  - "analytics"
  - "automation"
  - "performance"
  - "vuclip"
  - "opensource"
  - "madlab"
  - "mobile_testing"
  - "automation_framework"
redirect_from:
  - "/blog/introducing-mad-lab-for-mobile/"
author: Anand Bagmar
show_meta: true
---

The past few months I have been heads-down in stabilising my Real-Device Mobile Test Lab - which we now call **_MAD LAB (Mobile Automation Devices LAB) ._**

  


For those who may not recollect, see my past posts for reference -

  * [A new beginning - entertainment on mobile](</blog/a-new-beginning-entertainment-on-mobile/>)


  * [How to enable seamless running of appium tests on developer machines?](</blog/how-to-enable-seamless-running-of-appium-tests-on-developer-machines/>)


  * [Features of my Android Test Automation Framework](</blog/features-of-my-android-test-automation-framework/>)


  * [How to upgrade the appium-uiautomator2-driver version for appium 1.6.3?](</blog/how-to-upgrade-the-appium-uiautomator2-driver-version-for-appium-163/>)


  * [Finding my way out of bottomless pit with Appium & Android 7.0 for parallel test runs](</blog/finding-my-way-out-of-bottomless-pit-with-appium-android-70-for-parallel-test-ru/>)


  * [Sharing implementation of cucumber-jvm - Appium test framework](</blog/sharing-implementation-of-cucumber-jvm-appium-test-framework/>)

  


Along with my colleagues, we have put in lot of effort in setting up **_MAD LAB_** and have now added a lot of rich features to help running tests, seeing the results and making sense out of them easier. 

  * All infrastructure management is implemented now in **_groovy_** (instead of gradle as shared earlier).


  * All automatic test execution is managed via [**_Jenkins file_**](<https://jenkins.io/doc/book/pipeline/jenkinsfile/>)


  * Actual test implementation is done in **_cucumber-jvm / java_**

  


**List of features currently implemented:**

  * Device management (selection, cleanup, app install and uninstall)


  * Parallel test execution (at Cucumber scenario level) - maximising device utilisation)


  * Appium server management


  * Adb utilities 


  * Managing periodic ADB server disconnects


  * Custom reporting using cucumber-reports


  * Video recording of each scenario and embedding in the custom reports

  


**_Contents of MAD LAB_ :**

  * 1 Mac Minis - running various Jenkins Agents


  * 2 Powered USB hubs


  * 8 Android devices

  


Here are some pictures from the setup.

  


[![](/assets/img/blog/img_20170421_093503.jpg)](</assets/img/blog/img_20170421_093503.jpg>)

  


[![](/assets/img/blog/img_20170421_093501.jpg)](</assets/img/blog/img_20170421_093501.jpg>)

  


[![](/assets/img/blog/img_20170421_094019.jpg)](</assets/img/blog/img_20170421_094019.jpg>)

  


[![](/assets/img/blog/img_20170421_094012.jpg)](</assets/img/blog/img_20170421_094012.jpg>)

  


[![](/assets/img/blog/img_20170421_093841.jpg)](</assets/img/blog/img_20170421_093841.jpg>)

  


[![](/assets/img/blog/img_20170421_093908.jpg)](</assets/img/blog/img_20170421_093908.jpg>)

  


  


There are many more features, in various stages of implementation, being added to make **_MAD LAB_** more powerful.

  


_Sneak peek into whats coming:_

  * Analytics Testing


  * Trend and Failure Analysis 


  * iOS


  * Web


  * A transformed **_MAD LAB_**

  


_Finding_** _MAD LAB_** _interesting? Some very interesting changes are coming in soon. Watch out for my next blog post for that.  _

_  
_

_**Want to contribute and be part of this journey? Even better! Reach out to me!**_
