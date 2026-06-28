---
layout: page
title: "Any WAAT (Web Analytics Automation Testing Framework) users out there?"
date: 2016-07-04 23:50:00 +0000
categories:
  - blog
tags:
  - "conference"
  - "seconf16"
  - "mobile"
  - "vodQA"
  - "waat"
  - "test_automation"
  - "javascript"
  - "ruby"
  - "webanalytics"
  - "thoughtworks"
  - "java"
  - "automation"
  - "selenium"
  - "web analytics"
  - "opensource"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

It has been over 2 years since any update to [**_WAAT - Java or Ruby_**](<https://essenceoftesting.blogspot.com/search/label/waat>). Over the years, I have realised, and also received a lot of thoughts / feedback from users of WAAT around where it helps, and what challenges exist.   
  
Also, given the widespread IoT & Big Data based work going on around the world, (Web) Analytics now plays a much bigger role in guiding business take better decisions.   
  
WAAT (again) fits in the grand scheme of things very nicely as a framework to automate the validation of correct reporting of tags to any Web Analytics solution provider.  
  
Hence, its a no-brainer for me - it is high time I work on some of the feedback and limitations of WAAT to make it usable again!  
  
At the recently concluded [Selenium Conference 2016](<http://essenceoftesting.blogspot.in/2016/06/learnings-from-seconf16.html>) held in Bangalore, India, I got an idea of how to overcome a lot of challenges (listed below) and pain in using WAAT.   
  
  


###  What's next?

To implement my new idea, this does mean a couple of things:  
  


  * Existing plugins have limited use - and needs to be deleted.
  * A new plugin would need to be created - which may mean different set of APIs, and also different way to specify the test data.



###  Questions for you

Before I go ahead making these changes - I would like to get answers to the below questions (please add your answers directly in the comments):

  * **Is anyone currently using WAAT?  If yes - **
    * which version (Java / Ruby)?
    * which plugin
    * Using HTTP / HTTPS?
    * Which Web Analytic solution are you using? (ex: Google Analytics, WebTrends, etc?)
  * **Would you be interested in using the new WAAT? If yes -  **
    * Which language? Java / Ruby / JavaScript / Python / etc?
  * **Would you like to contribute to implementing this new WAAT? If yes - contact me! :)**



\-----------------------------------------------------------------------------------------------------------------  


###  Current plugins available in WAAT:

  * **Omniture Debugger (WAAT-Java)**
    * Pros:
      * OS independent
      * Run using regular-test-user 
    * Cons:
      * Browser dependent - need to implement ScriptRunner for the UI-driver in use
      * Web-Analytic solution dependent - only for Adobe Marketing Clout / Omniture SiteCatalyst
  * **HTTPSniffer  (WAAT-Java, WAAT-Ruby)**
    * Pros
      * Web-Analytic solution independent
      * Browser independent
      * UI-Driver independent
    * Cons
      * 3rd party libraries are OS dependent
      * HTTPs is not supported out-of-the-box
      * Run tests as "root"
  * **JSSniffer  (WAAT-Java, WAAT-Ruby)**
    * Pros
      * Web-Analytic solution independent
      * Browser independent
      * HTTPs supported out-of-the-box
      * No 3rd party library dependency
    * Cons
      * Need to write JavaScript to get the URL from the browser context
      * UI-Driver dependent



\-----------------------------------------------------------------------------------------------------------------
