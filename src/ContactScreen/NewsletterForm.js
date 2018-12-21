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
    <form onSubmit={submitMessage('https://script.google.com/macros/s/AKfycbyW6Xby5pPUjTmF8SZM_cOHtnaFIntUlRrcCZ1TVov4eTvD3PDZ/exec', history)}>
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
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  </div>
);
export default withRouter(NewsletterForm);