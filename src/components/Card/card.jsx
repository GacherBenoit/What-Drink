// Import NPM
import React from 'react';

// Import CSS
import './card.scss';

function Card() {
  return (
    <div className="card">
      <div className="card--container">
        <div className="card--container__element">
          <img className="card--container__element__image" src="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" alt="" />
          <div className="card--container__element__image__bottom" />
        </div>
      </div>
    </div>
  );
}

export default Card;
