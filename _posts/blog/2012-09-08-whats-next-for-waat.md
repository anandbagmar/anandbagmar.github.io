---
layout: page
title: "Whats next for WAAT?"
date: 2012-09-08 05:17:00 +0000
categories:
  - blog
tags:
  - "waat"
  - "automation"
author: Anand Bagmar
show_meta: true
---

It has been quite some time that I updated WAAT. The released version has been working well - but it does have its limitations as listed in the [FAQs](<https://github.com/anandbagmar/WAAT/wiki/FAQs>) on github.  
  
The biggest limitation I feel about the current release version of WAAT is that it does not work in a pure https kind of an environment. ([http://essenceoftesting.blogspot.in/2011/06/waat-and-https.html](<http://essenceoftesting.blogspot.in/2011/06/waat-and-https.html>))  
  
Of late I have been spiking out different ways to overcome this limitation. I have experimented to create a HttpsSniffer, and hit various different road-blocks in that. That has forced me to look at another strategy.   
  
So I have changed direction in coming to a solution. I am looking at creating something like a JSInjector / JSSniffer plugin - which executes a javascript in the browser from where the action is invoked. This is not as straight forward to use as the earlier approaches. The user of this plugin will need to understand the DOM and some javascripts better, maybe take help from the development team, but then once the way to retrive the basic information is known, then we are in calm waters again :)  
  
If you are facing this similar issue in a pure https environment for web analytics testing, look out for more information in this space.  
  
My plan is to update [WAAT](<https://github.com/anandbagmar/WAAT>), followed-by [WAAT-Ruby](<https://github.com/anandbagmar/WAAT-ruby>) and then lastly release a new version of the [WAAT-Ruby gem](<http://rubygems.org/gems/WAAT>) following that.
