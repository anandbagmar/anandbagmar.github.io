---
layout: page
title: "Protractor for Angular apps?"
date: 2016-03-14 00:10:00 +0000
categories:
  - blog
tags:
  - "design_pattern"
  - "patterns"
  - "test_automation"
  - "experiences"
  - "javascript"
  - "practices"
  - "angular"
  - "automation"
  - "protractor"
  - "collaboration"
  - "page-object-pattern"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

Already asked these questions in the [vodQA group on LinkedIn](<https://www.linkedin.com/groups/4281359/4281359-6112090795802648578>) \- but thought to repeat the same here as well - in case someone else also reads this, and has some thoughts.  
  
I am experimenting (again) with Protractor for automation against Angular-based web-apps. This time around, my comfortness with Javascript is better (by a couple more % than before) - so I am better prepped for this challenge.   
  
That said, I am interested in knowing a few things on this:  


  * Has anyone in the group worked with protractor recently? 


  * What has been your experiences in working with it? 


  * Who are the roles involved in the automation implementation, execution and maintenance? 


  * What are the typical utilities you built in this framework?


  * How have you been modelling you page-object pattern with JS / protractor based frameworks? Or, is there some other better set of patterns for JS that should be used?


  * How did you build your page objects? How did you build and manage the composition / nesting of pages? Did the method of a page return an appropriate page object?


  * How many tests exist in your framework? 


  * Do you run your tests in parallel?


  * Do your tests run in CI? If yes, which driver do you use? Protractor site discourages the use of phantomJS. 


  * Would it be possible to share some (non-confidential) examples of how you built your Page Objects? How are your specs written? Any example of that possible to see?


  * Did anyone manage to run their tests against Safari / IE11 as well?


  * What about soft asserts? Did you implement this?


  * I saw a strange issue when running my test against chrome - I got the element is not clickable at xxx coordinates. However the same test ran against Firefox and phantomjs. Anyone seen this before?


  * Given that protractor site does not recommend using phantomJS driver much, anyone used xvfb for running their tests in CI?


  * What reporters do you use?
