---
layout: page
title: "Error in building native extensions on mac / ruby?"
date: 2012-09-26 05:16:00 +0000
categories:
  - blog
tags:
  - "ruby"
author: Anand Bagmar
show_meta: true
---

If you encounter errors when a ruby gem on your mac (error in building native extensions), read more for a solution that worked for me.  
  
I was trying to install ffi on my mac and got the following error:  
  
sudo gem install ffi -v '1.0.7'  
  
  
Building native extensions.  This could take a while...  
ERROR:  Error installing ffi:  
ERROR: Failed to build gem native extension.  
  
/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby extconf.rb  
mkmf.rb can't find header files for ruby at /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/ruby.h  
  
  
Gem files will remain installed in /Library/Ruby/Gems/1.8/gems/ffi-1.0.7 for inspection.  
Results logged to /Library/Ruby/Gems/1.8/gems/ffi-1.0.7/ext/ffi_c/gem_make.out  
  
  
Here is what you need to do resolve the issue:  
  


  * Install xcode
  * Install the "Command Line Tools" from xcode -> Preferences -> Downloads -> Components

  
Now you will be able to install the gem and build its native extensions on your mac.  
  
**An important UPDATE from my good friend Oscar Reiken:**  
  
[Oscar Rieken](<https://plus.google.com/u/0/106069524592179726017>)5:52 PM (edited)  


good tip ;) but that only works with newer versions of mac OSX where the latest version of Xcode is included, you might also want to add that if you dont have access to the latest xcode you can use brew(<http://apple.stackexchange.com/questions/38222/how-do-i-install-gcc-via-homebrew>) or install GCC directly(<https://github.com/kennethreitz/osx-gcc-installer>) ﻿
