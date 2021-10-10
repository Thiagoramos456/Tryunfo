import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    const { value, onInputChange } = this.props;
    return (
      <label htmlFor="cardImage">
        Imagem
        <input
          id="cardImage"
          name="cardImage"
          data-testid="image-input"
          value={ value }
          onChange={ onInputChange }
          required
        />
      </label>

    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ImageInput;
