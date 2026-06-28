---
layout: page
title: "Getting started with implementing Automation"
date: 2020-12-09 04:16:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "selenium"
  - "appium"
  - "testproject"
  - "test_automation"
  - "automation_framework"
redirect_from:
  - "/blog/getting-started-with-implementing/"
author: Anand Bagmar
show_meta: true
---

Getting started with implementing tests for automation (web or native apps) may seem daunting for those who are doing this for the first time. 

Assuming you are using open-source tooling like Selenium or Appium, there are multiple ways you can get started.

  1. [DIY](<https://www.blogger.com/#>) \- Build your own framework by scripting based on the documentation

  2. Use Selenium-IDE for quick record and playback

  3. Use TestProject Recorder for quick record and playback

  4. Use TestProject SDK to build your own custom scripts for automating the tests  
  





Each of the above approaches has its own pros-and-cons. Let's look at this in some detail:

## Approach #1 - DIY - Build your own framework

Selenium: [https://www.selenium.dev/documentation/en/](<https://www.selenium.dev/documentation/en/>)

Appium: [https://appium.io/docs/en/about-appium/intro/](<https://appium.io/docs/en/about-appium/intro/>)

Pros| Cons  
---|---  
You can build all features and capabilities as per your design & requirement| *You need to learn a programming language  
  
| *You have to build everyone on your own (though you can use supporting libraries)  
  
|   
  
  
* Depending on the context of the team, the above points can also be considered as an advantage

  


## Approach #2 - Selenium-IDE

[https://www.selenium.dev/selenium-ide](<https://www.selenium.dev/selenium-ide>)

Pros| Cons  
---|---  
Easy to set up| Basic reports  
Works in Chrome & Firefox| Works only for automating Web applications  
Code can be exported in various formats|   
  
Recorded tests can be run from command line|   
  
Tests can be run in your own CI|   
  
Will always be in-sync with underlying WebDriver|   
  
  
  
  


## Approach #3 - TestProject Recorder

[https://testproject.io/easy-test-automation/](<https://testproject.io/easy-test-automation/>)

Pros| Cons  
---|---  
Advanced recorder (lot of actions, validations, self-healing, customisations possible, and a lot of community Addons)| Recorder works only in Chrome, but tests can be executed on all browsers  
Recorder works for Web applications as well as Native Apps (in real devices or emulators) for Android and iOS (even iOS on Windows machine)| Generated code is very simple - good as a reference to see how the underlying implementation / interaction is done  
TestProject agent automatically determines all available browsers available and devices connected to the machine and execution can be customised accordingly| Each recorded test needs to be exported individually. No concept of reuse in this approach  
Can schedule test runs as one-time, or repeated activity via build-in scheduler / CI/CD tool integrations or via their RESTful API|   
  
Reports are comprehensive with meaningful data, including screenshots and option to download to PDF format|   
  
Code can be generated from the recorded script|   
  
Can share tests easily using the "Share test" feature|   
  
  
  
  


## Approach #4 - TestProject SDK

[https://testproject.io/advanced-scripting-capabilities](<https://testproject.io/advanced-scripting-capabilities>)

Pros| Cons  
---|---  
Probably the most powerful way of these 4 approaches as it uses WebDriver / Appium under the hood. Get the power of building your own framework, while reusing out-of-the-box features like driver management, automatic reporting, etc.| You need to learn a programming language  
Driver management is TestProject responsibility. Test implementer can focus on automating tests|
