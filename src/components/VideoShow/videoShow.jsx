// Import CSS
import './videoShow.scss';

// Import NPM
import React from 'react';

// Import video
import video from '../../assets/video/video-01.mp4';

// Component
import WelcomeButton from './WelcomeButton/welcomeButton';

function VideoShow() {
  return (
    <div className="video--container">
      <video className="video--cocktail" autoPlay loop muted id="video " src={video} />
      <WelcomeButton />
    </div>
  );
}

export default VideoShow;
