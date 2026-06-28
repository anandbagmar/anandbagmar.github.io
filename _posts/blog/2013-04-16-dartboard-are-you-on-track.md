---
layout: page
title: "Dartboard - Are you on track?"
date: 2013-04-16 01:55:00 +0000
categories:
  - blog
tags:
  - "innovation"
  - "visualization"
  - "thoughtworks"
  - "punedashboard"
  - "testing"
  - "agile"
author: Anand Bagmar
show_meta: true
---

In Agile Projects, we use the [swim-lanes](<http://en.wikipedia.org/wiki/Swim_lane>) to track the status of the card life-cycle in an iteration. Unfortunately, the swim-lanes depict a sequential work-flow. Something has to come first, second, ... last. That puts the thought in a lot of minds that what is first is indeed first, and what is last, well, is last in the scheme of things.

  
  


That depicts testing being done towards the end - which is very anti-agile!

  
  


 

  
  


Testing starts off way before development is completed on any card. See the "_**[Agile QA Process](<http://www.slideshare.net/abagmar/agile-qa-process>)**_ " for one way to do Testing on Agile projects.

  


  


  


On Agile projects, r

eality is that testing is going on in some fashion or the other right from the beginning. To help bring that visibility into the work-stream, I tried creating a grid (physically on a board, also in mingle) - with the rows representing the state of testing in each swim lane ... but that too was not as appealing as the image shown below. I chose to call it the **_Dartboard_**.  


  


[![](/assets/img/blog/qa-dashboard-2-with-examples.jpg)](</assets/img/blog/qa-dashboard-2-with-examples.jpg>)  
---  
Dartboard - Are you on track?  
  
  


  


**Some explanation on how we used this:**

Each triangle can represent your individual swim lanes. From testing perspective, we chose to club together "ready for Dev", "in Dev" and "in UI" in the same category.

  


There is a specific in Testing triangle - because there is some amount of work that definitely needs to be done from testing perspective AFTER development and BA signoff is complete.

  


The **RED**  triangle means the card is blocked from ALL perspectives in the iteration.

  


The **GREEN**  tringle means the card is completed from ALL perspectives (analysis, dev, testing - manual + automation)

  


In each of the triangle (except **RED**  and **GREEN**), the different colors mean specific things:

- **BLACK**  band = Testing not yet started

- **RED**  band = Testing is blocked (maybe for additional info needed, etc)

- **BLUE**  band = Testing is in progress. Could be identifying test cases, doing manual / exploratory testing, setting up test data, automation, etc.

  


As the card moves between triangles, the testing state of each of the card is very visible. 

  


Add to this a simple time line on top / bottom of the card to indicate where you are in the iteration, and you know if your "state-of-panic" is justified or not at a very quick glance at the dartboard.

  


**Some swim lane states we have used:**

> Backlog / Spillover?

> Ready for Dev / In Dev / In UI

> Ready for BA Signoff / In BA Signoff

> Ready for Test

> In Test / In Integrated Test

> Done

> Blocked

  


**We also tracked each type of card separately:**

Defects = RED cards / stickies

Story cards = Blue / Yellow cards / stickies

Tech cards = White cards / stickies
