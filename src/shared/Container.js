import React from 'react';
import './Container.css';
let Container = ({children, padding, margin}) => (
  <div style={{padding: padding || '1em 10%', margin: margin || 0}}>
      {children}
  </div>
)
export default Container;