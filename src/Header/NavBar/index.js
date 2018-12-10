import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
let NavBar = () => (
  <nav class="nav-bar">
    <span className="nav-link">Logo</span>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/buy-a-home">Buy a Home</NavLink>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/sell-a-home">Sell a Home</NavLink>
  </nav>
);
export default NavBar;