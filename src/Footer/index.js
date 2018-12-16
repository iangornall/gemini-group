import React from 'react';
import FooterMenu from './FooterMenu';
import QuickConnect from './QuickConnect';
import FooterBottom from './FooterBottom';
import './index.css';
let Footer = () => (
  <footer class="footer">
    <div class="footer-columns">
      <FooterMenu />
      <QuickConnect />
    </div>
    <hr />
    <FooterBottom />
  </footer>
);
export default Footer;