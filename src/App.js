import React from 'react';
import Form from './components/Form';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr01Input: 0,
  attr02Input: 0,
  attr03Input: 0,
  image: '',
  rarity: 'Normal',
  trunfo: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;

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
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          state={ this.state }
          handleChange={ this.handleChange }
          handleFileInput={ this.handleFileInput }
        />
      </div>
    );
  }
}

export default App;
