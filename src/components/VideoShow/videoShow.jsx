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
// HashLink or how scroll to id element with react-router
// https://www.freecodecamp.org/news/how-to-implement-vertical-scrolling-in-react-using-react-router-hash-link/
export default VideoShow;
