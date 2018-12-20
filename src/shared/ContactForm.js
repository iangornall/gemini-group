import React from 'react';
import Button from '../shared/Button';
import './ContactForm.css'
let ContactForm = () => (
  <div className="contact-form">
    <h2 className="contact-form-title">Questions?</h2>
    <div className="contact-form-subtitle">
      <hr />
      <h3>Get in Touch!</h3>
      <hr />
    </div>
    <form action="https://formspree.io/matney@geminigroupatl.com" method="POST">
      <label>
        <div className="contact-form-label">First Name</div>
        <input className="contact-form-input" type="text" name="first-name" />
      </label>
      <label>
        <div className="contact-form-label">Last Name</div>
        <input className="contact-form-input" type="text" name="last-name" />
      </label>
      <label>
        <div className="contact-form-label">Email</div>
        <input className="contact-form-input" type="email" name="email" />
      </label>
      <label>
        <div className="contact-form-label">Subject</div>
        <input className="contact-form-input" type="text" name="subject" />
      </label>
      <label>
        <div className="contact-form-label">Message</div>
        <textarea className="contact-form-input" name="subject" rows="5" />
      </label>
      <Button>Submit</Button>
    </form>
  </div>
);
export default ContactForm;