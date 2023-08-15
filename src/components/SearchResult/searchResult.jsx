// Import CSS
import './searchResult.scss';

// import NPM
import {
  React, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

// Component
import Card from '../Card/card';

// Icons
import Arrow from '../../assets/images/arrow.png';

function SearchResult({ recipes, searchSend }) {
  // We define state to set if card is opened and wich one.
  const [cardClicked, setCardClicked] = useState({ clicked: false, index: 0 });

  // Change the currentCard index to switch current class
  const [cardIndex, setCardIndex] = useState(0);

  // Define State for Card to render
  // We define a state to not re-render card when search Input change
  const [cardToMap, setCardToMap] = useState([]);

  useEffect(() => {
    // The recipes filtered by search send by user
    const filteredSearch = recipes.filter(
      (recipe) => recipe.strDrink.includes(searchSend),
    ).slice(0, 24);

    // Set cards array to render filtered by search send by user
    setCardToMap(filteredSearch);

    // Reset the current card index if user's search change
    setCardIndex(0);
  }, [searchSend]);

  // OnClick left
  const handleLeftClick = () => {
    if (cardIndex === 0) {
      setCardIndex(cardToMap.length - 1);
    } else setCardIndex(cardIndex - 1);
  };

  // Onclick right
  const handleRightClick = () => {
    if (cardIndex === cardToMap.length - 1) {
      setCardIndex(0);
    } else setCardIndex(cardIndex + 1);
  };

  const handleClickCard = (index) => {
    setCardClicked((prevState) => ({
      ...prevState,
      clicked: !prevState.clicked, // Inversion of 'clicked' property
      // eslint-disable-next-line object-shorthand
      index: index, // Update the index property
    }));
  };

  return (
    <div className="searchResult">
      <div className="searchResult--header">
        <h1 className="searchResult--header__title">WE FOUND FOR YOU</h1>
      </div>
      <section className="searchResult--cardlist">
        {cardToMap.map((recipe, index) => (
          index === cardIndex ? (
            <div key={`current-${recipe.idDrink}`} className="searchResult--cardlist__current">
              <Card
                key={recipe.idDrink}
                index={index}
                className="card current"
                handleClickCard={handleClickCard}
                cardClicked={cardClicked}
                setCardClicked={setCardClicked}
                // eslint-disable-next-line react/jsx-props-no-spreading
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
              setCardClicked={setCardClicked}
               // eslint-disable-next-line react/jsx-props-no-spreading
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
  className: PropTypes.string,
  cardClicked: PropTypes.shape({
    clicked: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }),
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

SearchResult.defaultProps = {
  className: '', // Default value for className
  cardClicked: { clicked: false, index: 0 }, // Default value for cardClicked
};

export default SearchResult;
