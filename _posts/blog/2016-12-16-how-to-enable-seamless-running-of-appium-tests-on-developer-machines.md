---
layout: page
title: "How to enable seamless running of appium tests on developer machines?"
date: 2016-12-16 12:36:00 +0000
categories:
  - blog
tags:
  - "cloud"
  - "appium"
  - "vuclip"
  - "mobile"
  - "webdriver"
  - "mobile_testing"
  - "test_automation"
  - "test_strategy"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

I am implementing cucumber-jvm based framework to drive mobile apps (using Appium).   
  
Here is what I need to be able to do -   


  1. Run tests on local machine for quick validation. This is mainly for developers to be able to run the tests before pushing code changes in git.
  2. Trigger and Run the tests in the cloud to run against emulators / real devices. 

To achieve point #1, I need the setup to be simple. I do not want the team to go through massive steps to get the environment (Appium, emulators, etc.) setup.   
  
Can / should the whole setup be put inside a docker container - and provide single command to setup and run the tests?   
  
Any other approach you recommend?  
  
Of course - whatever approach is taken, should potentially extend seamlessly to address point #2.
