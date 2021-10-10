import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <h2 data-testid="name-card">{ cardName }</h2>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <p data-testid="description-card">{ cardDescription }</p>
      <p data-testid="attr1-card">
        Attr01...
        {cardAttr1}
      </p>
      <p data-testid="attr2-card">
        Attr02...
        {cardAttr2}
      </p>
      <p data-testid="attr3-card">
        Attr03...
        {cardAttr3}
      </p>
      <span data-testid="rare-card">{cardRare}</span>
      {cardTrunfo
        && <span data-testid="trunfo-card">Super Trunfo</span>}
    </div>
  );
}

export default Card;
