import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './index.css';
let NavBar = ({scrollY}) => (
  <nav className={`nav-bar${scrollY === 0 ? "" : " small-nav-bar"}`}>
    <Link className="nav-image" to="/"><img className="nav-image" alt="Gemini Group" src="assets/logo.png" /></Link>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/buy-a-home">Buy a Home</NavLink>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/sell-a-home">Sell a Home</NavLink>
    <NavLink className="nav-link" activeClassName="active-nav-link" to="/properties">Our Properties</NavLink>
  </nav>
);
export default NavBar;