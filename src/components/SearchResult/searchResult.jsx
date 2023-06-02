// Import CSS
import './searchResult.scss';

// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Component
import Card from '../Card/card';

function SearchResult({ search, recipes }) {
  return (
    <div className="searchResult">
      <div className="searchResult--header">
        <h1 className="searchResult--header__title">WE FOUND FOR YOU</h1>
      </div>
      <section className="searchResult--cardList">
        <Card />
      </section>
    </div>
  );
}
// Prop types for our Component
SearchResult.propTypes = {
  search: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default SearchResult;
