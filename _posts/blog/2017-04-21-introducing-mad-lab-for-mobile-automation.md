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
author: Anand Bagmar
show_meta: true
---

The past few months I have been heads-down in stabilising my Real-Device Mobile Test Lab - which we now call **_MAD LAB (Mobile Automation Devices LAB) ._**

  


For those who may not recollect, see my past posts for reference -

  * [A new beginning - entertainment on mobile](<https://essenceoftesting.blogspot.in/2016/12/a-new-beginning-entertainment-on-mobile.html>)


  * [How to enable seamless running of appium tests on developer machines?](<https://essenceoftesting.blogspot.in/2016/12/how-to-enable-seamless-running-of.html>)


  * [Features of my Android Test Automation Framework](<https://essenceoftesting.blogspot.in/2017/02/features-of-my-android-test-automation.html>)


  * [How to upgrade the appium-uiautomator2-driver version for appium 1.6.3?](<https://essenceoftesting.blogspot.in/2017/02/how-to-upgrade-appium-uiautomator2.html>)


  * [Finding my way out of bottomless pit with Appium & Android 7.0 for parallel test runs](<https://essenceoftesting.blogspot.in/2017/02/finding-my-way-out-of-bottomless-pit.html>)


  * [Sharing implementation of cucumber-jvm - Appium test framework](<https://essenceoftesting.blogspot.in/2017/02/sharing-implementation-of-cucumber-jvm.html>)

  


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

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD7X-i9f9il9R_6u3ZnzFp-fG3TrEsM0pav51hln1SyOntFoDD7aC9m1YM5KQCtXwmX33P5FbiSRYHwyVX1gAzN96adrvPvhmbLDxvTQmeIGOURfZa4pY0EuoNHJIUdjD8Q37MIZ6WYFTj/s320/IMG_20170421_093503.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD7X-i9f9il9R_6u3ZnzFp-fG3TrEsM0pav51hln1SyOntFoDD7aC9m1YM5KQCtXwmX33P5FbiSRYHwyVX1gAzN96adrvPvhmbLDxvTQmeIGOURfZa4pY0EuoNHJIUdjD8Q37MIZ6WYFTj/s1600/IMG_20170421_093503.jpg>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2wF0HCWyhRBuGIOAADjVH0_Qbjk7EzYN6MrWPzgkE8_SHKyXSEumwqg5q6raG4bIG0TuVabpe6igFIY9jHrJ6T2C3aRCsCxrJFifgRTstJCyzYi4Qj5IAxOfw2rV8Z1DcWor1GFhlUZh/s320/IMG_20170421_093501.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2wF0HCWyhRBuGIOAADjVH0_Qbjk7EzYN6MrWPzgkE8_SHKyXSEumwqg5q6raG4bIG0TuVabpe6igFIY9jHrJ6T2C3aRCsCxrJFifgRTstJCyzYi4Qj5IAxOfw2rV8Z1DcWor1GFhlUZh/s1600/IMG_20170421_093501.jpg>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGCel-PcEcCJPVChZN11qU5ONAmAI7-A29oXspAPY3_aiaFzcYiLHLTZfg9X8wnDpcdAilEXtr_e-mgpHS3h0wWHHoIEQWj_jk3DyVIvz-qOT2SWNRLwxCYn0FKmlN7ZhsVtxwAL0PEda1/s320/IMG_20170421_094019.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGCel-PcEcCJPVChZN11qU5ONAmAI7-A29oXspAPY3_aiaFzcYiLHLTZfg9X8wnDpcdAilEXtr_e-mgpHS3h0wWHHoIEQWj_jk3DyVIvz-qOT2SWNRLwxCYn0FKmlN7ZhsVtxwAL0PEda1/s1600/IMG_20170421_094019.jpg>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha3j_-UWa52F-Zhce07l3wIql4YkXBJfevlQyu9yjXAj0DHoJFBanFgAfKH7vRBAZ1Vncw1_466KtpErU15HnVn8DG0cs8FIc3INOd6eUT4VrWbvz6Yx9SNlk8WQxBk3kwxTZBREssQU7e/s320/IMG_20170421_094012.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha3j_-UWa52F-Zhce07l3wIql4YkXBJfevlQyu9yjXAj0DHoJFBanFgAfKH7vRBAZ1Vncw1_466KtpErU15HnVn8DG0cs8FIc3INOd6eUT4VrWbvz6Yx9SNlk8WQxBk3kwxTZBREssQU7e/s1600/IMG_20170421_094012.jpg>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdZ2FiGtW4EFTPn7uio47aV8h0b5Kb1ZXJ8ENNVHJw5LF5tqjD8bp4qJzhEAbR5BcVkP1URWy9Q5HVzl4rUaybay3KSijUv3rb9gd6t-KCI4iykwcr0L-7FR9qWQ79XDt2rcYapuKPtK0F/s320/IMG_20170421_093841.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdZ2FiGtW4EFTPn7uio47aV8h0b5Kb1ZXJ8ENNVHJw5LF5tqjD8bp4qJzhEAbR5BcVkP1URWy9Q5HVzl4rUaybay3KSijUv3rb9gd6t-KCI4iykwcr0L-7FR9qWQ79XDt2rcYapuKPtK0F/s1600/IMG_20170421_093841.jpg>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOSZXnZ3DMM8S_phdsraz2EbF0se5VFx8nnTa6Brb6_tYa38EQ8kh7Xam3MX8gGoFqeLwy_CXjp86Y9cz0h-AsbBhGET1-_E81Nq7A1yWdWnzhm8IkflSCM5xTpiMHAMSIyHA_iLbbtyZ-/s320/IMG_20170421_093908.jpg)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOSZXnZ3DMM8S_phdsraz2EbF0se5VFx8nnTa6Brb6_tYa38EQ8kh7Xam3MX8gGoFqeLwy_CXjp86Y9cz0h-AsbBhGET1-_E81Nq7A1yWdWnzhm8IkflSCM5xTpiMHAMSIyHA_iLbbtyZ-/s1600/IMG_20170421_093908.jpg>)

  


  


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
