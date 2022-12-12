// Import CSS
import './nav.scss';

// Import NPM
import React from 'react';
// Import Image
import icon from '../../assets/icon.png';

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
            <img src={icon} alt="" />
          </div>
          <Search />
          <div className="navbar--burger__menu__items">
            <li className="navbar--burger__menu__link"><a href="#" className="navbar--burger__menu__link__button">Home</a></li>
            <li className="navbar--burger__menu__link"><a href="#" className="navbar--burger__menu__link__button">about</a></li>
            <li className="navbar--burger__menu__link"><a href="#" className="navbar--burger__menu__link__button">blogs</a></li>
            <li className="navbar--burger__menu__link"><a href="#" className="navbar--burger__menu__link__button">portfolio</a></li>
            <li className="navbar--burger__menu__link"><a href="#" className="navbar--burger__menu__link__button">contact</a></li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
