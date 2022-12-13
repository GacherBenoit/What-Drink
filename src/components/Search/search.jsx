// Import CSS
import './search.scss';

// Import NPM
import React from 'react';

// Import image
import glass from '../../assets/glass.png';

function Search() {
  return (
    <div className="navbar--search">
      <input className="navbar--search__checkbox" type="checkbox" />
      <div className="navbar--search__icon">
        <img className="navbar--search__glass__image" src={glass} alt="" />
      </div>
      <div className="navbar--search__input">
        <div className="navbar--search__input__items">
          <input type="search" placeholder="Find a recipe" />
          <button type="submit">Find</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
