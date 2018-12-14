import React from 'react';
import './Info.css';
let Info = ({title, subtitle, text, video, reverse}) => (
  <div className={`info ${reverse && "reverse"}`} >
    <div className="info-text-container">
      <h2 className="info-title">{title}</h2>
      <h3 className="info-subtitle">{subtitle}</h3>
      <p>{text}</p>
    </div>
      <video className="info-video" controls>
        <source src="./assets/how-rent-to-own-works.mp4" type="video/mp4" />
      </video>

  </div>
);
export default Info;