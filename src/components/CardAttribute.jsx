import React from 'react';
import PropTypes from 'prop-types';

const CardAttribute = ({ value, handleChange, name, attr }) => (
  <label htmlFor={ name }>
    {`Attr ${attr}`}
    <input
      id={ name }
      name={ `attr${attr}Input` }
      data-testid={ `${name}input` }
      value={ value }
      onChange={ handleChange }
      min="0"
      type="number"
    />
  </label>
);

CardAttribute.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
};

export default CardAttribute;
