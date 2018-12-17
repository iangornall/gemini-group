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
      <div class="contact-text">If you would like to be on Pre Property Solution’s list to get new property updates before the public knows please fill out your information below</div>
      <div class="contact-information">
        <strong>Fax:</strong> (855) 667-7336<br />
        <strong>Office Location:</strong> 580 Thames St Newport, RI 02840<br />
        <strong>Mailing address:</strong> PO Box 626 Newport, RI 02840<br />
        <strong>Email:</strong> contactus@prepropertysolutions.com<br />
      </div>
    </div>
    <div class="two-column">
      <NewsletterForm />
      <ContactForm />
    </div>
  </div>
);
export default ContactScreen;