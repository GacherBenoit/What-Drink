// Import CSS
import './search.scss';

// Import NPM
import { React, useState, useEffect } from 'react';
import axios from 'axios';

// Import image
import glass from '../../assets/images/glass.png';
import icon from '../../assets/images/icon.png';

function Search() {
  const [search, SetSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  // We create on object to set the propertie of position at every interraction
  // The properties will be increment at every key push.
  const navigationPosition = { current: -1 };

  // Base URL for search by cocktail category because
  // we use free access and cant have the full list for the momment
  const baseUrlforCocktailCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  // Bollean to check if enter has ever pressed
  let enterPressed = false;

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
    if (search && search) { // We check if the input is'nt empty
      const listElement = document.getElementsByClassName('navbar--search__input__items__list__element'); // We create a table with all propositions
      const elementToRemove = document.getElementsByClassName('highLight'); // We create a table with the recipes with highlight className

      // On arrowdown interraction, if the current position is set at the end of the table:
      // We set the currentposition at -1 ( because it will be finally set at 0 with incrementation)
      // We remove the previous highlight className (the preview element will disapear)
      if (event.key === 'ArrowDown') {
        if (navigationPosition.current === listElement.length - 1) {
          navigationPosition.current = -1;
          elementToRemove[0].classList.remove('highLight');
        }

        // At every interraction with arrowDown, the position is increment by +1
        // We add the className highlight to the index of the table with the current position.
        // We create a currentProposition variable to store the proposition's value in highLight
        navigationPosition.current += 1;
        listElement[navigationPosition.current].classList.add('highLight');
        let currentProposition = elementToRemove[0].value;
        console.log(currentProposition); // HERE THE SOLUTION

        // If we have two element with the classname highlight , we remove the previous one
        // (here at the index 0 cause to the different direction navigation )
        if (elementToRemove.length === 2) {
          elementToRemove[0].classList.remove('highLight');
          currentProposition = elementToRemove[0].value;
          console.log(currentProposition);
        }
      }

      // If arrowUp is the first interraction, the current position is set at -1
      // So we set the current position to the end of the proposition's table
      if (event.key === 'ArrowUp') {
        if (navigationPosition.current === -1) {
          navigationPosition.current = listElement.length;
        }

        // If the current position is set to 0 (at the begining of the list)
        // We set the current posittion to the end of the proposition's table
        // And remove the previous element with className highlight
        if (navigationPosition.current === 0) {
          navigationPosition.current = listElement.length;
          elementToRemove[0].classList.remove('highLight');
        }

        // At every arrowUp interraction , we decrement the current position by -1
        // We add the className highlight to the index of the table with the current position.
        // We create a currentProposition variable to store the proposition's value in highLight
        navigationPosition.current -= 1;
        listElement[navigationPosition.current].classList.add('highLight');
        let currentProposition = elementToRemove[0].value;
        console.log(currentProposition); // HERE THE SOLUTION

        // If we have two element with the classname highlight , we remove the previous one
        // (here at the index 1 cause to the different direction navigation )
        if (elementToRemove.length === 2) {
          elementToRemove[1].classList.remove('highLight');
        }
      }
    }
    if (event.key === 'Enter') {
      enterPressed = !enterPressed;
      // At every click on enter we switch boolean , we dont use state to not re-render .
      // Need to check if it's a mistake.
      //  Need to have the current highlightvalue
      //  Set the search state at the first enterKeypress ( when its false)
      // Redirect when the keypress at the second time (when it s true)
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
                  value={recipe.strDrink}
                  className="navbar--search__input__items__list__element"
                // Need to use anonym function to dont enter in a re-render loop.
                  onClick={
                  () => (SetSearch(recipe.strDrink))
                }
                  key={recipe.idDrink}
                >
                  {recipe.strDrink }
                </option>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
