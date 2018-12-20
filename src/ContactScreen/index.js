import React from 'react';
import Splash from '../shared/Splash'
import NewsletterForm from './NewsletterForm';
import ContactForm from '../shared/ContactForm';
import './index.css';
let ContactScreen = ({scrollY}) => (
  <div class="contact">
    <Splash 
      scrollY={scrollY} 
      background="banner3.jpg"
    />
    <div class="contact-container">
      <div class="contact-text">If you would like to be on Gemini Group’s list to get new property updates before the public knows please fill out your information below</div>
      <div class="contact-information">
        <strong>Phone:</strong>(800) 607-2942<br />
        <strong>Email:</strong> info@geminigroupatl.com<br />
      </div>
    </div>
    <div class="two-column">
      <NewsletterForm />
      <ContactForm />
    </div>
  </div>
);
export default ContactScreen;