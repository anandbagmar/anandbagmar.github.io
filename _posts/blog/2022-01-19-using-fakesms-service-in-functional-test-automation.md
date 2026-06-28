---
layout: page
title: "Using fakesms service in Functional Test Automation"
date: 2022-01-19 07:24:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "web"
  - "testing"
  - "mobile"
  - "sms"
  - "otp"
  - "api"
  - "mobile_testing"
  - "test_automation"
author: Anand Bagmar
show_meta: true
---

How do you automate OTP related test scenarios? Do you use a fake SMS service? Does it have restapi to query the SMS messages? geography support? 

To clarify - this needs to be done as part of my functional test automation, where,  


  * the test could be running against a browser, where the browser does not have access to the phone, or,
  * the test could be running against a real mobile device (without SIM), so no way to receive the SMS, or,  

  * the test could be running against an emulator (no SIM), so no way to receive the SMS



Scenarios include: login, payment, SMS content 

Hence I am thinking about using a fakesms service which has API access capabilities to retrieve the SMS. This will help when running automation on browser or devices / emulators without SIM.

Note:

  * There is no access to DB or API to query the OTP. 
  * I don't mind using a paid service



 

Thanks in advance for your help!
