// Import CSS
import './nav.scss';

// Import NPM
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import Image

import logo from '../../assets/images/Logo-01.png';

// Import Components
import Search from '../Search/search';

// LinterRules
/* eslint-disable jsx-a11y/control-has-associated-label */

function Nav({ search, SetSearch, recipes }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="navbar">
      <nav>
        <div className="navbar--burger__menu">
          <button className="navbar--burger__menu__button" type="button" onClick={() => setToggle(!toggle)} />
          <div className="navbar--burger__menu__lines">
            <span className={toggle ? 'navbar--burger__menu__lines__one' : 'navbar--burger__menu__lines__one__open'} />
            <span className={toggle ? 'navbar--burger__menu__lines__two' : 'navbar--burger__menu__lines__two__open'} />
            <span className={toggle ? 'navbar--burger__menu__lines__three' : 'navbar--burger__menu__lines__three__open'} />
          </div>
          <div className="navbar--burger__menu__logo">
            <img className="navbar--burger__menu__logo__item" src={logo} alt="" />
          </div>
          <div className={toggle ? 'navbar--burger__menu__items' : 'navbar--burger__menu__items__open'}>
            <li className="navbar--burger__menu__link "><NavLink className="navbar--burger__menu__link__button" to="/" onClick={() => setToggle(!toggle)}>Home</NavLink></li>
            <li className="navbar--burger__menu__link"><NavLink className="navbar--burger__menu__link__button" to="tools&tips" onClick={() => setToggle(!toggle)}>Tools and tip</NavLink></li>
            <li className="navbar--burger__menu__link"><NavLink className="navbar--burger__menu__link__button" to="/whoweare" onClick={() => setToggle(!toggle)}>Who are we ?</NavLink></li>
          </div>
        </div>
      </nav>
      <Search {...{
        search, SetSearch, recipes,
      }}
      />
    </div>
  );
}
// Prop types for our Component
Nav.propTypes = {
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
export default Nav;
