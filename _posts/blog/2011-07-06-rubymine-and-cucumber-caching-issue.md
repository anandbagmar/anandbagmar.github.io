---
layout: page
title: "RubyMine (and Cucumber) caching issue"
date: 2011-07-06 11:14:00 +0000
categories:
  - blog
tags:
  - "automation"
author: Anand Bagmar
show_meta: true
---

I use RubyMine to write and implement my Cucumber features on Linux.

I have noticed one weird behavior at times.

  


Though my step definition is correct, and the test also runs fine, RubyMine flags the step as not implemented. For some reason, it is not able to find the corresponding implementation in the .rb step definition file.

  


On a haunch, I selected the "Invalidate Cache" in RubyMine's File menu, and selected the "Invalidate and Restart" option. Presto .... things started working properly again. 

  


Now I am wondering why did the RubyMine cache get messed up in the first place .....
