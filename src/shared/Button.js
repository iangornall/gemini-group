import React from 'react';
import './Button.css';
let Button = ({children, text}) => (
  <a className="button">
      {text}
      {children}
  </a>
)
export default Button;