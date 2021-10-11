import React from 'react';
import PropTypes from 'prop-types';

function SubmitCard({ isSaveButtonDisabled }) {
  return (
    <button
      type="submit"
      data-testid="save-button"
      disabled={ isSaveButtonDisabled }
    >
      Salvar Carta
    </button>
  );
}

SubmitCard.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default SubmitCard;
