import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
let NavBar = ({scrollY}) => (
  <nav className={`nav-bar${scrollY === 0 ? "" : " small-nav-bar"}`}>
    <img className="nav-image" src="assets/logo.png" />
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/buy-a-home">Buy a Home</NavLink>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/sell-a-home">Sell a Home</NavLink>
  </nav>
);
export default NavBar;