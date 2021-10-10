import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ImageInput = ({ handleFileInput }) => {
  const fileInput = useRef(null);

  return (
    <label htmlFor="image">
      Imagem
      <input
        id="image"
        name="image"
        data-testid="image-input"
        type="file"
        onInput={ (e) => { handleFileInput(e, fileInput); } }
      />
    </label>
  );
};

ImageInput.propTypes = {
  handleFileInput: PropTypes.func.isRequired,
};

export default ImageInput;
