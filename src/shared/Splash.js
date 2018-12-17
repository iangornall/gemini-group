import React from 'react';
import Button from './Button';
import './Splash.css';
let Splash = ({title, subtitle, buttons, background, scrollY,}) => (
  <div className="splash-wrapper" style={{height: (title || subtitle || buttons) && 475 - scrollY}}>
    <div className="splash-container" style={{
      backgroundImage: `url(assets/${background})`,
      height: 300 - scrollY
    }} />
    <div className="splash-content-wrapper">
      <div className="splash-content" style={{opacity: 1 - scrollY / 200, marginTop: 335 - scrollY}}>
        {title && <div className="splash-title">{title}</div>}
        {subtitle && <div><span className="splash-subtitle">{subtitle}</span></div>}
        <div className="splash-button-container">
          {buttons && buttons.map(button => <Button>{button}</Button>)}      
        </div>
      </div>
    </div>
  </div>
)
export default Splash;