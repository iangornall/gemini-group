import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
let ContactBar = () => (
  <div className="contact-bar">
    <a className="link" href="tel:800-607-2942">800-607-2942</a>
    <Link className="link" to="/contact">Contact</Link>
  </div>
);
export default ContactBar;