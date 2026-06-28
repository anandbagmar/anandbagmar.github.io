---
layout: page
title: "Finding my way out of bottomless pit with Appium & Android 7.0 for parallel test runs"
date: 2017-02-16 16:19:00 +0000
categories:
  - blog
tags:
  - "viu"
  - "appium"
  - "android"
  - "mobile"
  - "test_automation"
  - "java"
  - "automation"
  - "vuclip"
  - "parallel"
  - "opensource"
  - "mobile_testing"
  - "automation_framework"
redirect_from:
  - "/blog/finding-my-way-out-of-bottomless-pit/"
author: Anand Bagmar
show_meta: true
---

As mentioned in [my earlier post](<https://essenceoftesting.blogspot.com/2017/02/features-of-my-android-test-automation.html>) \- I designed and implemented a [cucumber-jvm](<https://github.com/cucumber/cucumber-jvm>)-[Appium](<http://appium.io/>)-based test framework to run automated tests against Android Mobile Devices.  
  
We were using:

* cucumber-jvm - v1.2.5
* cucumber-reporting - v3.3.0
* appium - v1.6.3
* appium-java-client - v4.1.2

  


All was good, tests were running via CI, in parallel (based on scenarios) against devices having Android v5.x and v6.x.  
  
Then the challenges started. We got some new Motorola G4 Plus devices for our Test Lab - which has Android 7.0 installed.   
  
First the test refused to run. Figured out that we would probably need to upgrade the appium java-client library version to v5.0.0-BETA1. By the time we figured that out, appium-java-client v5.0.0-BETA2 was out. We also needed to change the instrumentation to UiAutomator2. This was all fine. Our tests started working (after some more changes in how locators were defined and used).  
  
However, the tests refused to run in parallel on the Motorola devices with Android 7. The app used to launch correctly, but tests used to run as expected only on 1 of the devices - causing our test job to fail miserably, and without any clue.  
  
These same tests continued to work correctly with all other devices having Android 5.x and 6.x. Very confusing indeed, not to mention highly frustrating too!  
  
By this time, appium-java-client v5.0.0-BETA3 was out, but refused to upgrade to that - as the difference was iOS specific. Likewise, Appium v1.6.4 BETA is now available - but not feeling to upgrade so fast - and battle the new surprises, if any.  
  
After digging through Appium's open issues, figured out that many people have faced, and got the similar issue resolved. The solution seemed to be to upgrade the appium-uiautomator2-driver to version > v0.2.6.  
  
So - next question, which had an easier answer - how to upgrade this uiautomator2-driver. However - after the upgrade, my issue did not get fixed. In fact, now the Android Driver was unable to get instantiated at all. I was getting the errors shown below.  
  
1\. [MJSONWP] Encountered internal error running command: Error: Command '/Users/IT000559/Library/Android-SDK/build-tools/25.0.2/aapt dump badging /usr/local/lib/node_modules/appium/node_modules/appium-uiautomator2-driver/uiautomator2/appium-uiautomator2-server-v0.1.1.apk' exited with code 1 at ChildProcess. (../../lib/teen_process.js:70:19) at emitTwo (events.js:106:13) at ChildProcess.emit (events.js:192:7) at maybeClose (internal/child_process.js:890:16) at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5)  
  
2\. org.openqa.selenium.SessionNotCreatedException: Unable to create new remote session. desired capabilities = Capabilities [{appPackage=com.vuclip.viu, noReset=false, appWaitActivity=com.vuclip.viu.ui.screens.IndianProgrammingPreferenceActivity, deviceName=motorola, fullReset=false, appWaitDuration=60000, appActivity=com.vuclip.viu.ui.screens.MainActivity, newCommandTimeout=600, platformVersion=7.0, automationName=UIAutomator2, platformName=Android, udid=ZY223V2H8R, systemPort=6658}], required capabilities = Capabilities [{}] Build info: version: '3.0.1', revision: '1969d75', time: '2016-10-18 09:49:13 -0700'  


  


Eventually, found a workaround. I had to make the following 2 changes:  


  * When initialising the Android Driver, I had to pass an additional capability - "systemport" and set the value to the Appium port for the Appium server the test was connecting to.
    * capabilities.setCapability("systemPort", Integer.parseInt(APPIUM_PORT)); 


  * Before the test run started, I do a cleanup - which includes 
    * kill any prior / orphan Appium server for that particular port, if remaining 
    * Uninstall the app from the device. I had to add another step to also uninstall the following: 
      * io.appium.uiautomator2.server, and, 
      * io.appium.uiautomator2.server.test 

Post this, my tests are now working, as expected (from the beginning), sequentially or in parallel, against all supported Android versions.  
  
Current stack::

* cucumber-jvm - v1.2.5
* cucumber-reporting - v3.5.1
* appium - v1.6.3
* appium-java-client - v5.0.0-BETA2
* appium-uiautomator2-driver - v0.2.3

  


After the dust settled, my colleague - Priyank Shah and I were thinking why not many people have encountered this problem.  
  
My thought is probably most people may be managing the Appium Server and the Android Driver from the test run, instead of from a build script. As a result, they would not have encountered the systemport related challenge as we did.  
  
PS: Note that Appium Server is started / stopped via our build.gradle file and the AndroidDriver is instantiated (based on parameters passed via a combination of environment variables & properties file) from within each cucumber-jvm scenario (@Before hook).  
  
Hope our learning helps others who may encounter similar issues.
