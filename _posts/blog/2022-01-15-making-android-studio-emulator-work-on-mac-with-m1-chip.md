---
layout: page
title: "Making Android Studio Emulator work on Mac with M1 chip"
date: 2022-01-15 06:38:00 +0000
categories:
  - blog
tags:
  - "m1"
  - "android"
  - "android studio"
  - "setup"
  - "mac"
redirect_from:
  - "/blog/making-android-studio-emulator-work-on/"
author: Anand Bagmar
show_meta: true
---

Like many who have been using Apple Mac (Pro) with the new M1 chip, I am also very impressed and happy with the laptop. However, there have been challenges in the initial days with some software not working out of the box on this new hardware. 

While most of the issues got resolved, I ran into some very weird issues with one specific software that was essential for my work - running Android emulators off Android Studio.

I saw various errors like:

[![](/assets/img/blog/img-02.png)](</assets/img/blog/img-02.png>)

  


[![](/assets/img/blog/img-01.png)](</assets/img/blog/img-01.png>)

  


[![](/assets/img/blog/img-03.jpg)](</assets/img/blog/img-03.jpg>)

  


[![](/assets/img/blog/img-04.png)](</assets/img/blog/img-04.png>)

Eventually, there was an upgrade from Android Studio specifically for Mac M1 chip - the latest one from the website (as of 15 Jan 2022) is version **Android Studio Arctic Fox** (2020.3.1) Patch 4 (android-studio-2020.3.1.26-mac_arm.dmg).

For some time, I was able to create the emulators and use it. However, something weird happened along the way, and this also stopped working - and I started seeing the same errors as before.

After countless failures from installs, uninstalls of various versions of Android Studio , and the SDK Manager for Android (including different emulator versions), I took the latest **Android Studio Chipmunk (2021.2.1) Canary 7** release of Android Studio (android-studio-2021.2.1.7-mac_arm.zip) from [Android Studio download archives](<https://developer.android.com/studio/archive>) and that seemed to work out of the box (with my earlier downloaded Android SDKs and Emulator).   


Note: This is based on my experiences on Mac OSX Big Sur v11.6.2
