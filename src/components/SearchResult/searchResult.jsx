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
  const [cardClicked, setCardClicked] = useState(null);
  // Change the currentCard index to switch current class
  const [cardIndex, setCardIndex] = useState(0);

  // The recipes filtered by search send by user
  const filteredSearch = recipes.slice(0,24).filter((recipe) => recipe.strDrink.includes(searchSend));
 /*  console.log(filteredSearch.length); */
  console.log(cardIndex);
  console.log(filteredSearch.length);
  // Reset the current card index if user's search change
  useEffect(() => {
    setCardIndex(0);
  }, [searchSend]);

  // OnClick left
  const handleLeftClick = () => {
    if (cardIndex === 0) {
      setCardIndex(filteredSearch.length - 1);
    } else setCardIndex(cardIndex - 1);
  };

  // Onclick right
  const handleRightClick = () => {
    if (cardIndex === filteredSearch.length - 1) {
      setCardIndex(0);
    } else setCardIndex(cardIndex + 1);
  };

  const handleClickCard = (index) => {
    console.log('clicked');
    console.log(index);
  };

  return (
    <div className="searchResult">
      <div className="searchResult--header">
        <h1 className="searchResult--header__title">WE FOUND FOR YOU</h1>
      </div>
      <section className="searchResult--cardlist">
        {filteredSearch.map((recipe, index) => (
          index === cardIndex ? (
            <div key={`current-${recipe.idDrink}`} className="searchResult--cardlist__current">
              <Card
                key={recipe.idDrink}
                index={index}
                className="card current"
                handleClickCard={handleClickCard}
                cardClicked={cardClicked}
                {...recipe}
              />
            </div>
          ) : (
            <Card
              key={recipe.idDrink}
              index={index}
              className="card"
              handleClickCard={handleClickCard}
              cardClicked={cardClicked}
              {...recipe}
            />
          )
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
