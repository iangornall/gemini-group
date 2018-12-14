import React from 'react';
import './Button.css';
let Button = ({children, text, color}) => (
  <a className="button" style={{background: color}}>
      {text}
      {children}
  </a>
)
export default Button;