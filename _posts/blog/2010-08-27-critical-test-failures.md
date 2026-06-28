---
layout: page
title: "Critical Test Failures"
date: 2010-08-27 06:35:00 +0000
categories:
  - blog
author: Anand Bagmar
show_meta: true
---

## 

What are Critical Test Failures?

Imagine a Banking application you are testing. 

  


Majority of your automation suite relies on successful login to the application. So you have written various login tests to ensure this functionality is well tested.

  


Apart from other basic tests, all core business transaction tests are going to use the login functionality implicitly to verify proper functioning of the application. Ex: Account balance, transfer funds, bill payments, etc.

  


## 

Problem scenario

  * If there is some problem in the authentication module of the application, all your tests that rely on login are going to fail.
  * We see a false number of failures in the test reports.
  * There could be various manifestations of the same failure, which in turn means more time is required to get to the root cause of the issues.
  * There is unnecessary panic created after seeing a massive number of test failures.




  


Wouldn't it be nice, in such cases, to be able to tag your tests in a way that defines the "critical" dependencies for it to **_PASS_** , _before_ the test in question is attempted to be run?

  


## Defining Critical Dependencies

  * It should be straight-forward, flexible (to define complex dependencies) and easy to add, maintain and update over time.  

  * Each test / fixture / suite can depend on multiple test(s) / fixture(s) / suite(s).  

  * Each test / fixture / suite can have multiple test(s) / fixture(s) / suite(s) dependent on itself.  


Given this dynamic / flexible structure possible, the following questions should be asked in context of the project:  


  1. What is the level of flexibility needed for me to implement critical dependencies effectively?
  2. What is the value I am trying to achieve by having this functionality?

  
Based on the answer to the above questions, you can define your dependencies in any type of resource - either a text / properties file, xml / yaml file, csv files, databases, etc.   
  


## Test Execution time processing

  * Determine the test execution order based on the Critical Test Dependencies defined above. Needless to say, the dependent items should be executed first.
  * When executing a test / fixture / suite, get the list of the critical test(s), fixture(s), suite(s) it is dependent on, and since the dependent tests have already been executed (because of the above point), get their results too.
  * If the result of any of the critical test dependencies is _fail / skip_ , then **do NOT execute this test / fixture / suite AND instead, mark the current test / fixture / suite as _fail / skip*_ , and set the reason as "Critical Test dependency failed" with more specifics of the same.**

* - Marking the test as _fail / skip_ is dependent on how you want to see the end report.  
  


## 

How to implement Critical Test Failures in your framework? 

You can then implement the handling of _**Critical Test Failures_** using different approaches. A few possible ideas (in order of priority) are listed below:  


  1. Create a generic utility with full flexibility and use it as an external utility in your project.
  2. Create a custom listener for your unit testing framework (eg: TestNG, jUnit, nUnit, etc.) and add this listener to the runtime when executing tests.
  3. Create a specific custom solution in your test automation infrastructure to implement this functionality.



  


## 

Value proposition

  * We see a correct number of failures, and correct total number of tests in the test reports
  * There are no false failures reported. The failures / skips because of Critical Test dependencies have the pointer to the exact test / fixture / suite because of which this test / fixture / suite failed.
  * Since time is NOT spent on running tests which have failed critical tests it depends on, we get quicker feedback.
  * This solution can be applied to any framework.
