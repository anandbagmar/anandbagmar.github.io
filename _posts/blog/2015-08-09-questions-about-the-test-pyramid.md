---
layout: page
title: "Questions about the Test Pyramid"
date: 2015-08-09 02:31:00 +0000
categories:
  - blog
tags:
  - "test_pyramid"
  - "automation"
  - "bdt"
  - "design_pattern"
  - "patterns"
  - "testing"
  - "learning"
  - "#testing"
  - "experiences"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

After watching my presentation on "[Enabling Continuous Delivery (CD) in Enterprises with Testing](<http://essenceoftesting.blogspot.in/2015/06/i-had-opportunity-to-speak-in-discuss.html>)", I recently got asked a couple of questions about the Test Pyramid. Thought it would be good to reply publicly - that may help others who had similar doubts.   
  
If you have any other questions, please reach out, or add it as comments on this post.  
  


  * Why do you talk about a JavaScript Test? I mean, why you don't consider this type of testing inside another? So, what do you mean by JavaScript test.
    * JavaScript testing requires different toolset, not the standard xUnit based ones. Hence I classify it separately. Also, there is potentially a lot of logic that can be built in the JavaScript layer - so it is essential to write tests for that too - say using [Jasmine](<http://jasmine.github.io/>).


  * What's the difference between View and UI?
    * UI test should focus on business / user journey validations. However a view test is different. Consider a journey which has a 5 step / screen workflow. To validate some UI change on the 4th step / screen, you will need to go through, in sequence, from step 1 to 4 and then validate the changes. This is very slow and costly approach. Instead, if you build the right type of stubs / mocks, then you can setup the state in your product which simulates the step 1-3 are completed, and directly open the UI, go to step #4, and validate your changes. This is the difference in View and UI tests.
