// Import NPM
import { React } from 'react';
import PropTypes from 'prop-types';

// Import CSS
import './card.scss';

// Import Image
import logoSeeMore from '../../assets/images/seemore.png';

function Card({
  className, index, cardClicked, handleClickCard, ...recipe
}) {
  const { strDrink, strDrinkThumb } = recipe;
  return (
    <div className={className}>
      <div className="card--container">
        <div className="card--container__element">
          <div className="card--container__element__link">
            <div className={`card--container__element__link__content${cardClicked.index === index && cardClicked.clicked === true ? '__show' : ''}`}>
              <button type="button" className="card--container__element__link__content__button" onClick={() => handleClickCard(index)}>
                <img className={`card--container__element__link__content__logo${cardClicked.index === index && cardClicked.clicked === true ? '__show' : ''}`} alt="see full recipe" src={logoSeeMore} />
              </button>
            </div>
          </div>
          <img className={`card--container__element__image${cardClicked.index === index && cardClicked.clicked === true ? '__show' : ''}`} src={strDrinkThumb} alt="" />
          <div className={`card--container__element__image__bottom${cardClicked.index === index && cardClicked.clicked === true ? '__show' : ''}`}>
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
  index: PropTypes.number.isRequired,
  cardClicked: PropTypes.shape({
    clicked: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  handleClickCard: PropTypes.func.isRequired,
};
