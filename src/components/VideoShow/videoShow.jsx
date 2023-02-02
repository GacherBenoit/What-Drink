// Import CSS
import './videoShow.scss';

// Import NPM
import React from 'react';

// Import video
import video from '../../assets/video/video-01.mp4';// Import NPM

// Component
import LinkButton from '../linkButton/linkButton';

function VideoShow() {
  return (
    <div className="video--container">
      <video className="video--cocktail" autoPlay loop muted id="video " src={video} />
      <LinkButton buttonClassname="welcomeButton" linkClassname="welcomeLink" />
    </div>
  );
}

export default VideoShow;
