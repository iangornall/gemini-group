import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
let ContactBar = () => (
  <div className="contact-bar">
    <a className="link" href="tel:555-555-5555">555-555-5555</a>
    <Link className="link" to="/contact">Contact</Link>
  </div>
);
export default ContactBar;