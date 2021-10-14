import React from 'react';
import PropTypes from 'prop-types';

const CardAttribute = ({ value, onInputChange, name, attr }) => (
  <label className="form-control attr-label" htmlFor={ name }>
    {`Attr ${attr}`}
    <input
      id={ name }
      className="attr-input"
      name={ `cardAttr${attr}` }
      data-testid={ `$attr${name}-input` }
      value={ value }
      onInput={ onInputChange }
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
