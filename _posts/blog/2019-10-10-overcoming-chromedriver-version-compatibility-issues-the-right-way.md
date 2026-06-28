---
layout: page
title: "Overcoming chromedriver version compatibility issues the right way"
date: 2019-10-10 18:39:00 +0000
categories:
  - blog
tags:
  - "wdm"
  - "automation"
  - "appium"
  - "selenium"
  - "android"
  - "opensource"
  - "webdriver"
  - "ios"
  - "test_automation"
  - "automation_framework"
redirect_from:
  - "/blog/overcoming-chromedriver-version/"
author: Anand Bagmar
show_meta: true
---

I encountered an interesting challenge recently when doing Native Android / iOS app automation - this was related to Chrome browser versions getting updated automatically and my tests failing because of errors like:  
  
  


> org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 74  
> 23:04:25 (Driver info: chromedriver=74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{[#29](<https://github.com/bonigarcia/webdrivermanager/issues/29>)}),platform=Windows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)  
  
---  
  


👍 7

  
So I asked a question on [LinkedIn](<https://www.linkedin.com/posts/anandbagmar_appium-java-framework-activity-6580792178338029568-4Qhy>)  
  
  
And I tweeted asking how to manage ChromeDriver version when running WebDriver / Appium tests.  


  


  


> I have a [#appium](<https://twitter.com/hashtag/appium?src=hash&ref_src=twsrc%5Etfw>) / [#java](<https://twitter.com/hashtag/java?src=hash&ref_src=twsrc%5Etfw>) [#framework](<https://twitter.com/hashtag/framework?src=hash&ref_src=twsrc%5Etfw>).   
>  What is a good way to keep [#chromedriver](<https://twitter.com/hashtag/chromedriver?src=hash&ref_src=twsrc%5Etfw>) updated with version of [#chrome](<https://twitter.com/hashtag/chrome?src=hash&ref_src=twsrc%5Etfw>) via [#scripts](<https://twitter.com/hashtag/scripts?src=hash&ref_src=twsrc%5Etfw>)? I do not want to do this manually - since I have 3+ [#jenkins](<https://twitter.com/hashtag/jenkins?src=hash&ref_src=twsrc%5Etfw>) agents ([#linux](<https://twitter.com/hashtag/linux?src=hash&ref_src=twsrc%5Etfw>) \+ [#mac](<https://twitter.com/hashtag/mac?src=hash&ref_src=twsrc%5Etfw>) mini) and 7+ team members who need to keep doing this [#osx](<https://twitter.com/hashtag/osx?src=hash&ref_src=twsrc%5Etfw>) [#command](<https://twitter.com/hashtag/command?src=hash&ref_src=twsrc%5Etfw>)
> 
> — Anand Bagmar (@BagmarAnand) [September 20, 2019](<https://twitter.com/BagmarAnand/status/1175026552180019200?ref_src=twsrc%5Etfw>)

  


  
  
  


The answer was common and obvious – use [WebDriverManager](<https://github.com/bonigarcia/webdrivermanager>). This is a beautiful, simple and indeed the right answer and solution to the problem.

  
However, that was a partial answer for me.   
  
Here is my context and problem statement in detail:  
  


  * My Test Automation Framework is based on Java / Appium and I use [AppiumTestDistribution](<https://github.com/AppiumTestDistribution/AppiumTestDistribution>) (ATD) 
  * ATD is open-source, and takes away my pain and effort of managing appium and the devices and also takes care of running the tests in parallel or distributed mode, on android as well as iOS
  * In my local lab setup, I have many different android devices connected - which run tests as directed by ATD
  * Since you cannot control how Google PlayStore / Apple App Store pushes out new versions of apps for different android / iOS versions on devices, it is easily possible to end up with different versions of chrome browser in your device lab. When this happens, the tests start failing because of chromedriver incompatibility issues.



Once I was very kindly reminded by the community about WebDriverManager (which I had forgotten about), I now knew what was to be done.

  


I looked at the ATD code, and realised that it was using the default chromedriver version as setup when I had installed appium. This chromedriver was being used when instantiating a new instance of the AndroidDriver.

  


So I submitted a [PR](<https://github.com/AppiumTestDistribution/AppiumTestDistribution/pull/548/files>) for ATD - which essentially did the following:

  * Query the chrome browser versions on each connected device
  * For the **highest version of the browser, use WebDriverManager and get the appropriate chromedriver downloaded
  * Pass the path to the correct chromedriver when creating an instance of the AndroidDriver



**highest version - what does that mean? Well, I also got confused initially. But the answer was simple. On some devices, the Chrome browser is installed by default, as a system app. This cannot be removed. So as new versions of the browser get installed, the default Chrome system app is always there. So when you query for the versions of Chrome on the device, you will see 2 such versions. My code logic was to get all these versions, and pick the highest version from them.

  


Here is the code snippet of how I solved the problem:

Special thanks to [Sai Krishna](<https://www.linkedin.com/in/sai-krishna-3755407b/>) for quickly approving and merging this PR.

  


Hope this provides more information about my problem statement, and how I used your suggestion for WebDriverManager to solve the problem.
