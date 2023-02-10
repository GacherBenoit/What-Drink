// Import CSS
import './main.scss';

// Import NPM
import React from 'react';

// components
import VideoShow from '../VideoShow/videoShow';
import MainArticle from '../MainArticle/mainArticle';

function Main() {
  return (
    <div className="main">
      <VideoShow />
      <MainArticle />
    </div>
  );
}

export default Main;
