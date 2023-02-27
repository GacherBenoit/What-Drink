// Import CSS
import './search.scss';

// Import NPM
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Import image
import glass from '../../assets/images/glass.png';
import icon from '../../assets/images/icon.png';
// Base URL for search by name
const baseURL = 'https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

function Search() {
  const [search,SetSearch] = useState('');
  const [recipes,setReciptes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setReciptes(response.data);
    });
  }, []);

  return (
    <div className="navbar--search">
      <input className="navbar--search__checkbox" type="checkbox" />
      <div className="navbar--search__icon">
        <img className="navbar--search__glass__image" src={glass} alt="" />
        <img className="navbar--search__drink__image" src={icon} alt="" />
      </div>
      <div className="navbar--search__input">
        <div className="navbar--search__input__items">
          <input className="navbar--search__input__field" type="search" placeholder="Find a recipe..." value={search} onChange={(evt) => SetSearch(evt.target.value)} />
          <button className="navbar--search__input__items__button" type="submit" label="searchBar" href="#">
            <img className="navbar--search__input__items__image" src={glass} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
