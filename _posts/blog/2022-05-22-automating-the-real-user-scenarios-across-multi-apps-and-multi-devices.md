---
layout: page
title: "Automating the real-user scenarios across multi-apps, and multi-devices"
date: 2022-05-22 05:41:00 +0000
categories:
  - blog
tags:
  - "teswiz"
  - "automation"
  - "web"
  - "mobile"
  - "opensource"
author: Anand Bagmar
show_meta: true
---

Simulating real-user scenarios as part of your automation is a solved problem. You need to understand the domain, the product, the user, and then define and implement your scenario.

But there are some types of scenarios that are complex to implement. These are the real-world scenarios having multiple personas (users) interacting with each other to use some business functionalities. These personas may be on the same platform or different (web / mobile-web / native apps / desktop applications).

Example scenarios:

  * How do you check if more than 1 person is able to join a zoom / teams meeting? And that they can interact with each other?
  * How do you check if the end-2-end scenario that involves multiple users, across multiple apps works as expected? 
    * Given user places order on Amazon (app / browser)
    * When delivery agent delivers the order (using Delivery app)
    * Then user can see the order status as "Delivered"



Even though we will automate and test each application in such interactions independently, or test each persona scenarios independently, we need a way to build confidence that these multiple personas and applications can work together. These scenarios are critical to automate!

_**[teswiz](<https://github.com/znsio/teswiz>),**_ an open-source framework can easily automate these multi-user, multi-app, multi-device scenarios. 

Example: Multi-user, Multi-device test scenario

[![](/assets/img/blog/multiuser-multidevice-annotated.png)](</assets/img/blog/multiuser-multidevice-annotated.png>)

   


Example: Multi-user, Multi-app, Multi-device test scenario

[![](/assets/img/blog/multiuser-multidevice-multiapp-annotated.png)](</assets/img/blog/multiuser-multidevice-multiapp-annotated.png>)

See [teswiz](<https://github.com/znsio/teswiz>) and [getting-started-with-teswiz](<https://github.com/znsio/getting-started-with-teswiz>) projects for information, or contact me.
