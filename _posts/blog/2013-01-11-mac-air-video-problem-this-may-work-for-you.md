---
layout: page
title: "Mac Air video problem? This may work for you"
date: 2013-01-11 08:40:00 +0000
categories:
  - blog
tags:
  - "mac"
author: Anand Bagmar
show_meta: true
---

I have been using a Mac Air for some time now. One thing that has been a constant frustration for me on this machine is for some reason, the in-built camera stops working. For example, when I try to use Google Hangout or Skype, I get the error - "There is no camera connected".   
  
The System Profiler shows the camera is there.  
  
Strangely, on restarting the machine, the camera starts working.  
  
After lot of digging around, I found a post by "madams end" [here](<https://discussions.apple.com/thread/4158054?start=0&tstart=0>) which solved the problem for me.  
  
**The solution is:  **  
  
  


Go to Terminal.app and run the command:

  

    
    
    sudo killall VDCAssistant

  


  


This fixed the problem for me.

  


The next thing I did was simply created a alias for this command in my shell - and then whenever I encounter the problem, just execute this alias.
