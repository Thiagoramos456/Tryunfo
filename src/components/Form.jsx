import React from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName';
import CardDescription from './CardDescription';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';
import CardRarity from './CardRarity';
import CardTrunfo from './CardTrunfo';
import SubmitCard from './SubmitCard';

class Form extends React.Component {
  render() {
    const { handleChange, handleFileInput, state } = this.props;
    return (
      <form>
        <CardName value={ state.name } handleChange={ handleChange } />
        <CardDescription
          value={ state.description }
          handleChange={ handleChange }
        />
        <CardAttributes handleChange={ handleChange } state={ state } />
        <ImageInput
          handleChange={ handleChange }
          handleFileInput={ handleFileInput }
          value={ state.image }
        />
        <CardRarity
          value={ state.rarity }
          handleChange={ handleChange }
        />
        <CardTrunfo
          value={ state.trunfo }
          handleChange={ handleChange }
        />
        <SubmitCard />
      </form>
    );
  }
}

Form.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    rarity: PropTypes.string,
    trunfo: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFileInput: PropTypes.func.isRequired,
};

export default Form;
