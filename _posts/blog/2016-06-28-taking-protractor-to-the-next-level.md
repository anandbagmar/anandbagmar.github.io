---
layout: page
title: "Taking Protractor to the next level "
date: 2016-06-28 16:53:00 +0000
categories:
  - blog
tags:
  - "conference"
  - "seconf16"
  - "patterns"
  - "testing"
  - "test_automation"
  - "test_strategy"
  - "practices"
  - "thoughtworks"
  - "automation"
  - "protractor"
  - "selenium"
  - "test_data"
  - "page-object-pattern"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

As I got onto a project early this year - my paths crossed again with Protractor / Angular / JavaScript. Despite my past experiences with this tech stack, I needed to remain positive when approaching this challenge.  
  
In this case, the context was quite different. That said, the challenges, though reduced compared to my first attempt at using Protractor effectively, were still around.   
  
I had posted a set of questions on [my blog](<http://essenceoftesting.blogspot.com/2016/03/protractor-for-angular-apps.html>), various LinkedIn and facebook groups - and got a lot of suggestions and advice how to proceed. Thanks to all of them, it did make my life easier.  
  
Then, as part of Selenium Conference 2016 held in Bangalore on 24-25th June 2016, my friend and colleague - [+Nikita Iyer](<https://plus.google.com/101496505901823293274>) and I spoke about "[Sharing the Pain of Automating with Protractor & WebDriver](<https://confengine.com/selenium-conf-2016/proposal/2478/sharing-the-pain-in-automating-with-protractor-webdriver>)". The intention was multi-fold:  


  * We wanted to share what challenges we had faced on the team when using Protractor, and also how we overcame certain challenges. This was to help others in similar situations to learn from our mistakes & solutions.
  * We also wanted to learn from the attendees what other challenges & solutions they had come up with in their experiences with this Protractor tool-stack.



I am very happy to say that we were successful in achieving both these objectives quite successfully.

  


Below is the details from the talk.

  


Abstract  
  


There is a saying ..."_Sukh baatne se badhta hai, dukh baatne se kam hota hai_ ", translated as - "_happiness increases & sadness reduces on sharing with others_".

  


We want to take this opportunity to share with our experiences - the good and the bad, in the journey of building a Test Automation framework for an AngularJS based application. 

  


We will learn, by a case study, what thought process we applied on the given context (product, team, skills, capabilities, long term vision) to come up with an appropriate Test Automation Strategy. This Test Automation strategy covered all aspects of Test Automation - Unit, Integration, UI - i.e. End-2-End tests (E2E).

  


Next, we will share how we went about narrowing-down, and eventually selecting a specific Tech Stack + Tools (Javascript / Jasmine / Protractor / Selenium-WebDriver) to accomplish the Test Automation for the product.

  


Lastly, we will share the challenges that came up in the implementation of the Test Automation, and how we overcame them. This will also include how we managed to get the tests running in Jenkins - a Continuous Integration tool. 

This discussion is applicable to all team members who are working on Test Automation!

  


P.S. We will be attempting to make a sample protractor-based automation framework available on github for anyone to use as a starting point for setting up protractor-based Test Automation framework.

  


  


###  Slides

  


**[Sharing the pain using Protractor](<https://www.slideshare.net/abagmar/sharing-the-pain-using-protractor> "Sharing the pain using Protractor") ** from **[Anand Bagmar](<https://www.slideshare.net/abagmar>)**

###  Video

\- will be updated once available

###  Pictures

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuNzZDWxNwso3y5T9BK-WHPfL2e8sWYecaJK2h5Va0mma8PFN7TDHh99UdBPwiDUsF2_pu6flgCm2JmDUW29UDA0OL1SZk1Z2QI1t4UhkQJI9igsH0J8DeCvJ1fXik9kL9KyInkOzKdRob/s200/Anand-Nikitha-Protractor-1.JPG)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuNzZDWxNwso3y5T9BK-WHPfL2e8sWYecaJK2h5Va0mma8PFN7TDHh99UdBPwiDUsF2_pu6flgCm2JmDUW29UDA0OL1SZk1Z2QI1t4UhkQJI9igsH0J8DeCvJ1fXik9kL9KyInkOzKdRob/s1600/Anand-Nikitha-Protractor-1.JPG>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO50S6-hDStndUQTzzW226i9NtP1KXLDHMEoa3uk0COBB9HptsylhL5Gk0QPPYV-8_2tPlzo6c4JBJTYJivJexdI8u7J9EsrnIjMgYhtNSNxRGeyWUGa5NzFsT3SQrm7UoGBf6qY5Amm0u/s200/Anand-Nikitha-Protractor-2.JPG)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO50S6-hDStndUQTzzW226i9NtP1KXLDHMEoa3uk0COBB9HptsylhL5Gk0QPPYV-8_2tPlzo6c4JBJTYJivJexdI8u7J9EsrnIjMgYhtNSNxRGeyWUGa5NzFsT3SQrm7UoGBf6qY5Amm0u/s1600/Anand-Nikitha-Protractor-2.JPG>)

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ffNXIN4xJv1kqwBc_1WsuXe1GyHpe2-Xquk3j8iZvS4IxFjozUUfiecwnSGPMU94kpF-mCkdiX3yYIOqM5AiSbTWHAilzfh_I0sD2SSKK6raNhwgYlCEgu1WFa_9dd5Dps_1vBut_CqM/s200/Anand-Nikitha-Protractor-3.JPG)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ffNXIN4xJv1kqwBc_1WsuXe1GyHpe2-Xquk3j8iZvS4IxFjozUUfiecwnSGPMU94kpF-mCkdiX3yYIOqM5AiSbTWHAilzfh_I0sD2SSKK6raNhwgYlCEgu1WFa_9dd5Dps_1vBut_CqM/s1600/Anand-Nikitha-Protractor-3.JPG>)
