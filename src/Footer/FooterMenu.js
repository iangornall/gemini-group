import React from 'react';
import {Link} from 'react-router-dom';
let FooterMenu = () => (
  <div className="footer-menu">
    <h2 className="footer-title">Main Menu</h2>
    <Link className="footer-link" to="/">Home</Link>
    <Link className="footer-link" to="/buy-a-home">Buy a Home</Link>
    <Link className="footer-link" to="/sell-a-home">Sell a Home</Link>
    <Link className="footer-link" to="/contact">Contact</Link>
  </div>
);
export default FooterMenu;