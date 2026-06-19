---
layout              : page
title               : "Get in touch with me?"
teaser              : "Use the contact form."
permalink           : "/contact/"
header:
    title: Let's Collaborate!
    image_fullwidth: "header-bg.jpeg"
---

<form
  action="https://formspree.io/f/xpzbwqby"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- Honeypot: hidden from humans; bots fill it and Formspree discards the submission -->
  <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;">
  <button type="submit">Send</button>
</form>