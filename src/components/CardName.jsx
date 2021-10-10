import React from 'react';
import PropTypes from 'prop-types';

const CardName = ({ value, handleChange }) => (
  <label htmlFor="cardName">
    Nome
    <input
      id="cardName"
      name="cardName"
      data-testid="name-input"
      value={ value }
      onChange={ handleChange }
    />
  </label>
);

CardName.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardName;
