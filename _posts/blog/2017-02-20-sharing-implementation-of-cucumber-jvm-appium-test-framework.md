---
layout: page
title: "Sharing implementation of cucumber-jvm - Appium test framework"
date: 2017-02-20 14:58:00 +0000
categories:
  - blog
tags:
  - "viu"
  - "cucumber-jvm"
  - "appium"
  - "android"
  - "testing"
  - "learning"
  - "test_automation"
  - "test_strategy"
  - "automation"
  - "vuclip"
  - "parallel"
  - "opensource"
  - "mobile_testing"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

I recently shared the [Features of my Android Test Automation Framework](<https://essenceoftesting.blogspot.com/2017/02/features-of-my-android-test-automation.html>) and also [the challenges, and, how we overcame those, to make the parallel test execution work well with Android 7.0](<https://essenceoftesting.blogspot.com/2017/02/features-of-my-android-test-automation.html>) devices as well.  
  
In this blog post, I will be sharing the details (including code) of the implementation. If you have not read my post on - [Features of my Android Test Automation Framework](<https://essenceoftesting.blogspot.com/2017/02/features-of-my-android-test-automation.html>) \- I highly recommend you read that first.  
  
  


##  Implementation Details

####  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOygDZWEyqsm4HCjFNgqMrV7RdBKoXayCRB3ws1wl1PHC1Y1XmRKdknciJxnyND2xNu_Y11nOqsiQWrJFuxI-lUJCFeeeFwneWaJ5WamQmgu_IqVGBkp4wogVn3iZOyfQ0hwfMG_5VlZ1a/s640/0.+Cucumber-JVM+-+Appium+Test+Automation+Framework.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOygDZWEyqsm4HCjFNgqMrV7RdBKoXayCRB3ws1wl1PHC1Y1XmRKdknciJxnyND2xNu_Y11nOqsiQWrJFuxI-lUJCFeeeFwneWaJ5WamQmgu_IqVGBkp4wogVn3iZOyfQ0hwfMG_5VlZ1a/s1600/0.+Cucumber-JVM+-+Appium+Test+Automation+Framework.png>)

###  Tech Stack Summary

To recap - here is the tech stack that we currently have:  


  * cucumber-jvm - v1.2.5
  * cucumber-reporting - v3.5.1
  * appium - v1.6.3
  * appium-java-client - v5.0.0-BETA2
  * appium-uiautomator2-driver - v0.2.3

  


###  1\. Configure Jenkins Node (in Jenkins Server)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWNdAsx-ZqodVkwFnORhMEf5cpOKuuDng8M4ENwsdEzrUqtcHcYkvtvSxLXqLTPJC8XJhbFr_CAYE-p0W6D-6lYfPETzzTSYevLPkq-X1qunBlIyj5AHRBdkzT-gT4PP4j5arSzj1TrrXd/s640/1.+Configure+Jenkins+Node.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWNdAsx-ZqodVkwFnORhMEf5cpOKuuDng8M4ENwsdEzrUqtcHcYkvtvSxLXqLTPJC8XJhbFr_CAYE-p0W6D-6lYfPETzzTSYevLPkq-X1qunBlIyj5AHRBdkzT-gT4PP4j5arSzj1TrrXd/s1600/1.+Configure+Jenkins+Node.png>)

  


  


  


  


  
We currently have 5 Jenkins Nodes setup as shown below.

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzHHmoJXYixkPlA5-eCrEK9DzAZrTb5x1HHKfYxg8r529U1apAxNvt_IG8Y7XyJNSCRkPniOo_t2r0hIDZX6xx6RwChWM1ztb0Cg-OrOXPg4CO77EG5errpa3JyeHdOaXkivEg8Vw4UaNA/s200/1.2+Jenkins-NodeNames.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzHHmoJXYixkPlA5-eCrEK9DzAZrTb5x1HHKfYxg8r529U1apAxNvt_IG8Y7XyJNSCRkPniOo_t2r0hIDZX6xx6RwChWM1ztb0Cg-OrOXPg4CO77EG5errpa3JyeHdOaXkivEg8Vw4UaNA/s1600/1.2+Jenkins-NodeNames.png>)

  


  


  


  


  


  


  


  


  


  


  


  


Each node is configured like this:

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3wq2w_8y23qw2t4hAwG9epv-Ef8NN8xfk6Dt0a0yG8ktKg9A0NeHzjaDk99lPnMZ1ys0VTW-KazjIxPF8LZKpsxWqH8w5JozXCluA_QBBS5b5lVu5l9J51PaiF6fQ-G7bwE6ERtJMQ6CF/s640/1.1+Jenkins-NodeConfiguration.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3wq2w_8y23qw2t4hAwG9epv-Ef8NN8xfk6Dt0a0yG8ktKg9A0NeHzjaDk99lPnMZ1ys0VTW-KazjIxPF8LZKpsxWqH8w5JozXCluA_QBBS5b5lVu5l9J51PaiF6fQ-G7bwE6ERtJMQ6CF/s1600/1.1+Jenkins-NodeConfiguration.png>)

  


  


  


  


  


  


  


  


  


  


  


###    


###    


###    


###    


###  2\. Setup Jenkins Job (in Jenkins Server)

Once the Nodes are setup, we can now configure the Jenkins Jobs. 

  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_iAm5CqjhRc19PSKwSVwOInAiMYTtJ9FqMEtqsJHZoxalDvuOBJ-5w2dKpMih4XpPY7m8fELUmuvQY4OeANa2sDYgrFWtHt-Z54FECYxRlunKC7dU4y9aAeW5ptFDruL8_fUpFZe544_o/s640/2.+Setup+Jenkins+Jobs.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_iAm5CqjhRc19PSKwSVwOInAiMYTtJ9FqMEtqsJHZoxalDvuOBJ-5w2dKpMih4XpPY7m8fELUmuvQY4OeANa2sDYgrFWtHt-Z54FECYxRlunKC7dU4y9aAeW5ptFDruL8_fUpFZe544_o/s1600/2.+Setup+Jenkins+Jobs.png>)

  
[  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [  
](<https://www.blogger.com/null>) [We have setup the following jobs in Jenkins for our test executions.](<https://www.blogger.com/null>)  


  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUVy1FlxPqzQXSFJXgHy6j2D7s-s_Gz_3ghshPxGZNWEWVQDB67s1Yu-FDpfizx9LaFDSVvRew0ZWtoxUw-UnQ__dKSlJ2GCdIJYsyf5iTWf2zQeBRxgDqjXqNe5Xpp9-aqe12IhPYyfii/s200/2.1+Jenkins-JobNames.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUVy1FlxPqzQXSFJXgHy6j2D7s-s_Gz_3ghshPxGZNWEWVQDB67s1Yu-FDpfizx9LaFDSVvRew0ZWtoxUw-UnQ__dKSlJ2GCdIJYsyf5iTWf2zQeBRxgDqjXqNe5Xpp9-aqe12IhPYyfii/s1600/2.1+Jenkins-JobNames.png>)  


  


  


  


  


  


  


  


  


  


  


  


Each job is configured as a Jenkins Pipeline Project and we use the the [Jenkins file available here](<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/2%20-%20Setup%20Jenkins%20Jobs/2.2%20Jenkinsfile>) (<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/2%20-%20Setup%20Jenkins%20Jobs/2.2%20Jenkinsfile>) as a sample from git to configure what the job is supposed to do.

###    


###  3\. Setup Jenkins Agent

Once the Jenkins Nodes and Jenkins Jobs are configured, we now need to get the Jenkins Agents itself setup and configured to be able to service the requests from the Jenkins server.

  


![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSsrqELCxhodskgniEZ_IGOBNBzov2p1KmWyDqyP6zPxaACPJ2EmrjYR2zcIiCQQ45L5lRiH9ndWxDqyLuxjCtMOEhF3nQGPRnV9pvVMfr0-pFPdRsPvadn-nsMOcTOJB9B5yGFvfzhJq5/s640/3.+Setup+Jenkins+Agent.png)

  


  


  
  
  
  
  
  
  
  
  
  
  
We use the JNLP way to connect the Jenkins Slave to the Jenkins server. For this, we have a template .sh script, which we need to copy and update 2 values in it. This is needed for each new Jenkins Node that we connect.  
  
The template .sh script can be found [here](<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/3%20-%20Setup%20Jenkins%20Agent/3.1%20start-e2e-moto.sh>) (<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/3%20-%20Setup%20Jenkins%20Agent/3.1%20start-e2e-moto.sh>).  
  
Now, our Jenkins setup is done. But a big piece is still missing.   
  
In order to run our tests on the Agent, we need some basic software to be installed. To do this, we created a shell script, that will help provision the machine. This is required to be done just once - but we do plan to have multiple Mac Mini host machines that will run various number of Jenkins agents - so the script will help keep same software (including version) on our machines - which means the same test execution environment.  
  
This shell script can be found [here](<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/3%20-%20Setup%20Jenkins%20Agent/3.2%20JenkinsAgentMachineFirstTimeSetup.sh>) \- (<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/3%20-%20Setup%20Jenkins%20Agent/3.2%20JenkinsAgentMachineFirstTimeSetup.sh>)  
  
  


###  4\. Manage Test Infrastructure & Test Execution

By this stage, our Jenkins Server, Jenkins Agent setup is done, including the software required to run the tests. Next thing is now at the Test Framework level.  
  
  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOeqokRZ1Sd8WBpVZwPVNyaeHlaL1Ecb4EjP5chm7J-tRTfLOGIWN8lN3kVc7NXDtr1pbFh71BV_lErnhEElFC7tYtRpoNu3bPPO31HAQTkUp5FDKBxAyE7RG-XcwwJR2l4A01t1CfBhVQ/s640/4.+Manage+Test+Infrastructure+%2526+Test+Execution.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOeqokRZ1Sd8WBpVZwPVNyaeHlaL1Ecb4EjP5chm7J-tRTfLOGIWN8lN3kVc7NXDtr1pbFh71BV_lErnhEElFC7tYtRpoNu3bPPO31HAQTkUp5FDKBxAyE7RG-XcwwJR2l4A01t1CfBhVQ/s1600/4.+Manage+Test+Infrastructure+%2526+Test+Execution.png>)

  


  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
Our build tool is gradle. All infrastructure related work is handled via this build.gradle file.   
  
Before we get into the details of the gradle file, it is important to understand what the code structure is.  
  
  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibNTRTA4vXnILXdBkJWdTB2otVwIHuFD6YH3y5l1lv85JH6oUs9CD1WzYPGaGavknAwzZGzPGApcRda3PEBlIhZa1TQAGVy81UDmFE7ae0ryV5BGElWbRcd67Jx3DuXmMwSV1W3_g2AfCe/s400/4.1+CodeStructure.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibNTRTA4vXnILXdBkJWdTB2otVwIHuFD6YH3y5l1lv85JH6oUs9CD1WzYPGaGavknAwzZGzPGApcRda3PEBlIhZa1TQAGVy81UDmFE7ae0ryV5BGElWbRcd67Jx3DuXmMwSV1W3_g2AfCe/s1600/4.1+CodeStructure.png>)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
Via groovy / gradle, we managed to solve the complexity of:  
  


  * Finding matching devices based on the CONNECTED_DEVICE_IDS
  * Downloading the apk file from where ever it is available
    * This is done just once per test run - regardless of how many devices the test is going to run on
    * The URL to download is passed as an environment variable - APP_URL
    * For local testing, you can give a local absolute path to the apk file via the APP_PATH environment variable instead of specifying APP_URL
  * Finding the list of scenarios to be run (based on the cucumber tags specified via the environment variable - '_run_ '
  * Managing start / stop of Appium Servers
  * Cleaning up the device before test runs
  * Executing Cucumber scenarios in parallel
  * Building consolidated reports locally (cucumber-reports) - IF not using the Jenkins cucumber-reports plugin



The gradle file with all this configuration is available [here](<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/4%20-%20Manage%20Test%20Infrastructure%20and%20Test%20Execution/4.2%20build.gradle>) (<https://github.com/anandbagmar/cucumber-jvm-appium-infra/blob/master/4%20-%20Manage%20Test%20Infrastructure%20and%20Test%20Execution/4.2%20build.gradle>).

  
  
  


###  5\. Run Tests

Last, step in this process - is to manage the Android Driver. We use the Cucumber-jvm's @Before and @After hooks to set the right capabilities for instantiating the AndroidDriver, and also stopping the same after test execution is complete.  
  
  


[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5wiy3HlwbAqglnNDwH5A9XQAxZafTo8WO2YSTDS4uwPZQn7JuZFpMe-422SRkZDYqaS-1xqChK65vKXYG0sZZy6oazZr7SVRzKO46Mfg_FBZGH-xDIsUHLA5nwpl8kXEduogj5aubJfJp/s320/5.+Run+Tests.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5wiy3HlwbAqglnNDwH5A9XQAxZafTo8WO2YSTDS4uwPZQn7JuZFpMe-422SRkZDYqaS-1xqChK65vKXYG0sZZy6oazZr7SVRzKO46Mfg_FBZGH-xDIsUHLA5nwpl8kXEduogj5aubJfJp/s1600/5.+Run+Tests.png>)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
These helper files can be found [here](<https://github.com/anandbagmar/cucumber-jvm-appium-infra/tree/master/5%20-%20Run%20Tests>) (<https://github.com/anandbagmar/cucumber-jvm-appium-infra/tree/master/5%20-%20Run%20Tests>).  
  
  


##  Sample Code

All the sample code can be found from my github repository [cucumber-jvm-appium-infra](<http://cucumber-jvm-appium-infra/>) - <https://github.com/anandbagmar/cucumber-jvm-appium-infra>  
  
  


##  _Happy Testing!_

_  
_

_  
_
