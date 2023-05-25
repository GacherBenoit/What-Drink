// Import CSS
import './search.scss';

// Import NPM
import {
  React, useState, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Function
import keyboardNavigation, { navigationPosition, listElement } from './keyboardNavigation';

// Import image
import glass from '../../assets/images/glass.png';
import icon from '../../assets/images/icon.png';

function Search() {
  const [search, SetSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

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

  // On every change of input (search state), we set the position to -1
  // We convert our array (type HTML Collection) to array and browse it to remove the highlight class
  // In fact , at every proposition's change the current selection is set to reboot and disapear
  useEffect(() => {
    navigationPosition.current = -1;
    const listElementToArray = [...listElement];
    listElementToArray.forEach((element) => {
      element.classList.remove('highLight');
    });
  }, [search]);
 // Function to redirect to the result page
  const handleSubmit = () => {
    navigate('/searchresult');
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
            onKeyDown={(evt) => keyboardNavigation(
              evt,
              search,
              SetSearch,
              handleSubmit,
            )}
          />

          <button className="navbar--search__input__items__button" type="submit" label="searchBar" href="#" onClick={(evt) => handleSubmit(evt)}>
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
