// Import CSS
import './videoShow.scss';

// Import NPM
import React from 'react';

// Import video
import video from '../../assets/video/video-01.mp4';// Import NPM

// Component
import LinkButton from '../LinkButton/linkButton';

function VideoShow() {
  return (
    <div className="video--container">
      <video className="video--cocktail" autoPlay loop muted id="video " src={video} />
      <LinkButton link="#welcome" buttonClassname="welcomeButton" linkClassname="welcomeLink" labelName="Welcome" />
    </div>
  );
}

export default VideoShow;
