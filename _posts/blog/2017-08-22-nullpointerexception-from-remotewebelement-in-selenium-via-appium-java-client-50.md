---
layout: page
title: "NullPointerException from RemoteWebElement in Selenium via Appium Java-Client 5.0.0-BETA9"
date: 2017-08-22 15:33:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "viu"
  - "appium"
  - "android"
  - "mobile"
  - "madlab"
  - "ios"
  - "mobile_testing"
  - "test_automation"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

As you may be aware from my previous posts about [MAD-LAB](<https://essenceoftesting.blogspot.in/search/label/madlab>), we are using Appium, with Java-Client 5.0.0-BETA9 to automate user journeys of the VIU app on Android & iOS devices.

  


Last week, suddenly, while in the middle of doing another round of significant changes to support more capability in the test framework for the Android app, the tests started failing. All infrastructure pieces were working fine, but when the App launched, I started getting this error:

  


ERROR AndroidLanguageScreen:16 - [5203bb1ae2771425] - ERROR in clicking on androidElement - 'By.id: tv_one' - exception - 'null'

java.lang.NullPointerException

  


The code in question was - driver.findByElement(myElementLocator).click()

  


On further investigation, it seemed that there was a problem in doing any interaction with the app, not just "click".

  


After lot of racking my head, asked a colleague to see if the problem reproduces on her machine. As she had not run the tests on her machine since a few days, as soon as she ran the test execution command, soon the same error happened on her machine as well. Interestingly though, we observed the following trace in her machine's console logs:

  


\------------

Packages that were updated:

  


  


Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-support/3.5.1/selenium-support-3.5.1.pom

Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-api/3.5.1/selenium-api-3.5.1.pom

Download https://repo1.maven.org/maven2/com/google/guava/guava/23.0/guava-23.0.pom

Download https://repo1.maven.org/maven2/com/google/guava/guava-parent/23.0/guava-parent-23.0.pom

Download https://repo1.maven.org/maven2/com/google/code/findbugs/jsr305/1.3.9/jsr305-1.3.9.pom

Download https://repo1.maven.org/maven2/com/google/errorprone/error_prone_annotations/2.0.18/error_prone_annotations-2.0.18.pom

Download https://repo1.maven.org/maven2/com/google/errorprone/error_prone_parent/2.0.18/error_prone_parent-2.0.18.pom

Download https://repo1.maven.org/maven2/com/google/j2objc/j2objc-annotations/1.1/j2objc-annotations-1.1.pom

Download https://repo1.maven.org/maven2/org/codehaus/mojo/animal-sniffer-annotations/1.14/animal-sniffer-annotations-1.14.pom

Download https://repo1.maven.org/maven2/org/codehaus/mojo/animal-sniffer-parent/1.14/animal-sniffer-parent-1.14.pom

Download https://repo1.maven.org/maven2/org/codehaus/mojo/mojo-parent/34/mojo-parent-34.pom

Download https://repo1.maven.org/maven2/org/codehaus/codehaus-parent/4/codehaus-parent-4.pom

Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-remote-driver/3.5.1/selenium-remote-driver-3.5.1.pom

Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-support/3.5.1/selenium-support-3.5.1.jar

Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-api/3.5.1/selenium-api-3.5.1.jar

Download https://repo1.maven.org/maven2/com/google/guava/guava/23.0/guava-23.0.jar

Download https://repo1.maven.org/maven2/com/google/code/findbugs/jsr305/1.3.9/jsr305-1.3.9.jar

Download https://repo1.maven.org/maven2/com/google/errorprone/error_prone_annotations/2.0.18/error_prone_annotations-2.0.18.jar

Download https://repo1.maven.org/maven2/com/google/j2objc/j2objc-annotations/1.1/j2objc-annotations-1.1.jar

Download https://repo1.maven.org/maven2/org/codehaus/mojo/animal-sniffer-annotations/1.14/animal-sniffer-annotations-1.14.jar

Download https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-remote-driver/3.5.1/selenium-remote-driver-3.5.1.jar

:buildSrc:compileJava UP-TO-DATE

\------------

  


This trace meant that something had changed in the dependencies (automatically), and gradle was fetching newer versions for the same.

  


This was a smoking gun we were looking for. On investigation for selenium 3.5.1 with appium java-client 5.0.0-BETA9, it quickly showed only 1 hit in search result - which was a bug reported on Java-Client 5.0.0-BETA9 - [Warning: Selenium 3.5.1 breaks java client 5.0.0-BETA9](<https://github.com/appium/java-client/issues/696>)

  


The solution / workaround was also already provided by [QAutomatron](<https://github.com/QAutomatron>)

  

    
    
    configurations.all {
        resolutionStrategy {
            force 'org.seleniumhq.selenium:selenium-support:3.4.0',
                    'org.seleniumhq.selenium:selenium-api:3.4.0'
        }
    }

  
This resolved our issue for now.
