---
layout: page
title: "Converting JSON into usable objects"
date: 2018-07-25 15:42:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "test_data"
  - "opensource"
  - "autologj"
  - "logging"
  - "tools"
author: Anand Bagmar
show_meta: true
---

[JSON](<https://www.json.org/>) is a great way to specify data / information and, off late, it is the format of my choice to specify test data.   
  
  
I find it to be -   


  * light weight 
  * easy to understand 
  * almost very intuitive to know if you have made an error in the syntax 
  * easy to read into code and parse 
  * easy create meaningful custom objects and use in code 

  
Recently, thanks to a friend - [Abhijeet Vaikar](<https://www.linkedin.com/in/abhijeetvaikar/>), I came across a tool - [quicktype.io](<http://quicktype.io/>) \- that helps in transforming the raw JSON (from various sources) directly into custom objects, in a variety of languages.  
  
**Site:** <https://quicktype.io/>  
  
**The tool:** <https://app.quicktype.io/>  
  
I got to know about this tool at perfect time as I am building a new tool for dynamic logging in Java - [AutoLogJ](<https://github.com/anandbagmar/autoLogJ>) (but more about AutoLogJ later). [quicktype.io](<http://quicktype.io/>) does what it promises - and it saved me a lot of time to build the custom POJOs for the same.  
  
Thanks [Abhijeet Vaikar](<https://www.linkedin.com/in/abhijeetvaikar/>) and the [quicktype](<https://twitter.com/quicktypeio>) team!
