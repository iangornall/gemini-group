import React from 'react';
import ContactBar from './ContactBar';
import NavBar from './NavBar';
import './index.css';
let Header = ({scrollY}) => (
  <header className="header">
    <ContactBar />
    <NavBar scrollY={scrollY} />
  </header>
)
export default Header;