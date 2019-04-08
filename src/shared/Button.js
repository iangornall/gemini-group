import React from 'react';
import {Link} from 'react-router-dom'
import './Button.css';
let Button = ({children, text, color, href}) => (
  (!href || href.includes('http')) ?
  <a className="button" href={href} style={{background: color}} target="_blank">
      {text}
      {children}
  </a> :
  <Link to={href} className="button" style={{background: color}}>
    {text}
    {children}
  </Link>
)
export default Button;