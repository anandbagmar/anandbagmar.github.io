---
layout: page
title: "Keeping your test suites \"green\""
date: 2012-05-17 05:12:00 +0000
categories:
  - blog
author: Anand Bagmar
show_meta: true
---

My article on **[Keeping your test suites "green"](<http://qa.siliconindia.com/qa-expert/Keeping-Your-Test-Suites-Green-eid-202.html>)** has been published in SiliconIndia's QA City. Looking forward for your comments.  
  
  
Same article quoted below:  
  
  
In days where we are talking and thinking more and more on how to achieve "[_**Continuous Delivery**_](<http://continuous-delivery.thoughtworks.com/>) " in our software projects, Test Automation plays an even more crucial role.   
  
To reap the benefits of test automation, you want to run it as often as possible. However, just putting your test automation jobs in some [_**CI**_](<http://martinfowler.com/articles/continuousIntegration.html>)  tool like Hudson / Jenkins / GO / etc., and have it run every so often is of little value, unless, the tests are passing, or the failures are identified and analyzed immediately, AND, proper action is taken based on the failures.   
  
If the number of failures / jobs are quite a few, then the test failure analysis and test maintenance activity takes a lot of time. Also, as a result, the development / product / project team may start losing confidence in the automation suite because the CI always shows the jobs in **red**. Eventually, test automation may lose priority and value, which is not a good sign.   
  
Before I explain a technique that may help keep your test suites "**green** " - and reduce the test failure analysis and maintenance time, let us understand why we get into this problem.  
  
_I have seen the functional tests failing for 3 main reasons:_  
  
1\. The product has undergone some "unexpected change". As a result, the test has caught a regression bug as the product has changed when it was not supposed to.  
2\. The product has undergone some "expected" change and the test has not yet been updated to keep up with the new functionality.  
3\. There is an intermittent issue - maybe related to environment / database / browser / network / 3rd party integration / etc.  
Regardless of the reason, if there is even 1 failure in your CI job, it means the whole job fails and turns "**red** ".   
  
This is painful and more importantly, this does not provide the correct picture of the health of the system.  
  
To determine the health of the system, we now need to:  
  
• Spend dedicated time per test run to ensure the failures in the jobs are analyzed and accounted for,  
• In case of genuine failures, defects are reported against the product, or,  
• In case of test failures based on expected product changes, update the tests to be in accordance with the new functionality, or,  
• In case of intermittent failures, rerun the test again to confirm the failure was indeed due to an intermittent issue.  
  
This is not a trivial task to keep doing on every test run. So can something be done to keep your test suites green, and provide a true representation of what the health of the product under test?  
  
Here is a strategy, which will reduce the manual analysis of your test runs, and, provide a better understanding into how the product conforms to what its supposed to do:  
_  
Lets make some assumptions:_  
  
1\. Say, you have 5 jobs of various types in your CI  
2\. Each job uses a specific tag / annotation to run specific types of tests.  
  
_Now here is what you do:_  
  
1\. Create appropriate commands / tasks in your test framework to execute tests with a new "**_failing_tests_** " tag / annotation.  
2\. Create a new job in CI - "**_Failing Tests_** " and point it to run the tests with tag / annotation "**_failing_tests_** ".  
3\. Analyze all your existing / earlier jobs, and for all tests that have failed for any of the reasons mentioned earlier, comment out the original tag / annotation, and instead, add the tag / annotation "**_failing_tests_** " to such tests.  
  
_Run all the tests again and the now the following should be seen:_  
  
• The above steps have ensured the tests that pass, will continue to pass, with the added benefit of making the CI job **green**.   
• The tests that fail, will continue to fail - but in another, special "**Failing Tests** " CI job.   
• As a result, all the original 5 jobs you had in CI, will now turn **GREEN**  and you just need to monitor the "Failing Tests" job.  
  
This means now that your effort of test analysis has been reduced from 5 jobs to just 1 job.   
  
When a failing test passes, replace the "**_failing_tests_** " tag with the original tag back to it.  
  
If you want to categorize the failing tests in a better way, you could potentially create separate category "Failing Tests" jobs like:  
  
• "Failing Tests - Open Defects"  
• "Failing Tests - Test updates needed"  
• "Failing Tests - Intermittent / environment issues"  
  
Regardless of your approach, the solution should be simple to implement, and you should be saving time at the end of the day, to focus on more important testing activities, instead of just analyzing the test failures.  
  
_One of my colleagues asked:  
**"What if a smoke test is failing? Should we move that also to a Failing Tests job?"**_  
_  
**My answer was:  **_  
  
"As with most things, you cannot apply one rule for everything. In this case also, you should not apply one strategy to all problems. As each problem is different in nature, you need to create a correct strategy that solves the problem in the best possible way.  
  
That said, fundamentally, the smoke suite should always be "green". If there is any reason it is not, then we need to stop everything else, and make sure this is a passing test suite.  
  
However, if you have various jobs representing the smoke suite, then you could potentially create a "Smoke - Failing Suite" on the above mentioned lines IF that helps reduce time wasted in test result analysis and provides the correct product health representation quickly, and consistently."  
  
**_To summarize:_**  
  
• Create a failing tests CI job and run all the failing tests as part of this job  
• All existing CI jobs should turn "green"  
• Monitor the failing tests and fix / update them as necessary  
• If any of the passing tests fail at any point, first move them to the "Failing Tests" job to ensure the other jobs remain "green"  
• When a failing test passes, move that test back from the "Failing Tests" job to the original job.
