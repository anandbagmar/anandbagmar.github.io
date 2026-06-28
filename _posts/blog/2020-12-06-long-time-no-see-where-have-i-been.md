---
layout: page
title: "Long time no see? Where have I been"
date: 2020-12-06 06:33:00 +0000
categories:
  - blog
tags:
  - "applitools"
  - "automation"
  - "selenium"
  - "appium"
  - "karate"
  - "design_pattern"
  - "testproject"
  - "opensource"
  - "webdriver"
  - "code-coverage"
  - "api"
  - "test_strategy"
author: Anand Bagmar
show_meta: true
---

It has been a few months since I published anything on my blog. Does not mean I have not been learning or experimenting with new ideas. In fact, in the past few months I have been privileged to have my articles published on [Applitools](<https://applitools.com>) and [Test Project](<https://testproject.io>) blogs.  
  
Below is the link to all those articles, for which I have received very kind reviews and comments on LinkedIn and Twitter.  
  
Apart from this, I have also been contributing to open source - namely - [Selenium](<https://www.selenium.dev/>), [AppiumTestDistribution](<https://github.com/AppiumTestDistribution/AppiumTestDistribution>) and building an open-source kickstarter project for API testing using Karate and for [end-2-end testing](<https://github.com/anandbagmar/e2e-with-atd/>) for Android, iOS, Windows, Mac & Web.  
  
Lastly, I have also been speaking in virtual conferences, webinars and last week I also recorded a podcast, which will be available soon. 

  


#### The end of Smoke, Sanity and Regression

<https://applitools.com/blog/end-smoke-sanity-regression/>  
  
**Do we need Smoke, Sanity, Regression suites?**  


  * Do not blindly start with classifying your tests in different categories. Challenge yourself to do better! 
  * Have a Test Automation strategy and know your test automation framework objective & criteria (“[Test Automation in the World of AI & ML](<https://www.infoq.com/articles/test-automation-ai-ml/>)” highlights various criteria to be considered to build a good Test Automation Framework) 
  * Choose the toolset wisely
  * After all the correct (subjective) approaches taken, if your test execution (in a single browser) is still taking more than say, 10 min for execution, then you can run your tests in parallel, and subsequently, split the test suite into smaller suites which can give you progressive indication of quality 
  * Applitools with its AI-power algorithms can make your functional tests lean, simple, robust and includes UI / UX validation 
  * Applitools Ultrafast Grid will remove the need for Cross-Browser testing, and instead with a single test execution run, validate functionality & UI / Visual rendering for all supported Browsers & Viewports 

  


#### Design Patterns in Test Automation

<https://blog.testproject.io/2020/06/29/design-patterns-in-test-automation/>  
 

**Criteria for building a Test Automation Framework**  
  
Writing code is easy, but writing good code is not as easy. Here are the reasons why I say this:  


  * “Good” is subjective.
  * “Good” depends on the context & overall objective.

  
Similarly, implementing automated test cases is easy (as seen from the getting started example shared earlier). However, scaling this up to be able to implement and run a huge number of tests quickly and efficiently, against an evolving product is not easy!  
  
I refer to a few principles when building a Test Automation Framework. They are:  


  * Based on the context & (current + upcoming) functionality of your product-under-test, define the overall objective of Automation Testing. 
  * Based on the objective defined above, determine the criteria and requirements from your Test Automation Framework. Refer to my post on “[Test Automation in the World of AI & ML](<https://www.infoq.com/articles/test-automation-ai-ml/>)” for details on various aspects you need to consider to build a robust Test Automation Framework. Also, you might find these articles interesting to learn how to select the best tool for your requirements: 
    * Criteria for Selecting the Right Functional Testing Tools
    * How to Select the Best Tool – Research Process
    * How To Select The Right Test Automation Tool

  


####  Stop the Retries in Tests & Reruns of Failing Tests 

<https://applitools.com/blog/uncover-flaky-tests/>  
 

**Takeaways**  


  * Recognise reasons why tests could be flaky / intermittent
  * Critique band-aid approach to fixing flakiness in tests
  * Discuss techniques to identify reasons for test flakiness
  * Fix the root-cause, not the symptoms to make your tests stable, robust and scalable! 

  


####  Measuring Code Coverage from API Workflow & Functional UI Tests 

<https://blog.testproject.io/2020/11/24/measuring-code-coverage-from-api-workflow-functional-ui-tests/>

   
**Why is the Functional Coverage important?**

I choose an approach keeping the 80-20 rule in mind. The information the report provides should be sufficient to understand the current state, and take decisions on “what’s next”. For areas that need additional clarity, I can then talk with the team, explore the code to get to the next level of details. This makes it a very collaborative way of working, and joint-ownership of quality! 🚀  
  
You can choose your own way to implement Functional Coverage – based on your context of team, skills, capability, tech-stack, etc.
