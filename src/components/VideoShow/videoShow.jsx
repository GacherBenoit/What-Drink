// Import CSS
import './videoShow.scss'

// Import NPM
import React from 'react';

// Import video
import video from '../../assets/video/video-01.mp4';

function VideoShow() {
  return (
    <div className="video--container">
      <video className="video--cocktail" autoPlay loop muted id="video " src={video} />
      <a href="##" className="video--cocktail__logo" alt="" />
    </div>
  );
}

export default VideoShow;
