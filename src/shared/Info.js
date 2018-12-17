import React from 'react';
import './Info.css';
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';
let Info = ({bigtitle, title, subtitle, text, video, reverse}) => (
  <div className={`info ${reverse && "reverse"}`} >
    <div className="info-text-container">
      {title && <h2 style={{fontSize: bigtitle && "2em"}} className="info-title">{title}</h2>}
      {subtitle && <h3 className="info-subtitle">{subtitle}</h3>}
      {text && (typeof text === "string" ? text : text.map(p => <p className="info-text">{p}</p>))}
    </div>
    {video && <div className="info-video-container">
      <Player playsInline poster="assets/how-rent-to-own-works.png">
        <BigPlayButton position="center" />
        <source src={video} type="video/mp4" />
      </Player>
    </div>}
  </div>
);
export default Info;