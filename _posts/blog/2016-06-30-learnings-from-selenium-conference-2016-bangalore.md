---
layout: page
title: "Learnings from Selenium Conference 2016, Bangalore"
date: 2016-06-30 16:17:00 +0000
categories:
  - blog
tags:
  - "tta"
  - "conference"
  - "seconf16"
  - "testing"
  - "vodQA"
  - "waat"
  - "learning"
  - "experiences"
  - "angular"
  - "automation"
  - "thoughtworks"
  - "selenium"
  - "protractor"
  - "test_data"
  - "automation_framework"
redirect_from:
  - "/blog/learnings-from-selenium-conference/"
author: Anand Bagmar
show_meta: true
---

The value one gets by attending any conference / training / meetup / etc. is subjective to various aspects, some of which are mentioned below (in no particular order):  
  


  * Individual skills & capabilities
  * Past experiences
  * Existing knowledge / information / expertise on the subject 
  * Open mindedness
  * Willingness to learn
  * Current work (tools & tech stack, challenges, risks, priorities, backlog, tech debt, team members, etc.)

  
The above aspects definitely played a part in what takeaways I had from the recently concluded [Selenium Conference 2016](<http://2016.seleniumconf.in/>) in Bangalore as well.  
  
Here are my key takeaways, which I am going to work on learning more about, or implementing in the near future - special thanks to [+Dave Haeffner](<https://plus.google.com/111726084370469845009>) , [+Marcus Merrell](<https://plus.google.com/112575955589161076256>) , [+Simon Stewart](<https://plus.google.com/104565969450039850531>), [+Bret Pettichord](<https://plus.google.com/114361487365233459418>) for helping me find these takeaways as part of various conversations during these few days.  
  
  


  * **_Related to Protractor_**
    * Use Proxy Server in tests (Protractor framework) to capture HAR file on specific actions (AJAX calls) - and capture performance metrics from the same
    * Read and experiment with the [Marionette driver for Firefox](<https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver>) \- maybe it helps me overcome some of my challenges with Firefox & Maps in CI environment (headless using xvfb)
    * Remove "phantomJS" as a supported browser from my framework by ensuring headless tests work with Chrome & Firefox using xvfb
    * Highlight element when running tests before taking screenshots - will help in debugging
    * Experiment with different loggers & reporters - [Allure](<http://allure.qatools.ru/>), [Winston logger](<https://github.com/winstonjs/winston>)
    * Better "promise" handling in framework to keep abstraction layers sane
  * **_Revive  [WAAT \- Web Analytics Automation Testing Framework](<http://essenceoftesting.blogspot.in/search/label/waat>)_** \- create [new plugin](<https://github.com/anandbagmar/WAAT/blob/master/docs/architecture/WAATArchitectureDiagram_v1.50.png>) using Proxy Server approach. Also remove Omniture Debugger and HttpSniffer plugin.
  * Refocus energy on [**_TTA - Test Trend Analyzer_**](<http://essenceoftesting.blogspot.in/search/label/tta>).
  * **_Keep[vodQA](<http://essenceoftesting.blogspot.in/search/label/vodQA>) going strong_** \- its a good community initiative

  
_See you all in[Selenium Conference UK](<http://seleniumconf.co.uk/>) in November 2016!_
