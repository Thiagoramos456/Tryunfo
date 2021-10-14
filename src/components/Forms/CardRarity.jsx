import React from 'react';
import PropTypes from 'prop-types';

const CardRarity = ({ value, onInputChange }) => (
  <label className="form-control" htmlFor="cardRare">
    Raridade
    <select
      id="cardRare"
      className="form-input-select"
      name="cardRare"
      data-testid="rare-input"
      value={ value }
      onInput={ onInputChange }
      required
    >
      <option value="normal">normal</option>
      <option value="raro">raro</option>
      <option value="muito raro">muito raro</option>
    </select>
  </label>
);

CardRarity.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardRarity;
