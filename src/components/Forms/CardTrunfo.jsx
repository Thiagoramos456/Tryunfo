import React from 'react';
import PropTypes from 'prop-types';

const CardTrunfo = ({ value, onInputChange }) => (
  <label htmlFor="cardTrunfo">
    Super Trunfo
    <input
      id="cardTrunfo"
      name="cardTrunfo"
      data-testid="trunfo-input"
      checked={ value }
      onChange={ onInputChange }
      type="checkbox"
    />
  </label>
);

CardTrunfo.propTypes = {
  value: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardTrunfo;
