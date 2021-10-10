import React from 'react';
import PropTypes from 'prop-types';

const CardTrunfo = ({ value, handleChange }) => (
  <label htmlFor="cardTrunfo">
    Super Trunfo
    <input
      id="cardTrunfo"
      name="cardTrunfo"
      data-testid="trunfo-input"
      checked={ value }
      onChange={ handleChange }
      type="checkbox"
    />
  </label>
);

CardTrunfo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardTrunfo;
