import React from 'react';
import Button from '../shared/Button';
import './NewsletterForm.css'
let NewsletterForm = () => (
  <div className="newsletter-form">
    <h2 className="newsletter-form-title">Newsletter</h2>
    <div className="newsletter-form-subtitle">
      <hr />
      <h3>Be the first to know about new listings!</h3>
      <hr />
    </div>
    <form action="https://formspree.io/matney@geminigroupatl.com" method="POST">
      <label>
        <div className="newsletter-form-label">First Name</div>
        <input className="newsletter-form-input" type="text" name="first-name" />
      </label>
      <label>
        <div className="newsletter-form-label">Last Name</div>
        <input className="newsletter-form-input" type="text" name="last-name" />
      </label>
      <label>
        <div className="newsletter-form-label">Email</div>
        <input className="newsletter-form-input" type="email" name="email" />
      </label>
      <label>
        <div className="newsletter-form-label">Phone Number</div>
        <input className="newsletter-form-input" type="number" name="phone" />
      </label>
      <Button>Sign Up</Button>
    </form>
  </div>
);
export default NewsletterForm;