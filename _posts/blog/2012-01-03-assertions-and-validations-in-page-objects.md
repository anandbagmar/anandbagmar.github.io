---
layout: page
title: "Assertions and Validations in Page Objects"
date: 2012-01-03 01:45:00 +0000
categories:
  - blog
tags:
  - "automation"
author: Anand Bagmar
show_meta: true
---

A colleague recently asked me a very nice set of questions -   
  


  * "_Have any of you designed tests with assertions happening in page objects and not in the tests?  _
  * _If yes, have you faced any specific problem with this approach?  _
  * _What would be the drawback in moving the assertions inside the page's methods._ "

  
Here are my thoughts on this.  


##  Test Framework Design

I follow a few principles when designing my test framework:  


  * **_Test code should be of Production Quality!_**
  * Since the test code should be of Production Quality, it means it needs to be** _designed and built using design patterns_**.
  * This well-designed test framework should have proper **_abstraction layers_**. These abstraction layers help in many different ways:
    * **_Decouple test specification from test implementation_**
    * Provides greater level of **_re-usability_**
    * Easier in **_re-factoring_**
    * Easier to **_maintain and evolve_** the framework
    * Easier for all team members to **_ramp-up_** and work in a **_collaborative_**  way on specific abstraction layers.
  * **_Evolve your framework functionality and implementation_**. Keeping the end goal in mind, develop the framework as per requirements at that point in time. Do not attempt to build all the functionality in a single shot. More likely than not, you will end up building something that is not going to satisfy the future requirement.



See the diagram below for reference on different possible layers of a Test Framework.  
  
  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju5iMhkdVa-RmoNsKy6dENc-4MV39QdZrL2tVD_-MrhJWJ0OYtBVcZ2iHdP_xZ_cFBET5ntvEY7DsQOm8J9hSwGByBpM5PYvD3aYCnmby7ZUW5-pElzsQDFWou2NF_CdhuBMlP_Q4SS6bn/s640/TestFrameworkLayers.JPG)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju5iMhkdVa-RmoNsKy6dENc-4MV39QdZrL2tVD_-MrhJWJ0OYtBVcZ2iHdP_xZ_cFBET5ntvEY7DsQOm8J9hSwGByBpM5PYvD3aYCnmby7ZUW5-pElzsQDFWou2NF_CdhuBMlP_Q4SS6bn/s1600/TestFrameworkLayers.JPG>)

  


## 

What is Page-Object pattern?  


  
  
Page-Object pattern is one of the powerful ways of designing a good, reusable, extensible and maintainable test framework. 

  


[This](<http://code.google.com/p/selenium/wiki/PageObjects>) article as great explanation and examples of Page Objects ([http://code.google.com/p/selenium/wiki/PageObjects](<http://code.google.com/p/selenium/wiki/PageObjects>))

  


Assertions and validations in Page Objects?

_The page object is a code representation of the actual page. It has accessors and modifiers (getters and setters) for various objects in that page._ It only knows how to perform actions on the page object, and retrieve data / values from the page.   
  
  
If there is any problem in the page under test, or the page object representing the page, then the test will fail automatically (in most cases) because of functionality mismatch.   
  
  
_Assertions / verifications are essentially business rules for the product under test._  
  
  
The page-object should not have assertions or verifications in them. The business rules of the product do not belong in the page object layer, but instead in the layer above it.  


  


In many cases the business rules remain the same where as the underlying implementation evolves. If you have the changes isolated and decoupled, then updating the framework becomes easy and much quicker. this also makes more sense in larger and distributed projects where everyone may not be on the same page.  
  
  
  
I refrain from having any form of assertions in the page's object. It mixes the pure implementation of visibility of the page's functionality with the business logic. This in turn makes both, the framework and the tests brittle.  
  
The impact of having these rules and guidelines of how the test framework is structured is greatly seen as the framework matures and when new people come on the team, the learning curve is not as steep.   
  
If the project is small, or if the test framework is going to be thrown away after some time,  then you can probably get away by building the framework any which way you want.   
  
  
_**Thinking that I will take the easy way out for now and then will come back to "do this right" is a trap!!! More often than not, you are never going to get time to come back and make things right. So might as well, spend a little extra effort in the beginning and build your test framework the right way! Remember - "A stitch in time saves nine"!**_
