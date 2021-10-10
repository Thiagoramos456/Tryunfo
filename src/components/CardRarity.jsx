import React from 'react';
import PropTypes from 'prop-types';

const CardRarity = ({ value, onInputChange }) => (
  <label htmlFor="cardRare">
    Raridade
    <select
      id="cardRare"
      name="cardRare"
      data-testid="rare-input"
      value={ value }
      onInput={ onInputChange }
      required
    >
      <option select="normal">normal</option>
      <option select="raro">raro</option>
      <option select="muito-raro">muito raro</option>
    </select>
  </label>
);

CardRarity.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardRarity;
