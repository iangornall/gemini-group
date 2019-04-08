import React from 'react';
import Splash from '../shared/Splash';
import Button from '../shared/Button';
import './index.css';
let ContactScreen = ({scrollY}) => (
  <div class="contact">
    <Splash 
      scrollY={scrollY} 
      background="banner3.jpg"
    />
    <div class="contact-container">
      <div class="contact-text">If you would like to be contacted by Gemini Group as a buyer or seller, please register below.</div>
      <div class="contact-information">
        <strong>Phone:</strong>(800) 607-2942<br />
        <strong>Email:</strong> info@geminigroupatl.com<br />
      </div>
    </div>
    <p style={{textAlign: 'center'} }><Button href='/buyerRegistration' text='Buyer Registration' /></p>
    <p style={{textAlign: 'center'} }><Button href='/sellerRegistration' text='Seller Registration' /></p>
  </div>
);
export default ContactScreen;