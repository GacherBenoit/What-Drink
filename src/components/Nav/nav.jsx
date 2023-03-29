// Import CSS
import './nav.scss';

// Import NPM
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// Import Image

import logo from '../../assets/images/Logo-01.png';

// Import Components
import Search from '../Search/search';

function Nav() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="navbar">
      <nav>
        <div className="navbar--burger__menu">
          <button className="navbar--burger__menu__button" type='button' onClick={()=> setToggle(!toggle)} />
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
      <Search />
    </div>
  );
}

export default Nav;
