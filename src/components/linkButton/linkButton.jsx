// Import CSS
import './linkButton.scss';

// Import NPM
import React from 'react';

// Import NPM
import { PropTypes } from 'prop-types';

function LinkButton({ buttonClassname, linkClassname }) {
  return (
    <button className={buttonClassname}>
      <a href="#" className={linkClassname}>What Drink</a>
    </button>
  );
}
// Prop types for our Component
LinkButton.propTypes = {
  buttonClassname: PropTypes.string.isRequired,
  linkClassname: PropTypes.string.isRequired,
};

export default LinkButton;
