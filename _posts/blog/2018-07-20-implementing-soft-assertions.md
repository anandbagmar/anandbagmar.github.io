---
layout: page
title: "Implementing Soft Assertions"
date: 2018-07-20 09:58:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "code"
  - "selenium"
  - "appium"
  - "opensource"
  - "softassertion"
  - "webdriver"
  - "assertion"
  - "test_automation"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

Back in 2009 / 2010, I was working on implementing end-2-end tests for a web site using Java / Selenium / TestNG based automation. The challenge I was facing was that the tests used to fail for trivial (but valid) reasons - and I wondered that the test did not even get to core validations before it failed. _How will the team ever know about the main issues in the product if the test fails for trivial issues?  _  
  
That was a trigger point for me to think about **_Soft Assertions_** \- what if there was a way to say if there is a type of failure that I want to know about, but the test can continue with the remaining set of validations - unless something does not make sense to proceed with.  
  
Ex: If the text message of a field is incorrect, I can continue. But if login fails, no point in proceeding with the rest of the test.  
  
This idea seemed interesting - so I came up with the following requirements from such an  implementation as listed below:  
  


  * Clear distinction between what type of failure I can continue from, or not
    * Ex: assert.** is for hard asserts. verify.** is for soft asserts
  * All failures that I can continue from (i.e. soft asserts), need to be collated and at the end of the test, the complete list of those soft assert failures should be presented with the test result (and in the report), while the test failed just once
    * Ex: There were 5 soft assertion failures)
  * Capture relevant screenshots whenever Soft Assertion failed
  * If there was a hard assert along the way of the test execution, the test failure should include the prior soft assert failures along with the hard assert failure, as appropriate



  
For the actual implementation, I did the following (in 2009/2010):

  * I looked into the TestNG code base, and I could not really find any out-of-the-box support for what I wanted to do. 
  * So for lack of knowledge on better ways of implementation, 
    * I checked-out the TestNG code, 
    * added the Soft Assertion implementation, and, 
    * built a custom TestNG.jar file
    * checked-in the jar file as a library artefact in our automation framework. 



  


_In hindsight, I should have sent that functionality as a PR to the project.  _

  


But not all is lost, TestNG now (or maybe since some time now) has support for Soft Assertions - out-of-the-box. And it is pretty straightforward to implement / use it as well.

  


####  Implementing Soft Assertions in your test framework

See [this gist](<https://gist.github.com/anandbagmar/b4182ebbadc42b730c87a868011a350f>) for implementation that you can you use with TestNG (I tested with v6.10).  
  


####  Using Soft Assertions in your tests

[Here](<https://gist.github.com/anandbagmar/9d5878d3edbb08ca35b9e9b166442d65>) is how you can use the Soft Assertions in your tests.

  


  


####  Soft Assertions in any other tech stack?

What if you are not using TestNG, or Java - rather, what if you are using completely different programming language / tools / test-runner? Can you still use Soft Assertions?   
  
Absolutely YES! All you need to understand is the concept, and figure out the best way to implement the same, if any out-of-the-box solution does not exist in that tech stack.   
  
Hope this helps you!
