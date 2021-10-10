import React from 'react';

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

export default SubmitCard;
