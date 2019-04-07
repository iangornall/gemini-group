import React from 'react';
import FooterMenu from './FooterMenu';
// import QuickConnect from './QuickConnect';
import FooterBottom from './FooterBottom';
import './index.css';
let Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <FooterMenu />
    </div>
    <hr />
    <FooterBottom />
  </footer>
);
export default Footer;