// Import CSS
import './search.scss';

// Import NPM
import {
  React, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Function
import keyboardNavigation, { navigationPosition, listElement } from './keyboardNavigation';

// Import image
import glass from '../../assets/images/glass.png';
import icon from '../../assets/images/icon.png';

function Search(
  {
    recipes,
    search,
    setSearch,
    setCardToRender,
  },
) {
  const navigate = useNavigate();

  // OnChange we set the state and select the first letter (with .charAt) to transform it
  // in upperCase (with .toUppercase).Finally concatain with a copy of the field value
  // only after the first letter (with .slice )and transform in lower case. Check MDN Js function in details and this post : https://stackoverflow.com/questions/71595722/auto-capitalization-of-input-value-in-react
  const handleSearchInput = (evt) => {
    setSearch(evt.target.value.charAt(0).toUpperCase()
            + evt.target.value.slice(1).toLowerCase());
  };

  // Function to check proposition
  // We check in case if the proposition have only one element and similar to the input
  // In this case we hidden the proposition to adding a class
  // And remove it when the input change
  const checkPropositionList = () => {
    const listToHide = document.getElementsByClassName('navbar--search__input__items__list');

    if (listElement[0] && listElement[0].value !== search) {
      listToHide[0].classList.remove('hidden-effect');
    }
    if (listElement.length === 1 && listElement[0].value === search) {
      // eslint-disable-next-line no-return-assign
      setTimeout(() => {
        listToHide[0].classList.add('hidden-effect');
      }, 1000);
    }
  };

  // On every change of input (search state), we set the position to -1
  // We convert array (type HTML Collection) to array and browse it to remove the highlight class
  // In fact , at every proposition's change the current selection is set to reboot and disapear
  useEffect(() => {
    navigationPosition.current = -1;
    const listElementToArray = [...listElement];
    listElementToArray.forEach((element) => {
      element.classList.remove('highLight');
    });
    checkPropositionList();
  }, [search]);

  // Function to redirect to the result page
  // And copy recipes to another state.
  // We want to map on this new one to not render card on every input change.
  const handleSubmit = () => {
    setCardToRender(recipes);
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
          {/* Mistake, we should have a form element and label but the input's behavior will be
          different.For exemple: At suggestion selection in list, when user push entry key,
          it will automacily submit the input.
          That was not initially planned when we made the navigation function without form */}
          <input
            id="userSearch"
            className="navbar--search__input__field"
            type="texte"
            placeholder="Find a recipe..."
            value={search}
            autoComplete="off"
            onChange={(evt) => handleSearchInput(evt)}
            onKeyDown={(evt) => keyboardNavigation(
              evt,
              search,
              setSearch,
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
              .slice(0, 5)
              .map((recipe) => (
                <option
                  value={recipe.strDrink}
                  className="navbar--search__input__items__list__element"
                // Need to use anonym function to dont enter in a re-render loop.
                  onClick={
                  () => (setSearch(recipe.strDrink))
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
// Prop types for our Component
//
Search.propTypes = {
  setCardToRender: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Search;
