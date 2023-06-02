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
      <h1>PAGE DE RESULTAT DE RECHERCHE</h1>
      <Card />
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
