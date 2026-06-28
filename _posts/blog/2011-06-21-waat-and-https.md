---
layout: page
title: "WAAT and HTTPS"
date: 2011-06-21 06:39:00 +0000
categories:
  - blog
tags:
  - "waat"
author: Anand Bagmar
show_meta: true
---

While most sites use http to report tags to the web analytic tool, there are some cases where http is disabled and all traffic is using https only.

  


In such cases, there may be a problem in using the generic solution provided by WAAT.

  


I did some research, analysis and experimentation and here are my findings:

  1. jpcap captures raw packets. It does not differentiate about http / https
  2. There is no problem in WAAT. All it does it matches packets based on patterns you specify in the tests.
  3. Since the requests are https based, WAAT is not able to match the packets, unless you specify encrypted packet identifiers and encrypted data in the xml file. firebug / fiddler / ethereal / wireshark / charles / burp / etc. does something extra in this regard to decode the packet information and show the raw content in the browser / tool.



  
So the question is what can be done next?  


  1. If it is possible for you to get the configuration in the test environments changed to have the web analytics request sent out on http (maybe along with https) request, that can resolve the issue. Once in a while you can then verify manually if requests are going out on https.
  2. You can use Omniture Debugger - but the limitation in your case is that it will be available for Omniture only and not the other web analytic tools.
  3. You can extend the HttpSniffer class (,say HttpsSniffer), and provide implementation to decode the captured packets before doing the validation. However, note that this will be a expensive operation as you will be decoding all the captured packets on the network interfaces on your machine and the packet(s) of your interest will be fractional of those captured.
