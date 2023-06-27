// Import CSS
import './searchResult.scss';

// import NPM
import { React, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Component
import Card from '../Card/card';

// Icons
import Arrow from '../../assets/images/arrow.png';

function SearchResult({ recipes, searchSend }) {
  // Change the currentCard index to switch current class
  const [cardIndex, setCardIndex] = useState(0);

  // The recipes filtered by search send by user
  const filteredSearch = recipes.filter((recipe) => recipe.strDrink.includes(searchSend));
 /*  console.log(filteredSearch.length); */

  // OnClick left
  const handleLeftClick = () => {
    setCardIndex(cardIndex - 1);
    if (cardIndex === 0) {
      setCardIndex(filteredSearch.length - 1);
    }
    console.log(cardIndex);
  };

  // Onclick right
  const handleRightClick = () => {
    setCardIndex(cardIndex + 1);
    if (cardIndex === filteredSearch.length - 1) {
      setCardIndex(0);
    }
  };

  return (
    <div className="searchResult">
      <div className="searchResult--header">
        <h1 className="searchResult--header__title">WE FOUND FOR YOU</h1>
      </div>
      <section className="searchResult--cardlist">
        {filteredSearch.map((recipe, index) => (
          <Card
            index={index}
            key={recipe.idDrink}
            className={index === cardIndex ? 'current' : 'card'}
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
