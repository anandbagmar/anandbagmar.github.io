---
layout: page
title: "  Offshore Testing on Agile Projects"
date: 2013-10-06 17:03:00 +0000
categories:
  - blog
tags:
  - "innovation"
  - "testing"
  - "pune"
  - "taas"
  - "waat"
  - "mac"
  - "ruby"
  - "automation"
  - "performance"
  - "java"
  - "bdt"
  - "thoughtworks"
  - "punedashboard"
  - "collaboration"
  - "opensource"
  - "agile"
  - "mobile_testing"
author: Anand Bagmar
show_meta: true
---

Offshore Testing on Agile Projects … 

Anand Bagmar

#  Reality of organizations

Organizations are now spread across the world. With this spread, having distributed teams is a reality. Reasons could be a combination of various factors, including:

  


Globalization |  Cost  
---|---  
24x7 availability |  Team size  
Mergers and Acquisitions |  Talent  
  
  


The Agile Software methodology talks about various principles to approach Software Development. There are various practices that can be applied to achieve these principles. 

  


The choice of practices is very significant and important in ensuring the success of the project. Some of the parameters to consider, in no significant order are:

  


Skillset on the team |  Capability on the team  
---|---  
Delivery objectives |  Distributed teams   
Working with partners / vendors? |  Organization Security / policy constrains  
Tools for collaboration |  Time overlap time between teams  
Mindset of team members |  Communication  
Test Automation |  Project Collaboration Tools  
Testing Tools |  Continuous Integration  
  
  


** The above list is from a Software Testing perspective.

  


This post is about what practices we implemented as a team for an offshore testing project.

#  Case Study - A quick introduction

An enterprise had a B2B product providing an online version of a physically conducted auction for selling used-vehicles, in real-time and at high-speed. Typical participation in this auction is by an auctioneer, multiple sellers, and potentially hundreds of buyers. Each sale can have up to 500 vehicles. Each vehicle gets sold / skipped in under 30 seconds - with multiple buyers potentially bidding on it at the same time. Key business rules: only 1 bid per buyer, no consecutive bids by the same buyer.

  


Analysis and Development was happening across 3 locations – 2 teams in the US, and 1 team in Brazil. Only Testing was happening from Pune, India.

  


[George Bernard Shaw](<http://www.goodreads.com/author/show/5217.George_Bernard_Shaw>) said:

“Success does not consist in never making mistakes but in never making the same one a second time.”

  


We took that to heart and very sincerely. We applied all our learning and experiences in picking up the practices to make us succeed. We consciously sought to creative, innovative and applied out-of-the-box thinking on how we approached testing (in terms of strategy, process, tools, techniques) for this unique, interesting and extremely challenging application, ensuring we do not go down the same path again.

#  Challenges

We had to over come many challenges for this project.

  * Challenge in creating a **_common DSL that will be understood by ALL_**** _ _** parties - i.e. Clients / Business / BAs / PMs / Devs / QAs
  * All examples / forums talk using trivial problems - whereas we had **_lot of data and complex business scenarios_**** _ _** to take care of.
  * ****Cucumber / capybara / WebDriver / ruby do not allow an easy way to do  **_concurrency / parallel testing_******
  * We needed to simulate in our **_manual + automation tests for "n" participants_**** _ _** at a time, interacting with the sale / auction
  * A typical sale / auction can contains **_60-500 buyers, 1-x sellers, 1 auctioneer_**. The sale / auction can contain anywhere from **_50-1000 vehicles to sell_**. There can be multiple sales going on in parallel. So how do we test these scenarios effectively?
  * **_Data creating / usage_**  is a huge problem (ex: production subset snapshot is > 10GB (compressed) in size, refresh takes long time too,
  * Getting a **_local environment_**** _ _** in Pune to continue working effectively - all pairing stations / environment machines use RHEL Server 6.0 and are auto-configured using puppet. These machines are registered to the Client account on the RedHat Satellite Server.
  * **_Communication_**** _ _** challenge - We are working from 10K miles away - with a time difference of 9.5 / 10.5 hours (depending on DST) \- this means almost 0 overlap with the distributed team. To add to that complexity, our BA was in another city in the US - so another time difference to take care of.
  * **_End-to-end Performance / Load testing_**** _ _** is not even a part of this scope - but something we are very vary of in terms of what can go wrong at that scale.
  * We need to be agile - i.e. **_testing stories and functionality in the same iteration_**.



  


_All the above-mentioned problems meant we had to come up with our own unique way of tackling the testing._

#  Our principles - our North Star

_We stuck to a few guiding principles as our North Star:_

  * ****_Keep it_ _ _**_simple_******
  * ___We know the goal, so_ _ _**_evolve_**** _ _**_the framework - don't start building everything from step 1_ __
  * ___Keep_ _ _**_sharing_**** _ _**_the approach / strategy / issues faced on regular basis with all concerned parties and make this a TEAM challenge instead of a Test team problem!___
  * ___**Don't try to automate everything**_ __
  * _Keep test code_ _ _**_clean_**



#  The End Result

At the end of the journey, here are some interesting events from the off-shore testing project:

  * Tests were specified in form of user journeys following the Behavior Driven Testing (BDT) philosophy – specified in Cucumber.
  * Created a custom test framework (Cucumber, Capybara, WebDriver) that tests a real-time auction - in a very deterministic fashion.
  * We had 65-70 tests in form of user journeys that covers the full automated regression for the product.
  * Our regression completed in less than 30 minutes.
  * We had no manual tests to be executed as part of regression.
  * All tests (=user journeys) are documented directly in Cucumber scenarios and are automated
  * Anything that is not part of the user journeys is pushed down to the dev team to automate (or we try to write automation at that lower level)
  * Created a ‘special’ Long running test suite that **_simulates a real sale_**  with 400 vehicles, >100 buyers, 2 sellers and an auctioneer.
  * Created special concurrent (high speed parallel) tests that ensures even at highest possible load, the system is behaving correctly
  * Since there was no separate performance and load test strategy, created special utilities in the automation framework, to benchmark “key” actions.
  * No separate documentation or test cases ever written / maintained - never missed it too.
  * A separate special sanity test that runs in production after deployment is done, to ensure all the integration points are setup properly
  * Changed our work timings (for most team members) from 12pm - 9pm IST to get some more overlap, and remote pairing time with onsite team.
  * Setup an ice-cream meter - for those that come late for standup.



#  Innovations and Customizations

Necessity breeds innovation! This was so true in this project. 

  


Below is a table listing all the different areas and specifics of the customization we did in our framework. 

  


##  Dartboard

Created a custom board “** _Dartboard_** ” to quickly **_visualize the testing status in the Iteration_**. See this post for more details: “[Dartboard – Are you on track?](<http://essenceoftesting.blogspot.com/2013/04/dartboard-are-you-on-track.html>)”

  


##  TaaS

To automate the last mile of Integration Testing between different applications, we created an open-source product – **_TaaS_**. This provides a platform / OS / Tool / Technology / Language **_agnostic way of Automating the Integrated Tests between applications_**.

  


###  Base premise for TaaS:

Enterprise-sized organizations have multiple products under their belt. The technology stack used for each of the product is usually different – for various reasons.

  


Most of such organizations like to have a common Test Automation solution across these products in an effort to standardize the test automation framework.

  


**However, this is not a good idea! If products in the same organization can be built using different / varied technology stack, then why should you pose this restriction on the Test Automation environment?**

  


**Each product should be tested using the tools and technologies that are “right” for it.**

  


“**TaaS** ” is a product that allows you do achieve the “correct” way of doing Test Automation.

  


See [my blog](<http://essenceoftesting.blogspot.com/>) for all information related to [TaaS](<http://essenceoftesting.blogspot.in/search/label/taas>).

  


##  WAAT - Web Analytics Automation Testing Framework

I had created the [WAAT](<http://essenceoftesting.blogspot.in/search/label/waat>) framework for [Java](<https://github.com/anandbagmar/WAAT>) and [Ruby](<https://github.com/anandbagmar/WAAT-ruby>) in 2010/2011. However this framework had a limitation - it did not work products what are configured to work only in https mode.

  


For one of the applications, we need to do testing for WebTrends reporting. Since this application worked only in https mode, I created a new plugin for WAAT  \- JS Sniffer that can work with https-only applications. See [my blog](<http://essenceoftesting.blogspot.in/search/label/waat>) for more details about WAAT.
