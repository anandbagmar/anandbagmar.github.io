---
layout: page
title: "WAAT (Java & Ruby) with JS_SNIFFER is out of the box"
date: 2012-10-15 21:28:00 +0000
categories:
  - blog
tags:
  - "waat"
  - "java"
  - "thoughtworks"
  - "automation"
  - "ruby"
redirect_from:
  - "/blog/waat-java-ruby-with-js-sniffer-is-out/"
author: Anand Bagmar
show_meta: true
---

I have pushed in the latest changes to WAAT to get over the limitation of not working in a pure https environment (/blog/waat-and-https/).  
  
The solution is creating a new type of plugin - called **_JS_SNIFFER_**.  
  
This plugin requires the user of WAAT to do a little more work than before.   
  
They need (to work with their development team) to figure out what JS script they need to invoke in the browser to get the URL of interest that is sent as a pure https request over the wire. WAAT then takes this request, and does the tag matching for you.  
  
This generation of the JS script is a one-time effort - unless the way the tags are reported changes in the product. Then the test framework can work in a seamless fashion as before to test this is working consistently in an automated fashion.   
  
Another advantage of this is that with this approach, we do not need to install jpcap or run the tests as a "super-user" - a restriction posed by the network packet capture library.  
  
The [**WAAT_v1.5.0.jar**](<https://github.com/anandbagmar/WAAT>) is available on [**here**](<https://github.com/anandbagmar/WAAT/tree/master/dist>) (https://github.com/anandbagmar/WAAT/tree/master/dist) on github.  
  
Similarly, I have also updated the WAAT-ruby gem ([**WAAT-1.5.0.gem**](<https://github.com/anandbagmar/WAAT-ruby>)). This gem is not yet pushed out to rubygems.org - as I am still testing it out. However, if you are interested, you can download it from [**here**](<https://github.com/anandbagmar/WAAT-ruby/downloads>).  
  
As usual, feedback / comments / suggestions most welcome!
