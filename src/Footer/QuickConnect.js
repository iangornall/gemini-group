import React from 'react';
import submitMessage from '../shared/submitMessage';
import {withRouter} from 'react-router-dom';
let QuickConnect = ({history}) => (
  <div className="quick-connect">
    <h2 className="footer-title">Quick Connect</h2>
    <form onSubmit={submitMessage('https://secure.globiflow.com/catch/646l9rnwve539b9', history)} className="footer-form" >
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
        <textarea className="footer-input" name="message" rows="5" />
      </label>
      <input type="hidden" name="form" value="quick connect" />
      <div className="footer-submit"><button type="submit">Submit</button></div>
    </form>
  </div>
)

export default withRouter(QuickConnect);