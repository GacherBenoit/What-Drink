// Import CSS
import './linkButton.scss';

// Import NPM
import React from 'react';

function LinkButton() {
  return (
    <button className="welcomeButton">
      <a href="#" id="welcomeLink">What Drink</a>
    </button>
  );
}

export default LinkButton;
