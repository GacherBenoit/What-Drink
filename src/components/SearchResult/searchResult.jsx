// Import CSS
import './searchResult.scss';

// import NPM
import {
  React, useState, useEffect, useRef
} from 'react';
import PropTypes from 'prop-types';

// Component
import Card from '../Card/card';

function SearchResult({ recipes, cardToRender }) {
  // We define state to set if card is opened and wich one.
  const [cardClicked, setCardClicked] = useState({ clicked: false, index: 0 });

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
        <div className="searchResult--cardlist__container">
          <div className="searchResult--cardlist__caroussel">
            {cardToRender && cardToRender.map((recipe, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
// Prop types for our Component
SearchResult.propTypes = {
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
  cardToRender: PropTypes.arrayOf(
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
