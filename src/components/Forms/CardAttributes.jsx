import React from 'react';
import PropTypes from 'prop-types';
import CardAttribute from './CardAttribute';

function CardAttributes({ onInputChange, cardAttr1, cardAttr2, cardAttr3 }) {
  return (
    <div>
      <CardAttribute
        value={ cardAttr1 }
        onInputChange={ onInputChange }
        name="cardAttr1"
        attr={ 1 }
      />
      <CardAttribute
        value={ cardAttr2 }
        onInputChange={ onInputChange }
        name="cardAttr2"
        attr={ 2 }
      />
      <CardAttribute
        value={ cardAttr3 }
        onInputChange={ onInputChange }
        name="cardAttr3"
        attr={ 3 }
      />
    </div>
  );
}

CardAttributes.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
};

export default CardAttributes;
