---
layout: page
title: "Ways to implement fakesms service / otp validation in Functional Test Automation "
date: 2022-03-22 03:29:00 +0000
categories:
  - blog
tags:
  - "fakesms"
  - "automation"
  - "otp"
  - "test_automation"
  - "automation_framework"
  - "email"
author: Anand Bagmar
show_meta: true
---

I had asked a question in my [earlier blog post](<https://essenceoftesting.blogspot.com/2022/01/using-fakesms-service-in-functional.html>) about 

How do you automate OTP related test scenarios? Do you use a fake SMS service? Does it have restapi to query the SMS messages? geography support? 

A lot of people replied to it directly on the post, or via twitter and LinkedIn. I thank them all for their responses and suggestions!  


 

Here is the summary of the suggestions received:  
  


  * <https://twitter.com/BagmarAnand/status/1483697448375701505>
  * <https://www.proovl.com/test>
  * <https://freephonenum.com/>
  * <https://www.bulksms.com/test/>
  * <https://smstome.com/>
  * <https://oksms.org/>
  * <https://simpletexting.com/virtual-phone-numbers/>
  * In addition, there are paid services that will allow you to integrate this as part of functional automation - <https://www.linkedin.com/posts/anandbagmar_otp-test-scenarios-activity-6889461246991613952-KbrC/> \- lot of discussion here 



In addition, if anyone needs to test email flows, [getnada.com](<https://getnada.com>) is a great way you can automate and validate emails. They have rest apis for the same.

   


These solutions will allow you to automate seemingly difficult to automate functionality, WITHOUT having to create "testing-hooks" in your product. Hence, you will be able to test the code that will be shipped to Production, which is very important!

  


Hope this helps others who may be looking for similar things.
