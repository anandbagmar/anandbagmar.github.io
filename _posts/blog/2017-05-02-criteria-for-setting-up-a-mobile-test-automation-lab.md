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



[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbPLGMOyb_fIunzpog_W487_iT2Zt0dK7XD8ffr1dsH8sXmJHQSyGMFZIO25_4o9HKst4BJm3w0pFzc7LAVYKBZ-eV0TFs4j0ND_pqxjyxVrtFaBSJh8Y44Fx9PZmEppVpGi8h2mnBUSaW/s200/Screen+Shot+2017-05-01+at+4.44.37+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbPLGMOyb_fIunzpog_W487_iT2Zt0dK7XD8ffr1dsH8sXmJHQSyGMFZIO25_4o9HKst4BJm3w0pFzc7LAVYKBZ-eV0TFs4j0ND_pqxjyxVrtFaBSJh8Y44Fx9PZmEppVpGi8h2mnBUSaW/s1600/Screen+Shot+2017-05-01+at+4.44.37+PM.png>)

  


  * High-quality USB cables (I use the ones shown below - and they are working pretty well)



[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguUxezl4NtO3_tVHmIuC7XcFOynMC73hp7ShkS6g5c7BVJohQXzeDo7bfAbXX4ddP5UROMFpizAbeOTJ92Z0BBvjk3ZeVd37PfJKDsfB0dILX3P8CJZgWu0NPjBRSfa4fkBfoUuQ13Zvjz/s200/Screen+Shot+2017-05-01+at+4.44.46+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguUxezl4NtO3_tVHmIuC7XcFOynMC73hp7ShkS6g5c7BVJohQXzeDo7bfAbXX4ddP5UROMFpizAbeOTJ92Z0BBvjk3ZeVd37PfJKDsfB0dILX3P8CJZgWu0NPjBRSfa4fkBfoUuQ13Zvjz/s1600/Screen+Shot+2017-05-01+at+4.44.46+PM.png>)

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



[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs-K1zfgibU3KQPJ8ZlX8gk_v1waGEWrUK4KZEEPT2CvXpR12ufM01R7Sokbct79LAYH55mC0WCKjEmTKhG0xnWd5smbqAeRUnaoy4VhDU9tm5ogJfEKocb-I6tBJpU0kaeA89tc205pba/s200/Screen+Shot+2017-05-01+at+4.37.05+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs-K1zfgibU3KQPJ8ZlX8gk_v1waGEWrUK4KZEEPT2CvXpR12ufM01R7Sokbct79LAYH55mC0WCKjEmTKhG0xnWd5smbqAeRUnaoy4VhDU9tm5ogJfEKocb-I6tBJpU0kaeA89tc205pba/s1600/Screen+Shot+2017-05-01+at+4.37.05+PM.png>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlLkGUJfHrr0_nenyyme2P4gouDI0kCwUKyolERHe23t_t2Wwa1dcZk3lFSjFffg3eGvQMM_I44lpMYlbJb2kf1pGViiAmeWgu3OG8tVJm1RM6v91hc7PMH9xSxUxy9L9PhZIEYW58E3b0/s200/Screen+Shot+2017-05-01+at+4.37.19+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlLkGUJfHrr0_nenyyme2P4gouDI0kCwUKyolERHe23t_t2Wwa1dcZk3lFSjFffg3eGvQMM_I44lpMYlbJb2kf1pGViiAmeWgu3OG8tVJm1RM6v91hc7PMH9xSxUxy9L9PhZIEYW58E3b0/s1600/Screen+Shot+2017-05-01+at+4.37.19+PM.png>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwvuPQrLJvmCMaGiXjz7hxXDfF3SOzzIWN89gkgeMLj8ncc7xxIAEV58QNJZSVlLW-YJt0QPUu9Gwt1gSPxcZeMnCfB9o84dgs-VxOPgs5iTJZy8MFbJljDufRw4AqVdSjFMfIVPFHVHyK/s200/Screen+Shot+2017-05-01+at+4.37.53+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwvuPQrLJvmCMaGiXjz7hxXDfF3SOzzIWN89gkgeMLj8ncc7xxIAEV58QNJZSVlLW-YJt0QPUu9Gwt1gSPxcZeMnCfB9o84dgs-VxOPgs5iTJZy8MFbJljDufRw4AqVdSjFMfIVPFHVHyK/s1600/Screen+Shot+2017-05-01+at+4.37.53+PM.png>)

  


    * Finally I found an industrial-strength velcro (1" velcro tape that could take a couple of pounds of weight) - and my devices have not budged since. PS: Please be careful when putting on this velcro on the devices. IF it gets on your hand, you will have a velcro tattoo for a long long time.



[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimJFzc9qKYOwAqs7VU1BKlW3l-2LeeNqxnc1xsQ99AYRAmcraQ5qvxyUDOITXl93zLEG31YEcARtUbMw8LeKD32wMGJqaDsgG0t4wapwWO2mDG1c47zYwzZHUf8Ts11diFMenVYp8ZKvis/s200/Screen+Shot+2017-05-01+at+4.42.20+PM.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimJFzc9qKYOwAqs7VU1BKlW3l-2LeeNqxnc1xsQ99AYRAmcraQ5qvxyUDOITXl93zLEG31YEcARtUbMw8LeKD32wMGJqaDsgG0t4wapwWO2mDG1c47zYwzZHUf8Ts11diFMenVYp8ZKvis/s1600/Screen+Shot+2017-05-01+at+4.42.20+PM.png>)

  


**_What other parameters would you consider for setting up your own Lab? Looking forward to the comments below._**

**_  
_**

**_  
_**
