---
layout: page
title: "Analytics - The Brain of the Software"
date: 2019-09-24 18:48:00 +0000
categories:
  - blog
tags:
  - "conference"
  - "appium"
  - "testing_conference"
  - "workshop"
  - "waat"
  - "testbash"
  - "test_automation"
  - "analytics"
  - "webanalytics"
  - "applitools"
  - "automation"
  - "selenium"
  - "web analytics"
  - "opensource"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

##  An Analogy 

  
  


[![](/assets/img/blog/overview.png)](</assets/img/blog/overview.png>)I am not a doctor, nor did I enjoy biology too much in my curriculum as a student.  However, I do know that the body has many organs and each organ plays a vital role in the well being of the individual.  
  


####  Each organ has to: 

  * function correctly (movement, senses, core functions, etc.)


  * has to perform as per expectations in different conditions the individual may be going through (walking, running, swimming, etc.)


  * has to be secure from external parameters (heat, cold, rain, what we eat / drink, etc.)


  * has to have a proper user experience (ex: if the human hands had webs like ducks, would we be able to hold a pen correctly to write?



  
  


  


  * I would like to think of the brain as the super computer which keeps track of what is going on in the body, if each piece playing its part correctly, or not. And if there is something unexpected going on, then there are mechanisms of giving that feedback internally and externally so that course correction would be possible.



![](https://lh3.googleusercontent.com/gfDfiiL0Ib2q5l1dAggmDoLKMjVxPyihY-YUlGb8fJ9kmc7-jafcNxRjydQLMPRt9sUbgDmn6093OVQA3PKaFNDIaeBfhdZFEB54RQ2kvk0B8diJTTzBflxJTT7p5P9tUfo-3itA)

  


###  How does this relate to software?  


Software is similar in some ways. For any software product to work, the following needs to be done:

  


###  Functionality works as expected

  


  * The architecture, testability of the system will allow for various types of testing activities to be performed on the software to ensure everything works as expected
  * [Test Automation](<https://martinfowler.com/articles/practical-test-pyramid.html>) practices will give you quick feedback



  
![](https://lh4.googleusercontent.com/fJv2qTteIEq0_zpZ81Upa6VweVZAy6wj32u_T48NOqcFRQZym4S-gV-UIULgHv6obwOyYUcKfSHtXecflswjg9AeHkuoFYFWPKfZkaDePgcpV-4IwFvcvQBmJ3Npu28XT8djEUde)  
  
There is a plethora of open-source and commercial tools in this space to help in this regard - the most popular open-source tools being [Selenium](<https://www.seleniumhq.org/>) and [Appium](<http://appium.io/>).  
  


  


###  Software is performant

  


  * We can do performance testing at various different levels to ensure at different loads and conditions, the users will be able to use the product in a seamless fashion
  * There are many tools to assist in Performance Testing - some popular ones being [JMeter](<https://jmeter.apache.org/>) and [Gatling](<https://gatling.io/>).



  


###  Software is secure

  


  * Building and testing for security is critical as you do not want user information to be leaked or manipulated and neither do you want to allow external forces to control / manipulate your product behaviour and control
  * The Test Automation Pyramid hence also includes NFRs



  
![](https://lh4.googleusercontent.com/bqjE_PL__6vZybwwTFBqwk2uYktDUJTAxFdNBK57YkWWCJlSNGQY3l69EP8TuWK_LRSO-_K2YZZ314clxrsglrzvpskaKRGAaX2R659jVkXC7FTQ1K6GZ8I--nw74WB-WFHg_8PA)  
  
  


  


###  User experience is validated, and consistent

  


  * In the age of CD (Continuous Delivery & Continuous Deployment), you need to ensure your user experience across all your software delivery means (browsers, mobile-browsers, native apps for mobiles and tablets, etc.) is consistent and users do not face the brunt of UI / look-and-feel issues in the software at the cost of new features 
  * This is a relatively new domain - but there are already many tools to help in this spaces as well - the most popular one (in terms of integration, usage and features) being the AI-powered [Applitools](<https://applitools.com/>)



**_Visual Validation is the new tip of the Test Automation Pyramid!_**  
  
![](https://lh4.googleusercontent.com/KSB9G6robC6JH5su5ED3dZKcfQMTNiusvqxSZGL7KFOes07M5s9tqBj20NABsYsm0QnkQ1U8PpsBvvvcOqfDNOYTv6QjrpsIECnMWBKdmMXdkC9z4lFxu-j9er8I97YnHFJdIzBZ)  
  
  


  


###  What is the brain of the software?

The above is all good, and known in various ways. But what is the "brain" of the software? How does one know if everything is working fine or not? Who will receive the feedback and how do we take corrective action on this?  
  
_Analytics is that piece in the Software product that functions as the brain._ It keeps collecting data about each important piece of software, and provides feedback on the same.  
  
I have come across some extreme examples of Business / Organizations who have all their eggs in one basket - in terms of

  


  * understand their Consumers (engagement / usage / patterns / etc.),
  * understand usage of product features, and, 
  * do all revenue-related book-keeping



  
This is all done purely on Analytics! Hence, to say “Business runs on Analytics, and it may be OK for some product / user features to not work correctly, but Analytics should always work” - is not a myth!  
  
**What this means is Analytics is more important now, than before.**  
  
Unfortunately, Analytics is not known much to the Software Dev + Test community. We know it very superficially - and do what is required to implement it and quickly test it out. But what is analytics? Why is it important? What is the impact of this not working well? Not many think about this.  
  
I have been testing Analytics since 2010 ... and the kind of insights I have been able to get about the product have been huge! I have been able to contribute back to the team and help build better quality software as a result.  
  
But I have to be honest - it is painful to test Analytics. And that is why I created an open-source framework - [WAAT](<https://github.com/anandbagmar/waat>) \- to help automate some of this testing activities.  
  
I also do workshops to help people learn more about Analytics, its importance, and how they can automate this as well.  
  
In the workshop, I do not assume anything and approach is to discuss and learn by example and practice, the following

  


  * How does Analytics works (for Web and Mobile)? 
  * Test Analytics manually in different ways
  * Test Analytics via the final reports
  * Why some Automation strategies will work, and some WILL NOT WORK (based on my experience)!
  * We will see a demo of the Automation running for the same.
  * Time permitting, we will setup running some Automation scripts on your machine to validate the same



  


####  Takeaways from the workshop

We will learn by practicing the following:

  * What is Analytics?
  * Techniques to test analytics manually.
  * How to automate the validation of analytics, via a demo, and if time permits, run the automation from your machine as well.



Hope this post helps you understand the importance of Analytics and why you need to know more about it. Do reach out to me if you want to learn more about it.  
  
**_Next upcoming Analytics workshop is in[TestBash Australia 2019](<https://www.ministryoftesting.com/events/testbash-australia-2019#analytics-rebooted-a-workshop>). Let me know if you would be interested in attending the same_**
