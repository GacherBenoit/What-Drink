// Import CSS
import './linkButton.scss';

// Import NPM
import React from 'react';

// Import NPM
import { PropTypes } from 'prop-types';

function LinkButton({ buttonClassname, linkClassname, labelName }) {
  return (
    <button className={buttonClassname}>
      <a href="#" className={linkClassname}>{labelName}</a>
    </button>
  );
}
// Prop types for our Component
LinkButton.propTypes = {
  buttonClassname: PropTypes.string.isRequired,
  linkClassname: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default LinkButton;
