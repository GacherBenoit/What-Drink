// Import NPM
import { React, useState } from 'react';

// Import CSS
import './card.scss';

// Import Image
import logoSeeMore from './../../assets/images/seemore.png';

function Card() {
  const [cardReturned, setCardReturned] = useState(false);

  const handleClickCard = () => {
    setCardReturned(!cardReturned);
    console.log(cardReturned);
  };

  return (
    <div className="card">
      <div className="card--container">
        <div className="card--container__element">
          <div className="card--container__element__link">
            <div className="card--container__element__link__content">
              <button type="button" className="card--container__element__link__content__button" onClick={(handleClickCard)}>
                <img className="card--container__element__link__content__logo" alt="see full recipe" src={logoSeeMore} />
              </button>
            </div>
          </div>
          <img className="card--container__element__image" src="https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg" alt="" />
          <div className="card--container__element__image__bottom">
            <p className="card--container__element__image__bottom__title">My cocktail</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
