import React from 'react';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'Normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.isFormValid = this.isFormValid.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }, file) {
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.name.startsWith('cardAttr')) value = parseInt(value, 10);

    // if (target.name === 'cardImage') value = URL.createObjectURL(file.current.files[0]);

    // if (target.name === 'cardImageName') value = file.current.files[0].name;

    this.setState({
      [target.name]: value,
      isSaveButtonDisabled: this.isFormValid(),
    });
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    console.log('Salvo');
  }

  isFormValid() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (cardName
      && cardDescription
      && cardAttr1
      && cardAttr2
      && cardAttr3
      && cardImage
      && cardRare) {
      console.log('valid');
      return false;
    }
    return true;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          state={ this.state }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
