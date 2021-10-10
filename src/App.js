import React from 'react';
import Form from './components/Form';

class App extends React.Component {
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
