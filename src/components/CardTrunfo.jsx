import React from 'react';
import PropTypes from 'prop-types';

const CardTrunfo = ({ value, handleChange }) => (
  <label htmlFor="trunfo">
    Super Trunfo
    <input
      id="trunfo"
      name="trunfo"
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
