import React from 'react';
import PropTypes from 'prop-types';

const CardName = ({ value, onInputChange }) => (
  <label htmlFor="cardName">
    Nome
    <input
      id="cardName"
      name="cardName"
      data-testid="name-input"
      value={ value }
      onChange={ onInputChange }
      required
    />
  </label>
);

CardName.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
