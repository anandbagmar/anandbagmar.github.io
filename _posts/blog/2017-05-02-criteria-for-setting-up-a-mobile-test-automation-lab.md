---
layout: page
title: "Criteria for setting up a Mobile Test Automation LAB"
date: 2017-05-02 00:53:00 +0000
categories:
  - blog
tags:
  - "viu"
  - "ci"
  - "android"
  - "mobile"
  - "learning"
  - "ios"
  - "test_automation"
  - "automation"
  - "vuclip"
  - "opensource"
  - "madlab"
  - "mobile_testing"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

I recently got asked this question related to the [**_MAD LAB_**](<https://essenceoftesting.blogspot.com/2017/04/introducing-mad-lab-for-mobile.html>) (**_[Mobile Automation Devices LAB](<https://essenceoftesting.blogspot.com/2017/04/introducing-mad-lab-for-mobile.html>)_**) - "_Would like to understand how can we setup something similar in our organisation?_ "

  


Since this question is applicable for all those thinking of, or have already set up their own lab, thought I would share my answer here.

  


_To setup your own LAB for Mobile Test Automation, multiple things need to align:_

  


  


**Supportive management who -**

  * allows experiments (within reason of course) and encourages learning through failure, 
  * willing to invest in infrastructure ($$)



  


**Skilled and Passionate team members who -**

  * understand the domain well, 
  * willing to learn, experiment, re-learn and fail fast, 
  * keep looking for innovative solutions to solve problems on hand, 
  * do not reinvent the wheel. 



  


Philosophy aside, our **_[MAD LAB](<https://essenceoftesting.blogspot.com/2017/04/introducing-mad-lab-for-mobile.html>)_** has the following: 

  * Mac Minis (8-12 devices per Mac Mini), 
  * Powered USB Hubs (I use the ones shown below - and they are working pretty well)



[![](/assets/img/blog/screen-shot-2017-05-01-at-4.44.37-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.44.37-pm.png>)

  


  * High-quality USB cables (I use the ones shown below - and they are working pretty well)



[![](/assets/img/blog/screen-shot-2017-05-01-at-4.44.46-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.44.46-pm.png>)

  * CI (Jenkins) setup correctly to keep running tests continuously, proper reporting  in place (else whats the use of running tests if you do not look at the results)



  


_**You could start with similar IF it fits your product-under-test context**_  
_**  
**_ After I answered this on LinkedIn, I realised, there are more parameters to think about, than just the above.  


  * Knowing which devices to use in your Lab
  * Having good, reliable Internet connection
  * Devices should be "seen" easily
  * Should be easy to work on / with the devices as and when required
  * Know how you the devices will be placed in the lab. We tried the following:
    * 2-way tape - that didn't work. Devices used to stay up for a few days, then "drop" suddenly. Of course, that also depends on the back surface of the devices.
    * We tried many mobile stands / hangers (shown below) - but each had their own limitations



[![](/assets/img/blog/screen-shot-2017-05-01-at-4.37.05-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.37.05-pm.png>)

  


[![](/assets/img/blog/screen-shot-2017-05-01-at-4.37.19-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.37.19-pm.png>)

  


[![](/assets/img/blog/screen-shot-2017-05-01-at-4.37.53-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.37.53-pm.png>)

  


    * Finally I found an industrial-strength velcro (1" velcro tape that could take a couple of pounds of weight) - and my devices have not budged since. PS: Please be careful when putting on this velcro on the devices. IF it gets on your hand, you will have a velcro tattoo for a long long time.



[![](/assets/img/blog/screen-shot-2017-05-01-at-4.42.20-pm.png)](</assets/img/blog/screen-shot-2017-05-01-at-4.42.20-pm.png>)

  


**_What other parameters would you consider for setting up your own Lab? Looking forward to the comments below._**

**_  
_**

**_  
_**
