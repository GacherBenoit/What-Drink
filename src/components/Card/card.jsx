// Import NPM
import { React } from 'react';
import PropTypes from 'prop-types';

// Import CSS
import './card.scss';

// Import Image
import logoSeeMore from '../../assets/images/seemore.png';
import ingredientIcon from '../../assets/images/ingredients.png';

function Card({
  className, index, cardClicked, handleClickCard, ...recipe
}) {
  const { strDrink, strDrinkThumb } = recipe;
  console.log(recipe)
  return (
    <div className={className}>
      <div className="card--container">
        <div className="card--container__element">
          <div className={`card--container__element__ingredient${cardClicked.index === index && cardClicked.clicked === true ? '__show' : ''}`}>
            <h4 className="card--container__element__ingredient__title">Ingredient List:</h4>
            {recipe.strIngredient1 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient1}</p>
            </div>
            )}
            {recipe.strIngredient2 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient2}</p>
            </div>
            )}
            {recipe.strIngredient3 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient3}</p>
            </div>
            )}
            {recipe.strIngredient4 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient4}</p>
            </div>
            )}
            {recipe.strIngredient5 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient5}</p>
            </div>
            )}
            {recipe.strIngredient6 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient6}</p>
            </div>
            )}
            {recipe.strIngredient7 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient7}</p>
            </div>
            )}
            {recipe.strIngredient8 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient8}</p>
            </div>
            )}
            {recipe.strIngredient9 && (
            <div className="card--container__element__ingredient__list">
              <img className="card--container__element__ingredient__icon" src={ingredientIcon} alt="ingredient icons" />
              <p className="card--container__element__ingredient__element">{recipe.strIngredient9}</p>
            </div>
            )}
          </div>
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
