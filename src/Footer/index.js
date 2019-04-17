import React from 'react';
import FooterMenu from './FooterMenu';
// import QuickConnect from './QuickConnect';
import FooterBottom from './FooterBottom';
import './index.css';
let Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <FooterMenu />
      <a href="https://www.bbb.org/us/ga/brookhaven/profile/real-estate-investing/gemini-group-atl-llc-0443-28052897" target="_blank"><img class="footer-img" src="./assets/bbb.png" alt="Better Business Bureau Accredited Business" /></a>
      <a href="https://nationalpropertyteam.com/" target="_blank"><img class="footer-img" src="./assets/nationalPropertyTeam.jpg" alt="National Property Team" /></a>
    </div>
    <hr />
    <FooterBottom />
  </footer>
);
export default Footer;