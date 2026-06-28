---
layout: page
title: "Sample test automation framework using cucumber-jvm"
date: 2014-04-10 03:47:00 +0000
categories:
  - blog
tags:
  - "innovation"
  - "automation"
  - "java"
  - "thoughtworks"
  - "punedashboard"
  - "cucumber"
  - "testing"
  - "opensource"
  - "pune"
  - "automation_framework"
  - "ruby"
redirect_from:
  - "/blog/sample-test-automation-framework-using/"
author: Anand Bagmar
show_meta: true
---

I wanted to learn and experiment with cucumber-jvm. My approach was to think of a real **complex scenario that needs to be automated and then build a cucumber-jvm based framework to achieve the following goals:  


  * Learn how cucumber-jvm works
  * Create a bare-bone framework with all basic requirements that can be reused 

Once you know the basics and fundamentals of building a scalable and maintainable Test Automation frameworks, it was really easy to apply my past learning and experiences to learn cucumber-jvm and build a framework from scratch.  
  
So, without further ado, I introduce to you the [cucumber-jvm-sample Test Automation Framework](<https://github.com/anandbagmar/cuke-jvm-sample>), hosted on github.   
  


###  Following functionality is implemented in this framework:

  * Tests specified using [cucumber-jvm](<http://cukes.info/install-cucumber-jvm.html>)
  * Build tool: [Gradle](<http://gradle.org/>)
  * Programming language: [Groovy (for Gradle)](<http://groovy.codehaus.org/>) and Java 
  * Test Data Management: Samples to use data-specified in feature files, AND use data from separate json files
  * Browser automation: Using [WebDriver](<http://code.google.com/p/selenium/wiki/GettingStarted>) for browser interaction
  * Web Service automation: Using [cxf library](<http://cxf.apache.org/>) to generate client code from web service WSDL files, and invoke methods on the same
  * Take screenshots on demand and save on disk
  * Integrated [cucumber-reports](<https://github.com/masterthought/cucumber-reporting>) to get 'pretty' and 'meaningful' reports from test execution
  * Using [apache logger](<http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Logger.html>) for storing test logs in files (and also report to console)
  * Using [aspectJ](<http://eclipse.org/aspectj/>) to do byte code injection to automatically log test trace to file. Also creating a separate benchmarks file to track time taken by each method. This information can be mapped separately in other tools like Excel to identify patterns of test execution.

  
Feel free to fork and use this framework on your projects. If there are any other features you think are important to have in a Test Automation Framework, let me know. Even better would be to submit pull requests with those changes, which I will take a look at and accept if it makes sense.  
  
_** Pun intended :) The complex test I am talking about is a simple search using google search._
