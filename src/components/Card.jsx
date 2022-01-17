import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_CARD_IMG = 'https://www.ebrink.com.br/media/catalog/category/super-trunfo-logo.jpg';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = props;
  return (
    <div className="trunfo-card">
      <div className="card-body">
        <div className="title-area">
          <h2 className="title-card" data-testid="name-card">{ cardName }</h2>
        </div>
        <img
          className="card-image"
          data-testid="image-card"
          src={ cardImage || DEFAULT_CARD_IMG }
          alt={ cardName }
        />
        <div className="description-area">
          <p
            className="description-card"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
        </div>
        <p className="attr-card" data-testid="attr1-card">
          Attr01 .....................
          {cardAttr1}
        </p>
        <p className="attr-card" data-testid="attr2-card">
          Attr02 .....................
          {cardAttr2}
        </p>
        <p className="attr-card" data-testid="attr3-card">
          Attr03 .....................
          {cardAttr3}
        </p>
        <div className="rare-area">
          <span className="rare-card" data-testid="rare-card">{cardRare}</span>
          {cardTrunfo
            && (
              <span
                className="super-trunfo-card"
                data-testid="trunfo-card"
              >
                Super Trunfo
              </span>
            )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
