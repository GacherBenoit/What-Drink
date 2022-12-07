// Import CSS
import './nav.scss';

// Import NPM
import React, { useState } from 'react';

// Import img
import icon from '../../assets/icon.png';

function Nav() {
  return (
    <div className="nav">
      <nav>
        <a href="home" className="navbar--logo">
          <img className="nav--icon" src={icon} alt="" />
        </a>
        <div className="navbar--items">
          <input type="checkbox" id="burger-menu" className="navbar--burger__menu__button" />
          <div className="navbar--burger__menu">
            <span className="navbar--burger__menu__element" />
            <span className="navbar--burger__menu__element" />
            <span className="navbar--burger__menu__element" />
          </div>
          <ul className="navbar--items__list">
            <li className="navbar--items__list__item"><a href="#">Home</a></li>
            <li className="navbar--items__list__item"><a href="#">Cocktail's recipes</a></li>
            <li className="navbar--items__list__item"><a href="#">Tools and tips</a></li>
            <li className="navbar--items__list__item"><a href="#">Who are we ?</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
