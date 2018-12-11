import React from 'react';
import './Info.css';
let Info = ({title, subtitle, text, video, reverse}) => (
  <div className={`info ${reverse && "reverse"}`} >
    <div className="info-text-container">
      <h2 className="info-title">{title}</h2>
      <h3 className="info-subtitle">{subtitle}</h3>
      <p>{text}</p>
    </div>
    <div className="info-video-container">
      <video src={video} />
    </div>

  </div>
);
export default Info;