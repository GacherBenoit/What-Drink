// Import NPM
import { React, useState } from 'react';
import PropTypes from 'prop-types';

// Import CSS
import './card.scss';

// Import Image
import logoSeeMore from './../../assets/images/seemore.png';

function Card({ className, ...recipe }) {
  const [cardClicked, setCardClicked] = useState(false);
  const handleClickCard = () => {
    setCardClicked(!cardClicked);
    console.log(cardClicked);
  };
  const { strDrink, strDrinkThumb } = recipe;

  return (
    <div className={className}>
      <div className="card--container">
        <div className="card--container__element">
          <div className="card--container__element__link">
            <div className={`card--container__element__link__content${cardClicked ? '__show' : ''}`}>
              <button type="button" className="card--container__element__link__content__button" onClick={(handleClickCard)}>
                <img className={`card--container__element__link__content__logo${cardClicked ? '__show' : ''}`} alt="see full recipe" src={logoSeeMore} />
              </button>
            </div>
          </div>
          <img className={`card--container__element__image${cardClicked ? '__show' : ''}`} src={strDrinkThumb} alt="" />
          <div className={`card--container__element__image__bottom${cardClicked ? '__show' : ''}`}>
            <p className="card--container__element__image__bottom__title">{strDrink}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  className: PropTypes.string.isRequired,
};
