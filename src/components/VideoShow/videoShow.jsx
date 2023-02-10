// Import CSS
import './videoShow.scss';

// Import NPM
import React from 'react';
import { HashLink } from 'react-router-hash-link';

// Import video
import video from '../../assets/video/video-01.mp4';// Import NPM

function VideoShow() {
  return (
    <div className="video--container">
      <video className="video--cocktail" autoPlay loop muted id="video " src={video} />
      <button type="button" className="welcomeButton">
        <HashLink smooth to="/#welcome">Welcome</HashLink>
      </button>
    </div>
  );
}

export default VideoShow;
