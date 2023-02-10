// Import CSS
import './nav.scss';

// Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import Image

import logo from '../../assets/images/Logo-01.png';

// Import Components
import Search from '../Search/search';

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar--burger__menu">
          <input className="navbar--burger__menu__checkbox" type="checkbox" name="" id="" />
          <div className="navbar--burger__menu__lines">
            <span className="navbar--burger__menu__lines__one" />
            <span className="navbar--burger__menu__lines__two" />
            <span className="navbar--burger__menu__lines__three" />
          </div>
          <div className="navbar--burger__menu__logo">
            <img className="navbar--burger__menu__logo__item" src={logo} alt="" />
          </div>
          <div className="navbar--burger__menu__items">
            <li className="navbar--burger__menu__link "><NavLink className="navbar--burger__menu__link__button" to="/">Home</NavLink></li>
            <li className="navbar--burger__menu__link"><NavLink className="navbar--burger__menu__link__button" to="tools&tips">Tools and tip</NavLink></li>
            <li className="navbar--burger__menu__link"><NavLink className="navbar--burger__menu__link__button" to="who-we-are">Who are we ?</NavLink></li>
          </div>
        </div>
      </nav>
      <Search />
    </div>
  );
}

export default Nav;
