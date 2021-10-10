import React from 'react';
import PropTypes from 'prop-types';

const CardAttribute = ({ value, onInputChange, name, attr }) => (
  <label htmlFor={ name }>
    {`Attr ${attr}`}
    <input
      id={ name }
      name={ `cardAttr${attr}` }
      data-testid={ `$attr${name}-input` }
      value={ value }
      onInput={ onInputChange }
      min="0"
      type="number"
      required
    />
  </label>
);

CardAttribute.propTypes = {
  value: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attr: PropTypes.number.isRequired,
};

export default CardAttribute;
