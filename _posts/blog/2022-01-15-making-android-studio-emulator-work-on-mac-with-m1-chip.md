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
author: Anand Bagmar
show_meta: true
---

Like many who have been using Apple Mac (Pro) with the new M1 chip, I am also very impressed and happy with the laptop. However, there have been challenges in the initial days with some software not working out of the box on this new hardware. 

While most of the issues got resolved, I ran into some very weird issues with one specific software that was essential for my work - running Android emulators off Android Studio.

I saw various errors like:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgzDdZp4UH4oTOKFd5Xq4y_VgXo8dt5ZMT35oE2Ak41ZIaawPu8yJonA1zd6HDHtWFkbo3iRzPV5tYG2-8wVuB4FrBEWY3GC0RxkCSIsgnNQSVtfa2VwFFfhxU-x26DQ-xYFRt64xjjHSiXYDWuToYXioTTxFV_Pso7oh40GodQPe1qu6JPFBkfTy1upQ=s320)](<https://blogger.googleusercontent.com/img/a/AVvXsEgzDdZp4UH4oTOKFd5Xq4y_VgXo8dt5ZMT35oE2Ak41ZIaawPu8yJonA1zd6HDHtWFkbo3iRzPV5tYG2-8wVuB4FrBEWY3GC0RxkCSIsgnNQSVtfa2VwFFfhxU-x26DQ-xYFRt64xjjHSiXYDWuToYXioTTxFV_Pso7oh40GodQPe1qu6JPFBkfTy1upQ=s912>)

  


[![](https://blogger.googleusercontent.com/img/a/AVvXsEgLqTF_V2trFllYu_6iHSr-NoeNtWbUdPOTqiSNgXzSWMwcd1Bd-WbJDyez5iOzsCKY8IUS5jmp7iKmthAhMVgvg9c075HljebDx-itUuwGoqEbkrTViyVG9l_4ZDxAypK2MeH6ZpUiBidXjXWrgm02QOnu4e6P7nvZeROL10BO2zKNDgeGLA-G3cJLjg=s320)](<https://blogger.googleusercontent.com/img/a/AVvXsEgLqTF_V2trFllYu_6iHSr-NoeNtWbUdPOTqiSNgXzSWMwcd1Bd-WbJDyez5iOzsCKY8IUS5jmp7iKmthAhMVgvg9c075HljebDx-itUuwGoqEbkrTViyVG9l_4ZDxAypK2MeH6ZpUiBidXjXWrgm02QOnu4e6P7nvZeROL10BO2zKNDgeGLA-G3cJLjg=s1978>)

  


[![](https://blogger.googleusercontent.com/img/a/AVvXsEhQAUvCt4EL4SsJ5uml1xDk_stFJoM4OCxR8mHQnC8aiE1g12jjf6QWbymUzP7-qgEJFjIcgTJR02EbmEhSvx_mx5odS3zCJFsDhXjLsNUZ287dkpAaPVj1nmD1CqidfY_y1O8McMzhWSSWw3x0-o-lmfKLb2HHgknGX-XSQ578jLxqBidG2d4XIku20w=s320)](<https://blogger.googleusercontent.com/img/a/AVvXsEhQAUvCt4EL4SsJ5uml1xDk_stFJoM4OCxR8mHQnC8aiE1g12jjf6QWbymUzP7-qgEJFjIcgTJR02EbmEhSvx_mx5odS3zCJFsDhXjLsNUZ287dkpAaPVj1nmD1CqidfY_y1O8McMzhWSSWw3x0-o-lmfKLb2HHgknGX-XSQ578jLxqBidG2d4XIku20w=s1200>)

  


[![](https://blogger.googleusercontent.com/img/a/AVvXsEiKxsFtsF81VXVigc737kUw7zpwPpWfVcgIrlMByDKBWW8sAaLFGBOmSAw7gMFvTN5UAESNbAdAv5km9POlwSUWpZ8CTdz63Is1_iirx-UddZGKVSeJnC0P-A44BwrCT3pubtOlAljUskkHqUCryiXWz5No5ez2f4M8WgzB6uB8EAJc3t2mDZJxsznRpA=s320)](<https://blogger.googleusercontent.com/img/a/AVvXsEiKxsFtsF81VXVigc737kUw7zpwPpWfVcgIrlMByDKBWW8sAaLFGBOmSAw7gMFvTN5UAESNbAdAv5km9POlwSUWpZ8CTdz63Is1_iirx-UddZGKVSeJnC0P-A44BwrCT3pubtOlAljUskkHqUCryiXWz5No5ez2f4M8WgzB6uB8EAJc3t2mDZJxsznRpA=s1200>)

Eventually, there was an upgrade from Android Studio specifically for Mac M1 chip - the latest one from the website (as of 15 Jan 2022) is version **Android Studio Arctic Fox** (2020.3.1) Patch 4 (android-studio-2020.3.1.26-mac_arm.dmg).

For some time, I was able to create the emulators and use it. However, something weird happened along the way, and this also stopped working - and I started seeing the same errors as before.

After countless failures from installs, uninstalls of various versions of Android Studio , and the SDK Manager for Android (including different emulator versions), I took the latest **Android Studio Chipmunk (2021.2.1) Canary 7** release of Android Studio (android-studio-2021.2.1.7-mac_arm.zip) from [Android Studio download archives](<https://developer.android.com/studio/archive>) and that seemed to work out of the box (with my earlier downloaded Android SDKs and Emulator).   


Note: This is based on my experiences on Mac OSX Big Sur v11.6.2
