// Import CSS
import './nav.scss';

// Import NPM
import React, { useState } from 'react';

// Import img
import icon from '../../assets/icon.png';
import burgerButton from '../../assets/burger-menu-icon.png';

function Nav() {
  // Variable d'état
  /*  const [open, setOpen] = useState('close'); */

  return (
    <div className="nav">
      <a href="home" className="navbar--logo">
        <img className="nav--icon" src={icon} alt="" />
      </a>
      <nav className="navbar">
        <div className="navbar--link">
          <input className="checkbox" type="checkbox" name="" id="" />
          <ul className="navbar--link__list">
            <li className="navbar--link__list__element"><a className="navbar--link__list__element__button" href="home">Home</a></li>
            <li className="navbar--link__list__element"><a className="navbar--link__list__element__button" href="whoarewe">Who are we ?</a></li>
            <li className="navbar--link__list__element"><a className="navbar--link__list__element__button" href="cocktails">Cocktails</a></li>
            <li className="navbar--link__list__element"><a className="navbar--link__list__element__button" href="tools">Tools & Tips</a></li>
          </ul>
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
