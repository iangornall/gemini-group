import React from 'react';
import './Splash.css';
let Splash = ({scrollY}) => (
  <div className="splash-container">
    <div className="splash-content" style={{opacity: 1 - scrollY / 100}}>
      <div className="splash-title">Rent to Own</div>
      <div><span className="splash-subtitle">Do these awesome things</span></div>
      <div>
        <a className="splash-button">Do Stuff</a>
        <a className="splash-button">Do Stuff</a>        
      </div>
    </div>
  </div>
)
export default Splash;