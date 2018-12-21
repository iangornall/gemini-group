import React from 'react';
import submitMessage from '../shared/submitMessage';
import './ContactForm.css';
import {withRouter} from 'react-router-dom';
let ContactForm = ({history}) => (
  <div className="contact-form">
    <h2 className="contact-form-title">Questions?</h2>
    <div className="contact-form-subtitle">
      <hr />
      <h3>Get in Touch!</h3>
      <hr />
    </div>
    <form onSubmit={submitMessage('https://script.google.com/macros/s/AKfycbwTIRMnb6BXCjPepHShgEHB7j0mJ_GHiML1-Iz6KR_pCJQ1Nid4/exec', history)}>
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
        <div className="contact-form-label">Message</div>
        <textarea className="contact-form-input" name="message" rows="5" />
      </label>
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  </div>
);
export default withRouter(ContactForm);