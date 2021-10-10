import React from 'react';
import PropTypes from 'prop-types';

const CardRarity = ({ value, handleChange }) => (
  <label htmlFor="rarity">
    Descrição
    <select
      id="rarity"
      name="rarity"
      data-testid="rare-input"
      value={ value }
      onInput={ handleChange }
    >
      <option select="normal">normal</option>
      <option select="raro">raro</option>
      <option select="muito-raro">muito raro</option>
    </select>
  </label>
);

CardRarity.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardRarity;
