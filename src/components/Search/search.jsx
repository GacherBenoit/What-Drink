// Import CSS
import './search.scss';

// Import NPM
import { React, useState, useEffect } from 'react';
import axios from 'axios';

// Import image
import glass from '../../assets/images/glass.png';
import icon from '../../assets/images/icon.png';
import { element } from 'prop-types';

function Search() {
  const [search, SetSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigationPosition = { current: -1 }; 
  // Important to start at -1. We need a position egal to the index of the table.The properties will be increment at every key push.
  // Here ,we start at -1 and the first incrementation qwe will start at 0 , the first entry of the table.

  // Base URL for search by cocktail category because
  // we use free access and cant have the full list for the momment
  const baseUrlforCocktailCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  useEffect(() => {
    axios.get(baseUrlforCocktailCategory).then((response) => {
    //  console.log(response.data);
      setRecipes(response.data.drinks);
    })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchInput = (evt) => {
    SetSearch(evt.target.value.charAt(0).toUpperCase()
            + evt.target.value.slice(1).toLowerCase());
  // OnChange we set the state and select the first letter (with .charAt) to transform it
  // in upperCase (with .toUppercase).Finally concatain with a copy of the field value
  // only after the first letter (with .slice )and transform in lower case. Check MDN Js function in details and this post : https://stackoverflow.com/questions/71595722/auto-capitalization-of-input-value-in-react
  };

  const keyboardNavigation = (event) => {
    if (search && search) {
      const listElement = document.getElementsByClassName('navbar--search__input__items__list__element'); // Je crée un tableau avec tte les classes
      const elementToRemove = document.getElementsByClassName('highLight');

      if (navigationPosition.current === listElement.length - 1) {
        navigationPosition.current = -1;
        elementToRemove[0].classList.remove('highLight');
        console.log(navigationPosition.current);
      }
      if (event.key === 'ArrowDown') {
        navigationPosition.current += 1;
        listElement[navigationPosition.current].classList.add('highLight');
        console.log(navigationPosition.current);

        if (elementToRemove.length === 2) {
          elementToRemove[0].classList.remove('highLight');
        }
      }
    }
  };

  return (
    <div className="navbar--search">
      <input className="navbar--search__checkbox" type="checkbox" />
      <div className="navbar--search__icon">
        <img className="navbar--search__glass__image" src={glass} alt="" />
        <img className="navbar--search__drink__image" src={icon} alt="" />
      </div>
      <div className="navbar--search__input">
        <div className="navbar--search__input__items">
          <input
            className="navbar--search__input__field"
            type="texte"
            placeholder="Find a recipe..."
            value={search}
            onChange={(evt) => handleSearchInput(evt)}
            onKeyDown={(evt) => keyboardNavigation(evt)}
          />
          <button className="navbar--search__input__items__button" type="submit" label="searchBar" href="#">
            <img className="navbar--search__input__items__image" src={glass} alt="" />
          </button>
          <ul className="navbar--search__input__items__list">

            {/* If search input isnt empty and recipes(data from API) isnt empty too
             (to recieve data from API) ,the filter function is functionnal */}
            { search && recipes && recipes.filter((recipe) => recipe.strDrink.includes(search))
              .map((recipe) => (
                <option
                  className="navbar--search__input__items__list__element"
                // Need to use anonym function to dont enter in a re-render loop.
                  onClick={
                  () => (SetSearch(recipe.strDrink))
                }
                  key={recipe.idDrink}
                >
                  {recipe.strDrink}
                </option>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;