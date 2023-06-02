// Import CSS
import './App.scss';
import '../../styles/index.scss';
// Import NPM
import { React, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// Import Components
import Nav from '../Nav/nav';
import Main from '../Main/main';
import Footer from '../Footer/footer';
import ToolsAndTips from '../ToolsAndTips/toolsAndTips';
import WhoWeAre from '../WhoWeAre/whoWeAre';
import Cocktails from '../Cocktails/cocktail';
import SearchResult from '../SearchResult/searchResult';

function App() {
  // We define states for controlled field and to recieve data at first parent of the Application
  // And launch the useEffect to fetch data of recipes to access them into multiple components
  // In this app , for Search and SearchResult components
  // Search component for the user's shearch and propositions
  // SearchResult component to show result of the user's search with the cards

  const [search, SetSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Base URL for search by cocktail category because
  // we use free access and cant have the full list for the momment
  const baseUrlforCocktailCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  useEffect(() => {
    axios.get(baseUrlforCocktailCategory)
      .then((response) => {
        const modifiedDrinks = response.data.drinks.map((drink) => {
          const capitalizedDrink = drink.strDrink.charAt(0).toUpperCase()
           + drink.strDrink.slice(1).toLowerCase();
          return { ...drink, strDrink: capitalizedDrink };
        });
        setRecipes(modifiedDrinks);
      })
      .catch((err) => console.log(err));
  }, []);

  // In response part, we iterate on every element on drink with map
  // Extract the value of the property strDrink
  // Make the letter convertion with different method toUpperCase & toLowerCase
  // Use destructuring to create a new object, a copy of drink with the modified property strDrink
  // And set the State with the new object
  return (
    <div className="app">
      <Nav search={search} SetSearch={SetSearch} recipes={recipes} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/tools&tips" element={<ToolsAndTips />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/searchresult" element={<SearchResult search={search} recipes={recipes} />} />
      </Routes>
      <Footer />
    </div>
  );
}
// Prop types for our Component
App.defaultProps = {
  search: PropTypes.string.isRequired,
  SetSearch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
