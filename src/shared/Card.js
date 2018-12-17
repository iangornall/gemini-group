import React from 'react';
import './Card.css';
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';
let Info = ({text, video, poster}) => (
  <div className="card" >
    {video && <div className="card-video-container">
      <Player playsInline poster={poster}>
        <BigPlayButton position="center" />
        <source src={video} type="video/mp4" />
      </Player>
    </div>}
    <div className="card-text-container">
      {text && (typeof text === "string" ? text : text.map(p => <p className="info-text">{p}</p>))}
    </div>
  </div>
);
export default Info;