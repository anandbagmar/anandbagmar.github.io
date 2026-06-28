---
layout: page
title: "A few thoughts on Test Automation"
date: 2018-07-23 09:19:00 +0000
categories:
  - blog
tags:
  - "exploratory"
  - "automation"
  - "tdd"
  - "testing"
  - "experiments"
  - "experiences"
  - "test_strategy"
author: Anand Bagmar
show_meta: true
---

[Deepanshu Agarwal](<https://www.linkedin.com/in/deepanshu-agarwal-865a928a>) and [Brijesh Deb](<https://www.linkedin.com/in/brijeshkumardeb>) asked some very interesting questions on a [LinkedIn post](<https://www.linkedin.com/feed/update/urn:li:activity:6426038049376960512>). Since I have some verbose thoughts on this, thought it is better to respond via a blog post instead.  
  


  * Why is Test Automation still considered suitable only for regression testing? What about writing automation tests sooner as in case of Test Driven Development?
    * [Anand] - Depends what you call test automation? If ONLY FUNCTIONAL, then its better to explore the product first, investigate / have conversations with developers on what lower-level tests are already automated, and then based on cost / risk-value analysis, decide what else needs to be automated at Functional layer.

  


A tangential rant ....

The reason we think about classifications such as SMOKE, SANITY, REGRESSION in Functional Automation ONLY has a big reason. These tests are inherently very slow, brittle and it takes a lot of effort to ensure these tests give poor feedback on exact point / reason of failure. 

  


I have never seen any other form of tests - say Unit tests, which would be magnitudes in number larger than the functional tests (hopefully) ever have any such classification. We all just say, the unit tests ran, not the smoke unit tests ran. 

  


We need to grow up and understand the reason behind this. We need to make our top-of-the-pyramid tests as less in number as possible. We need to ensure we use good programming / development practices and get quick and reliable feedback from these tests. Else we will keep focussing on the symptoms, and never get to the root cause.

  


\--- Rant ends

  


Once we understand this, then it is a matter of understanding in the context what can and needs to happen first, and what next. In most cases TDD will work. But TDD as a Functional Spec may, or may-not be an overkill .... the team has to decide that.



  * Why do the automated tests always have to derived from manual tests?
    * [Anand] - What is a manual test? Something that a machine is not performing? How do you do "manual testing"? Is Exploratory Testing subset of Manual Testing, or the other way, or any other thoughts on that?

  


From the perspective of "automated tests" - I read it as "automated functional tests" here. In that case, the answer for the above question holds true here as well.

  


Continuing from that thought - I think the approach (of deriving automated tests from so-called manual tests) is better than thinking upfront what tests I am going to automate and then proceed with the implementation without any thought or regard to any other learning along the way.



  * The tests classified as manual tests are only focused at ensuring certain checks. What about actually running some tests to discover the unknown?
    * [Anand] I don't want to get into the 'checks' debate. It is futile!

  


All I have understood is - you cannot just spend time looking at the requirements / specs and write down (in your mind / bullet points / story cards / some fancy ALM tool) your test cases / scenarios. 

  


That list is just a starting point of your journey of exploration and experimentation with the product-under-test. If you think that what you have identified is your actual scope of testing, then ALL THE BEST to you, your team and your product - because there are going to be so many opportunities you have missed out to make the product better and usable for the end-user. Unfortunately, lot of organisation still look for "regression" testing cycles - where (you think) you execute all the tests that were identified in a time long ago. However, everyone knows, it is best case / best effort, IF AT ALL, of actually following each and every step of that regression cycle. Such a waste of time and effort - when more meaningful testing could have been performed during that time.



  * Why is that exploratory tests are still considered suitable only for manual testing? How about automating exploratory tests using AI?
    * [Anand] What is the meaning of "exploration"?

As per a quick online search, this is what it means:

  


[![](/assets/img/blog/screen-shot-2018-07-23-at-2.33.27-pm.png)](</assets/img/blog/screen-shot-2018-07-23-at-2.33.27-pm.png>)

  


Now - how can you automate the unknown / unfamiliar? You can use tools to help figure out what is unknown / unfamiliar ... but once you know it, then it does not remain 'unknown'. I think buzzwords like AI and ML are tools to help bridge the gap in the known and the unknown. But we would still need to guide and use these tools and technologies to our advantage, to aid in our exploration.
