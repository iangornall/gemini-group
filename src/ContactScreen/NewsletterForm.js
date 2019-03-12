import React from 'react';
import submitMessage from '../shared/submitMessage';
import {withRouter} from 'react-router-dom';
import './NewsletterForm.css'
let NewsletterForm = ({history}) => (
  <div className="newsletter-form">
    <h2 className="newsletter-form-title">Newsletter</h2>
    <div className="newsletter-form-subtitle">
      <hr />
      <h3>Be the first to know about new listings!</h3>
      <hr />
    </div>
    <form onSubmit={submitMessage('https://secure.globiflow.com/catch/646l9rnwve539b9', history)}>
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
      <label>
        <div className="newsletter-form-label">Address</div>
        <textarea className="newsletter-form-input" name="address" rows="5" />
      </label>
      <input type="hidden" name="form" value="newsletter" />
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  </div>
);
export default withRouter(NewsletterForm);