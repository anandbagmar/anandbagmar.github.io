---
layout: page
title: "WAAT Java v1.5.1 released today"
date: 2014-03-28 10:47:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "java"
  - "thoughtworks"
  - "punedashboard"
  - "testing"
  - "opensource"
  - "pune"
  - "waat"
  - "ruby"
redirect_from:
  - "/blog/waat-java-v1-5-1-released-today/"
author: Anand Bagmar
show_meta: true
---

After a long time, and with lot of push from collaborators and users of [WAAT](<https://github.com/anandbagmar/waat>), I have finally updated [WAAT (Java)](<https://github.com/anandbagmar/waat>) and made a new release today.   
  
You can get this new version - [v1.5.1 directly from the project's dist directory](<https://github.com/anandbagmar/WAAT/tree/master/dist>).  
  
Once I get some feedback, I will also update [WAAT-ruby](<https://github.com/anandbagmar/WAAT-ruby>) with these changes.  
  
Here is the list of changes in WAAT_v1.5.1:  


##  Changes in v1.5.1

  * Engine.isExpectedTagPresentInActualTagList in engine class is made public  

  * Updated Engine to work without creating testData.xml file, and directly sending exceptedSectionList for tags  

        
        Added a new method
            Engine.verifyWebAnalyticsData(String actionName, ArrayList expectedSectionList, String[] urlPatterns, int minimumNumberOfPackets)

  * Added an empty constructor for Section.java to prevent marshalling error  

  * Support Fragmented Packets  

  * Updated Engine to support Pattern comparison, instead of String contains  


Do let me know if you see any problems / issues with this update.  
  
Thanks.
