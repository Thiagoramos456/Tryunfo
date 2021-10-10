import React from 'react';
import PropTypes from 'prop-types';

const CardName = ({ value, handleChange }) => (
  <label htmlFor="name">
    Nome
    <input
      id="name"
      name="name"
      placeholder="Digite o nome da carta"
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
