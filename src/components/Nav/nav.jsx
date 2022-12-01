// Import CSS
import './nav.scss';

// Import NPM
import React from 'react';

// Import img
import icon from '../../assets/icon.png';

function Nav() {
  return (
    <div className="nav">
      <a href="home" className="navbar--logo">
        <img className="nav--icon" src={icon} alt="" />
      </a>
      <nav className="navbar">
        <div className="navbar--link">
          <ul className="navbar--link__list">
            <li><a href="home">Home</a></li>
            <li><a href="whoarewe">Who are we ?</a></li>
            <li><a href="cocktails">Cocktails</a></li>
            <li><a href="tools">Tools & Tips</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
