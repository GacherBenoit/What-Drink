// Import CSS
import './welcomeButton.scss';

// Import NPM
import React from 'react';

function WelcomeButton() {
  return (
    <button className="welcomeButton">
      <a href="#" id="welcomeLink">What Drink</a>
    </button>
  );
}

export default WelcomeButton;
