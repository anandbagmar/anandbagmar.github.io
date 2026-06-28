---
layout: page
title: "TTA - closer to becoming unified dashboard for Test Trends and Status"
date: 2013-08-31 02:42:00 +0000
categories:
  - blog
tags:
  - "tta"
  - "innovation"
  - "visualization"
  - "automation"
  - "thoughtworks"
  - "punedashboard"
  - "testing"
  - "opensource"
redirect_from:
  - "/blog/tta-closer-to-becoming-unified/"
author: Anand Bagmar
show_meta: true
---

[Test Trend Analyzer (TTA)](<http://essenceoftesting.blogspot.com/2013/03/introducing-test-trend-analyzer-tta.html>), went live again today !!! We are now at version 0.5.4.

  


In the past week we have made a bunch of improvements and added new features - Integrating External Dashboard , which takes TTA closer towards being the central dashboard for testing status across the organization.

 

There are a couple of projects within ThoughtWorks using this, and also some other organizations.

  


Here is the list of new Features:

  * I**ntegration of external dashboards** (add from **/admin** page, see integration on **/home** page) - this allows one to **integrate different existing dashboards into TTA** \- to make it a one stop place for seeing all Testing related information. Example: You can integrate your defect reports from Mingle / Jira / etc., or, you can also integrate your specific Continuous Integration (CI) dashboard from Go / Jenkins / Hudson / Bamboo / etc.**  
**
  * **Compare test runs (/compare_runs)** \- to **compare specific test runs** \--- 
    * what are the common failures, 
    * what are the unique failures, 
    * what failed on date 1, but passed on date 2
    * what failed on date 2, but passed on date 1
  * **TTA Statistics Page (/stats)** \- to know **usage of TTA** by different projects / teams in your organization
  * Fixes + minor UI modification

Features available from some time:

  * **Test Pyramid view (/pyramid)** \- to see how your project's automation effort aligns with the [**Test Automation philosophy**](<http://martinfowler.com/bliki/TestPyramid.html>)
  * **Comparative Analysis view (comparative_analysis)** \- to see the **trend of your test automation results** over a period of time, and if any patterns emerge
  * **Failure Analysis view (/defect_analysis)** \- to make better meaning of the test failures, and help you **prioritize which failures should be fixed first.**
  * **Upload Test Run Data manually (/upload)** \- to **manually upload test data** in case if you have not uploaded test data automatically to TTA, but still want to use TTA

 

More information about features, how to use TTA, etc. can be found on [this blog](<http://essenceoftesting.blogspot.in/search/label/tta>), [TTA-github](<https://github.com/anandbagmar/tta>), [TTA-github-wiki](<https://github.com/anandbagmar/tta/wiki>), or by [contacting me](<mailto:abagmar@gmail.com>).
