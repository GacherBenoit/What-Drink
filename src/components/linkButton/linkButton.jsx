// Import CSS
import './linkButton.scss';

// Import NPM
import React from 'react';

// Import NPM
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function LinkButton({
  buttonClassname, linkClassname, labelName, link,
}) {
  return (
    <button type="button" className={buttonClassname}>
      <Link to={link} className={linkClassname}>{labelName}</Link>
    </button>
  );
}
// Prop types for our Component
LinkButton.propTypes = {
  buttonClassname: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkClassname: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default LinkButton;
