---
layout: page
title: "WAAT-Ruby - ready for use"
date: 2011-07-26 10:14:00 +0000
categories:
  - blog
tags:
  - "waat"
author: Anand Bagmar
show_meta: true
---

**WAAT-Ruby is now ready for use.  **

  


_**[Project hosted on github](<http://github.com/anandbagmar/WAAT-Ruby>) \- http://github.com/anandbagmar/WAAT-Ruby**_

 _**WAAT-Ruby gem available for download from[here](<http://github.com/anandbagmar/WAAT-ruby/tree/master/dist>).**_

_**Documentation is available (on WAAt-Ruby wiki pages)[here](<http://github.com/anandbagmar/WAAT-Ruby/wiki>).**_

  


Since **[WAAT-Ruby](<http://github.com/anandbagmar/WAAT-Ruby>)** uses **[WAAT-Java](<http://github.com/anandbagmar/WAAT>)** under the covers, I have kept the same version numbers for both platforms. The latest version is 1.4.

  


I have not yet pushed it out on rubygems.org. Will update once that is done.

  


So far I have tested this on the following environments:

  * Windows 7 - 64-bit with Ruby 1.8.6
  * RHEL 6 - 64-bit with Ruby 1.8.6 (I had difficulty in getting jpcap deployed on this environment). But once that was done, WAAT worked smoothly out of the box.
  * Ubuntu 10.x - 32-bit with Ruby 1.8.7
  * Ubuntu 10.x - 32-bit with Ruby 1.9.1



**One important note:**

If you are using WAAT (Java or Ruby) on any Linux-based environment, please note the Jpcap requirement for execution. 

WAAT uses Jpcap for _cap_ turing network packets. Jpcap needs administrative privileges to do this work. See the [Jpcap FAQs](<http://netresearch.ics.uci.edu/kfujii/Jpcap/doc/faq.html>) for more information about the same.  
  
  
For all WAAT related blog posts, click [here](<http://essenceoftesting.blogspot.com/search/label/waat>).
