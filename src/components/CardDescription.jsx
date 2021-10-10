import React from 'react';
import PropTypes from 'prop-types';

const CardDescription = ({ value, onInputChange }) => (
  <label htmlFor="cardDescription">
    Descrição
    <textarea
      id="cardDescription"
      name="cardDescription"
      data-testid="description-input"
      value={ value }
      onChange={ onInputChange }
      required
    />
  </label>
);

CardDescription.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardDescription;
