// Import CSS
import './searchResult.scss';

// import NPM
import { React, useEffect } from 'react';
import PropTypes from 'prop-types';

// Component
import Card from '../Card/card';

// Icons
import Arrow from '../../assets/images/arrow.png';

function SearchResult({ recipes, searchSend }) {
  //
  // current position in slider
  let currentPosition = 0;

  // Current card
  // We use useEffect to initialize the 'current' class to card
  // at every search send by user with searchSend state in parameter
  let cards = document.getElementsByClassName('card');

  useEffect(() => {
    if (cards.length > 0) {
      const currentCard = cards[currentPosition];
      currentCard.classList.add('current');
    }
  }, [searchSend]);

  // Check Position
  const checkPosition = () => {
    if (currentPosition === -1) {
      currentPosition = cards.length - 1;
    } else if (currentPosition === cards.length) {
      currentPosition = 0;
    }
  };

  // OnClick left
  const handleLeftClick = () => {
    cards[currentPosition].classList.remove('current');
    currentPosition -= 1;
    checkPosition();
    cards[currentPosition].classList.add('current');
  };

  // Onclick right
  const handleRightClick = () => {
    cards[currentPosition].classList.remove('current');
    currentPosition += 1;
    checkPosition();
    cards[currentPosition].classList.add('current');
  };

  return (
    <div className="searchResult">
      <div className="searchResult--header">
        <h1 className="searchResult--header__title">WE FOUND FOR YOU</h1>
      </div>
      <section className="searchResult--cardlist">
        { recipes.filter((recipe) => recipe.strDrink.includes(searchSend))
          .map((recipe) => (
            <Card
              key={recipe.idDrink}
              {...recipe}
            />
          ))}
      </section>
      <div className="searchResult--cardlist__arrows">
        <button type="button" label="previous recipe" className="searchResult--cardlist__arrows__left__button" onClick={handleLeftClick}>
          <img src={Arrow} alt="" className="searchResult--cardlist__arrows__left__button__image" />
        </button>
        <button type="button" label="next recipe" className="searchResult--cardlist__arrows__right__button" onClick={handleRightClick}>
          <img src={Arrow} alt="" className="searchResult--cardlist__arrows__right__button__image" />
        </button>
      </div>
    </div>
  );
}
// Prop types for our Component
SearchResult.propTypes = {
  searchSend: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default SearchResult;
