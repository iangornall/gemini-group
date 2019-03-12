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
    <form onSubmit={submitMessage('https://secure.globiflow.com/catch/646l9rnwve539b9', history)}>
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
      <input type="hidden" name="form" value="contact" />
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  </div>
);
export default withRouter(ContactForm);