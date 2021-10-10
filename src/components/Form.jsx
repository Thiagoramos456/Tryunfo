import React from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName';
import CardDescription from './CardDescription';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';
import CardRarity from './CardRarity';
import CardTrunfo from './CardTrunfo';
import SubmitCard from './SubmitCard';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'Normal',
  cardTrunfo: false,
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.name);
    this.setState({
      [target.name]: value,
    });
  }

  handleFileInput({ target }) {
    this.setState({
      [target.name]: URL.createObjectURL(target.files[0]),
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <form>
        <CardName value={ cardName } handleChange={ this.handleChange } />
        <CardDescription value={ cardDescription } handleChange={ this.handleChange } />
        <CardAttributes handleChange={ this.handleChange } state={ this.state } />
        <ImageInput
          handleChange={ this.handleChange }
          handleFileInput={ this.handleFileInput }
          value={ cardImage }
        />
        <CardRarity value={ cardRare } handleChange={ this.handleChange } />
        <CardTrunfo value={ cardTrunfo } handleChange={ this.handleChange } />
        <SubmitCard />
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  rarity: PropTypes.string,
  trunfo: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleFileInput: PropTypes.func.isRequired,
};

export default Form;
