---
layout: page
title: "How to handle Select certificate popup from Chrome using Selenium WebDriver?"
date: 2022-03-25 04:17:00 +0000
categories:
  - blog
tags:
  - "automation"
  - "capabilities"
  - "selenium"
  - "chrome"
  - "certificate-error"
  - "firefox"
  - "browser"
  - "opensource"
  - "webdriver"
  - "test_automation"
  - "automation_framework"
author: Anand Bagmar
show_meta: true
---

For one of the applications, when I run some Selenium WebDriver tests. I see a **Select a certificate** popup. I am not able to handle this, and hence my test fails. 

Has anyone been able to handle this popup, or rather, avoid this popup being shown?

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggFUWbpFCUsSprHUysbq5sPrw_kPj7xS27xgP2_S9I2mSx2vBYTVPIy2a5POvJ89Aw5obnIk8FjfwF4EVrJBZ0UdDYOexR14pkL1CtCMAVcsGcLX9qHt_X48L7rE-UpwKWVJOQN6GM4GZFZpPzCb77UQDR1mb5NPVG99XSY5asvEDlLtkAmi7EFbHSGg/w640-h400/CertificatePopup.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggFUWbpFCUsSprHUysbq5sPrw_kPj7xS27xgP2_S9I2mSx2vBYTVPIy2a5POvJ89Aw5obnIk8FjfwF4EVrJBZ0UdDYOexR14pkL1CtCMAVcsGcLX9qHt_X48L7rE-UpwKWVJOQN6GM4GZFZpPzCb77UQDR1mb5NPVG99XSY5asvEDlLtkAmi7EFbHSGg/s4096/CertificatePopup.png>)

  


If I manually select a certificate and click OK, I am prompted for my mac credentials:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifVbDuXvSxIIo6raUkj5dYCo5SWYgqpj9BHvX9YWK56NUxheHmjFGwSngMeWk4b1777c21w-IbXT78cu7kZUqMHGMM4ViEQHyewIZCNPq_QbNb_smrFTXawDHmP-qPcPVy2lQdJ5UoOnYf8AAsKwTMFWEDY_CzMyFCHWsBNH0L2nptSdV-0krttPJLBQ/w400-h189/GoogleChromeWantsToAccessKeychain.png)](<https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifVbDuXvSxIIo6raUkj5dYCo5SWYgqpj9BHvX9YWK56NUxheHmjFGwSngMeWk4b1777c21w-IbXT78cu7kZUqMHGMM4ViEQHyewIZCNPq_QbNb_smrFTXawDHmP-qPcPVy2lQdJ5UoOnYf8AAsKwTMFWEDY_CzMyFCHWsBNH0L2nptSdV-0krttPJLBQ/s880/GoogleChromeWantsToAccessKeychain.png>)

  


Thanks in advance!
