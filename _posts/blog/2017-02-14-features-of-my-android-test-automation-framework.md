---
layout: page
title: "Features of my Android Test Automation Framework"
date: 2017-02-14 08:11:00 +0000
categories:
  - blog
tags:
  - "viu"
  - "appium"
  - "cucumber-jvm"
  - "ci"
  - "cucumber"
  - "testing"
  - "android"
  - "ios"
  - "test_automation"
  - "automation"
  - "vuclip"
  - "opensource"
  - "mobile_testing"
  - "automation_framework"
redirect_from:
  - "/blog/features-of-my-android-test-automation/"
author: Anand Bagmar
show_meta: true
---

_**[UPDATED - Added[link](<https://goo.gl/yOGdGN>) to implementation details at the end of the post]**_  
  
As I have shared in my previous few blog posts ([A new beginning - entertainment on mobile](</blog/a-new-beginning-entertainment-on-mobile/>), [How to enable seamless running of appium tests on developer machines?](</blog/how-to-enable-seamless-running-of-appium-tests-on-developer-machines/>)), a few months ago, I embarked on a new journey as "Director - Quality" for the [Viu](<https://play.google.com/store/apps/details?id=com.vuclip.viu>) product at [Vuclip](<http://www.vuclip.com/>).  
  


  


Here are a few details about our Viu app:

Viu offers high quality, popular, regional video content in various different languages for consumers in various different regions - Indonesia, Malaysia, India, Middle-East, Egypt ....

The consumers on the move could be using Android devices or iOS devices to watch their favourite content - either stream it directly via their Mobile Data plan, or they could have downloaded their preferred video at home / office and watch the saved video later. 

The very interesting, and, challenging bit from Testing perspective, is that the app would behave differently based on from which part of the world the user is using it. This logic is not based on Geolocation.

##  Objective

My objective from functional test automation is:

  * Get quick feedback, from every build and know if the app is working well. If NOT, then be able to get to the root cause ASAP.
  * Provide feedback and confidence to stakeholders (Product team, Business team, etc.) on the "true" state of the product. There should be no surprises, for anyone!
  * Run tests seamlessly by simulating different regions



##  Approach

To achieve this - I choose to go with the following tech-stack:

  * Test Intent specification \- [cucumber-jvm](<https://github.com/cucumber/cucumber-jvm>) \- to specify the business intent, in the business terminology (expected to be) understood by all. 
  * Reports \- [cucumber-reports](<https://github.com/damianszczepanik/cucumber-reporting>) provide good, rich, meaningful and easily understandable reports which provide meaningful information about the state of the product.
  * Device interaction \- [Appium](<http://appium.io/>) / Java - implement the intent specified by cucumber-jvm. This will also allow us the flexibility to test against Android, iOS and Web.
  * Continuous Integration (CI) server \- [Jenkins](<https://jenkins.io/>) \- to be able to run tests automatically when a new build is ready. Also, we integrated the cucumber-reports via the [cucumber-reports plugin](<https://github.com/jenkinsci/cucumber-reports-plugin>) directly in Jenkins - so now all stakeholders interested in the reports just need to go to one place and get all information, in real time. No more need for Test Reports to be generated manually and sent across for everyone.



##  Test Execution environment

I looked at various cloud-based service providers (SauceLabs, Test Object, pCloudy, AWS Device Farm, etc.) who could run our tests on real-devices in their data centers. These tests would need to be triggered automatically via Jenkins when a new build (apk) is available, or as we add more tests. However, none of these providers could satisfy my requirements (without having to compromise significantly on my objectives).

  
_Hence, finally decided to setup my own private Test Lab for this. Oh fun!_   


##  Framework Architecture

Below is the architecture of the framework that I came up with. This is based on the architecture I posted in my earlier blog post on “[Assertion & Validations in Page Object](</blog/assertions-and-validations-in-page-objects/>)” ([/blog/assertions-and-validations-in-page-objects/](</blog/assertions-and-validations-in-page-objects/>))

*(image no longer available — framework architecture diagram)*

##  Approach, Features & Capabilities of the Test Lab

  * For Jenkins configuration, we configure the job using Jenkins file - to ensure our Jenkins configuration is also under version control. Also, since this is groovy scripting language, we can have good logic and processing done as part of the job execution.
  * This helped us keep the configuration consistent and common across any type of job we had to run.
  * The Jenkins job will trigger a set of commands on the Jenkins Agent.
  * Jenkins Agents are setup on Mac Mini machines. Each Agent has only 1 executor. This is essential to prevent using a device that is already in use by another job / executor / agent.
  * The Mac Mini (more to be added on demand) has a powered USB hub which connects upto 8 devices
  * Depending on types of devices connected, we have as many Jenkins Agents (with 1 executor only) allocated for them. 

Example:  


    * Samsung devices (with API Level 22) allocated to Jenkins agent - viu-e2e-samsung
    * Motorola devices allocated to Jenkins agent - viu-e2e-moto



##  Infrastructure

  * To manage and use the devices allocated to each node and more important - prevent other nodes using other devices, each node in Jenkins has an environment variable in its configuration - CONNECTED_DEVICE_IDS - a comma separated list of devices allocated to this node.
    * This approach makes it easy to change / add / remove devices on the fly. All we need to do in such cases is update the device ID in the appropriate node’s CONNECTED_DEVICE_IDS environment variable
    * Our gradle file, reads the CONNECTED_DEVICE_IDS environment variable, and finds devices connected on the Mac Mini matching the provided device ids. This simple technique allows specific device allocation from the pool of devices to each node.
    * PS: If anyone does an error and provides the same device id for multiple nodes, we all know what will happen. These are areas where we need to be very cautious in our execution and maintenance.
  * The URL for the Android APK file is also passed to the gradle file as a an environment variable. We download the APK file once before test execution starts.
  * _Functional (end-2-end) Automation is painfully slow to run._ To get the feedback quickly, we have to run this in parallel. All existing approaches to running cucumber-jvm tests in parallel failed to meet our requirement. I wanted to run each scenario in parallel, on whichever device is free (from the matching devices list). Eventually ended up writing a small script that allows me to run scenarios in parallel.


  * **Managing Appium Server (start / stop)** is another important activity - which is required to be done just once per device. Gradle manages that as well.



##  Next steps

  * Stabilize parallel test execution (problems with Android 7)
  * Start with iOS app automation
  * Start with Web automation ([www.viu.com](<http://www.viu.com/>))


  * ~~Share gradle file with community, if anyone interested.~~


  * **_[UPDATED] You can find the details of the implementation[here](<https://goo.gl/yOGdGN>)_**
