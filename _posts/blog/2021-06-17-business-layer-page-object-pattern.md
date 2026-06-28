---
layout: page
title: "Business-Layer Page-Object Pattern"
date: 2021-06-17 07:17:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "design_pattern"
  - "page-object-pattern"
  - "test_automation"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

## Business-Layer Page-Object Pattern for Functional / System / end-2-end Test Automation  


  1. Tests should talk business language
  2. The test is deterministic, for a specific scenario. The test implementation is an orchestration of corresponding business operations
  3. Business layer is an abstraction layer between the test intent & page objects
  4. Implementation of business layer method is essentially an orchestration of other business operations, or for the granular business operation, an orchestration of page objects
  5. The business layer method does the assertions of expectations
  6. There should be no assertions in page objects
  7. Each operation (in business or page object) being successful means there are a defined number of methods / operations the product can now do (as you are driving the product under test to do your bidding)
  8. Hence, to #7, each operation can have one 1 valid page / business object as its return type



  
See the sample tests implemented in [teswiz](<https://github.com/znsio/teswiz>) for an example of Business-Layer Page-Object pattern implementation.
