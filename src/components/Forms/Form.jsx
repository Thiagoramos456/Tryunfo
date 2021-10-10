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
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form onSubmit={ onSaveButtonClick }>
        <CardName value={ cardName } onInputChange={ onInputChange } />
        <CardDescription value={ cardDescription } onInputChange={ onInputChange } />
        <CardAttributes
          onInputChange={ onInputChange }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
        <ImageInput
          onInputChange={ onInputChange }
          value={ cardImage }
        />
        <CardRarity value={ cardRare } onInputChange={ onInputChange } />
        <CardTrunfo value={ cardTrunfo } onInputChange={ onInputChange } />
        <SubmitCard
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
