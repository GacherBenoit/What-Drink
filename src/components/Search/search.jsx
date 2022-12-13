// Import CSS
import './search.scss';

// Import NPM
import React from 'react';

// Import image
import glass from '../../assets/glass.png';
import icon from '../../assets/icon.png';

function Search() {
  return (
    <div className="navbar--search">
      <input className="navbar--search__checkbox" type="checkbox" />
      <div className="navbar--search__icon">
        <img className="navbar--search__glass__image" src={glass} alt="" />
        <img className="navbar--search__drink__image" src={icon} alt="" />
      </div>
      <div className="navbar--search__input">
        <div className="navbar--search__input__items">
          <input className="navbar--search__input__field" type="search" placeholder="Find a recipe..." />
          <button className="navbar--search__input__button" type="submit">Find</button>
        </div>
      </div>
    </div>
  );
}

export default Search;