import React from 'react';
import Button from '../shared/Button';
import './Hero.css';
let Hero = ({title, text, button, color, textColor, background}) => (
  <div className="hero" style={{backgroundImage: `url(assets/${background})`}}>
    <div className="hero-cover" style={{backgroundColor: color}} />
    <div className="hero-content" style={{color: textColor}}>
      <h2 className="hero-title">{title}</h2>
      <p className="hero-text">{text}</p>
      {button && <Button href={button.href} color="#0D0D0D">{button.text}</Button>}
    </div>
  </div>
);
export default Hero;