// Import CSS
import './search.scss';

// Import NPM
import React from 'react';

// Import image
import glass from '../../assets/glass.png';

function Search() {
  return (
    <div className="navbar">
      <input className="navbar--search__checkbox" type="checkbox" />
      <div className="navbar--search">
        <img className="navbar--search__glass__image" src={glass} alt="" />
      </div>
    </div>
  );
}

export default Search;
