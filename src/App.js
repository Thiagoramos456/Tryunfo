import React from 'react';
import Form from './components/Form';
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
  hasTrunfo: false,
  searchName: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(INITIAL_STATE, { cardList: [] });
    this.isFormValid = this.validateForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
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
    this.saveCard();
  }

  resetForm() {
    const { cardList } = this.state;
    const oldCardList = [...cardList];
    const newState = INITIAL_STATE;

    newState.cardList = oldCardList;
    this.setState(newState, this.validateTrunfo);
  }

  saveCard() {
    const card = {
      ...this.state,
    };
    delete card.cardList;
    delete card.isSaveButtonDisabled;
    delete card.hasTrunfo;

    this.setState((state) => ({
      cardList: [...state.cardList, card],
    }), this.resetForm);
  }

  removeCard({ target }) {
    const { cardList } = this.state;
    const cardName = target.name;
    const updatedCardList = cardList.filter((card) => card.cardName !== cardName);
    this.setState({
      cardList: updatedCardList,
    }, this.validateTrunfo);
  }

  validateTrunfo() {
    const { cardList } = this.state;
    const hasTrunfoCheck = cardList.some((card) => card.cardTrunfo);

    this.setState({
      hasTrunfo: hasTrunfoCheck,
    });
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
      cardList,
      hasTrunfo,
      searchName,
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
          hasTrunfo={ hasTrunfo }
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
        <div>
          <h2>Todas as cartas</h2>
          <h3>Filtros de Busca</h3>
          <input
            data-testid="name-filter"
            placeholder="Nome da carta"
            onInput={ this.onInputChange }
            name="searchName"
            value={ searchName }
          />
          { cardList.filter((card) => card.cardName.toLowerCase()
            .includes(searchName.toLowerCase()))
            .map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  onClick={ this.removeCard }
                  name={ card.cardName }
                  type="button"
                >
                  Excluir

                </button>
              </div>
            ))}
        </div>
      </div>

    );
  }
}

export default App;
