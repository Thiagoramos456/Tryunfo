import React from 'react';
import Form from './components/Forms/Form';
import Card from './components/Card';

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

    this.isFormValid = this.validateForm.bind(this);
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
    }, this.validateForm);
  }

  onSaveButtonClick(e) {
    e.preventDefault();
  }

  validateForm() {
    const attrMax = 90;
    const attrMin = 0;
    const attrSumMax = 210;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const fields = [cardName,
      cardDescription,
      cardImage];

    const attrs = [cardAttr1,
      cardAttr2,
      cardAttr3];

    const attrSum = attrs.reduce((acc, num) => acc + num);

    const isFilled = fields.every((field) => field);

    const isAttrsWithinRange = attrs
      .every((attr) => attr <= attrMax && attr >= attrMin);

    const isAttrsSumValid = attrSum <= attrSumMax;

    const isFormValid = isFilled && isAttrsWithinRange && isAttrsSumValid;

    this.setState({
      isSaveButtonDisabled: !isFormValid,
    });
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
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
