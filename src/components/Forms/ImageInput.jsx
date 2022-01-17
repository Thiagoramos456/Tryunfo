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
      <label className="form-control" htmlFor="cardImage">
        Imagem
        <input
          id="cardImage"
          name="cardImage"
          data-testid="image-input"
          value={ value }
          placeholder="Link da imagem"
          onChange={ onInputChange }
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
