---
layout: page
title: "Real-time Trend and Failure Analysis using Test Trend Analyzer (TTA)"
date: 2013-10-02 17:54:00 +0000
categories:
  - blog
tags:
  - "tta"
  - "innovation"
  - "visualization"
  - "testing_conference"
  - "testing"
  - "pune"
  - "ruby"
  - "automation"
  - "thoughtworks"
  - "punedashboard"
  - "collaboration"
  - "opensource"
redirect_from:
  - "/blog/real-time-trend-and-failure-analysis/"
author: Anand Bagmar
show_meta: true
---

Real-time Trend and Failure Analysis using Test Trend Analyzer (TTA)

Anand Bagmar

##  Summary

Organizations have long running products / programs. They need to understand the health of their products / projects at a quick glance, instead of having a team of people manually scrambling frantically to collate and collect the information needed to get a sense of quality   
about the products they support. 

  


TTA is an open source product that becomes the source of information to give you real-time insights into the health of the product portfolio using the Test Automation results, in form of Trends, Comparative Analysis, Failure Analysis and Functional Performance Benchmarking.  


##  The Dream

The statement "**_I have a dream_** " is a very famous quote by American activist Martin Luther King Jr.   
  
I resonate very closely with that. Here is why and how ...  
  
Sometime in 2011, I had a dream ... a [vision about a product](</blog/test-trend-analyzer-tta/>) that can help those working in large organizations understand the health of their products / projects at a quick glance, instead of having a team of people manually scrambling frantically to collate and collect the information needed to get a sense of quality about the products they support…. 

  


I called this dream - **__Test Trend Analyzer - TTA__**

##  What is TTA?

In a nutshell, given all various types of Test Automation is done in your organization, TTA is a product that stores and parses the test run results, and then displays various Trend Analysis charts and also does Test Failure analysis for you. Based on the context of the product under test, the viewer can then make more meaning of the data presented, and more importantly, take meaningful actions / next steps.

##  Why do I need to Trend Analysis of the test results?

#  Automation (Unit / Integration / Functional / etc.) is a key factor in ensuring the success, quality and time-to-market for products.

  


Since Automated tests are executed via CI (Continuous Integration), a lot of trend analysis and test failure analysis is already be done by the CI tool itself. 

  


However, the ability of CI doing this is limited for the following reasons:

  * The typical archival duration in CI is in the range from 15-45 days. 
  * Only trends can be seen after grouping relevant jobs in the CI tool.
  * It is difficult to group all related product jobs in CI – because of the sheer volume of tests.
  * The grouping of jobs becomes more challenging if the number of products / projects / vendors or partners / environments / etc. are more in number.
  * The projects / products are long running (many months to years). It is not practical to archive the results for such duration in CI.



  


I have seen first-hand many of the use cases listed below from real scenarios, where we need a unique and different product to solve some Testing Specific problems:

  * A Business Manager / Test Director overseeing multiple products development in the organization may want to see the overall health of all the products in his / her portfolio, in real time.
  * A Product Owner / PM / Test Manager overseeing the product development / testing of a specific product in the organization may want to see the overall health of the product, in real time.
  * Individual team members (Tech Leads / QAs / Developers / etc.) want to do quick test failure analysis in order to decide the correct priority of next set of tasks.



##  Vision for TTA

With the above considerations in mind, I came up with the following vision statement for TTA:

•       **A single point, visual solution to gauge the health of your product** portfolio using Test Automation results by means of –

–      Trends

–      Failure analysis

•       **And providing**

–      Drill-down reports

–      Customizable reports

•       **So that**

–      Different stakeholders can get single click view of the health status and potential issues

–      A project team can decide if automation is useful or not.

–      Automated data collation and trending to avoid manual data aggregation and interpretation

•       **With the stakeholders being**

–      QA Directors / Managers / Leads / hands-on-tester

–      Developers

–      Tech-Ops

##  How does TTA work?

TTA is developed as an independent RoR product. It uses MySQL as the database. You will need to install TTA (instructions available on [TTA github wiki](<https://github.com/anandbagmar/tta/wiki>)) on an independent (virtual) machine.

  


TTA is a decoupled product. It does not depend on any specific CI (Continuous Integration) Tool, programming language, test framework, etc.

  


CI Jobs typically call some build tool – example ant, maven, gradle, etc. The command called by the CI job does the test setup, and then executes the tests. After execution, the results are sent back to CI, and the test run completed.

  


After the test execution is completed, to integrate automatic reporting of results to TTA, we need to:

  * Zip the log folder, and,
  * Send the results with test meta-data information



##  Current set of Features for TTA

·       **Test Pyramid view (/pyramid)** \- to see how your project's automation effort aligns with the [**Test Automation philosophy**](<http://martinfowler.com/bliki/TestPyramid.html>)

·       **Comparative Analysis view (/comparative_analysis)** \- to see the **trend of your test automation results** over a period of time, and if any patterns emerge

·       **Failure Analysis view (/defect_analysis)** \- to make better meaning of the test failures, and help you **prioritize which failures should be fixed first.**

·       I**ntegration of external dashboards** (add from **/admin** page, see integration on **/home** page) - this allows one to **integrate different existing dashboards into TTA** \- to make it a one stop place for seeing all Testing related information. Example: You can integrate your defect reports from Mingle / Jira / etc., or, you can also integrate your specific Continuous Integration (CI) dashboard from Go / Jenkins / Hudson / Bamboo / etc.

·       **Test Execution Trend**  \- to see the benchmarking of specific test execution over a time period

·       **Compare test runs (/compare_runs)** \- to **compare specific test runs**

o   what are the common failures, 

o   what are the unique failures, 

o   what failed on date 1, but passed on date 2

o   what failed on date 2, but passed on date 1

·       **Upload Test Run Data manually (/upload)** \- to **manually upload test data** in case if you have not uploaded test data automatically to TTA, but still want to use TTA

·       **TTA Statistics Page (/stats)** \- to know **usage of TTA** by different projects / teams in your organization

Refer to [my blog](</blog/tags/#tta>) or the [TTA-github-wiki](<https://github.com/anandbagmar/tta/wiki>) for other information, including screenshots about [TTA](</blog/tags/#tta>).

##  Current state

TTA is available as an open-source product via [github](<https://github.com/anandbagmar/tta>). There are a couple of clients (internal to ThoughtWorks, and external) using TTA in their projects. 

##  How can you contribute?

Given that we have implemented only a few basic features right now, and there are many more in the backlog, here is how you can help:

  * _Suggest new ideas / features_ that will help make TTA better
  * _Use TTA on your project and provide feedback_
  * More importantly, **_help in implementing these features_**



  


##  Contact information

Contact Anand Bagmar ([anand.bagmar@thoughtworks.com](<mailto:anand.bagmar@thoughtworks.com>) / [abagmar@gmail.com](<mailto:abagmar@gmail.com>)) for more information about TTA.
