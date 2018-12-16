import React from 'react';
import Button from '../shared/Button';
let QuickConnect = () => (
  <div className="quick-connect">
    <h2 className="footer-title">Quick Connect</h2>
    <form className="footer-form">
      <label className="footer-label">First Name: 
        <input className="footer-input" type="text" name="first-name" placeholder="First Name" />
      </label>
      <label className="footer-label">Last Name: 
        <input className="footer-input" type="text" name="last-name" placeholder="Last Name" />
      </label>
      <label className="footer-label">Email: 
        <input className="footer-input" type="email" name="email" placeholder="Email" />
      </label>
      <label className="footer-label">Message: 
        <input className="footer-input" type="email" name="message" placeholder="Message" />
      </label>
      <Button text="Submit" />
    </form>
  </div>
)

export default QuickConnect;