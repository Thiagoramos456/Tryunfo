import React from 'react';
import PropTypes from 'prop-types';

const CardDescription = ({ value, handleChange }) => (
  <label htmlFor="description">
    Descrição
    <textarea
      id="description"
      name="description"
      data-testid="description-input"
      value={ value }
      onChange={ handleChange }
    />
  </label>
);

CardDescription.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardDescription;