import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  state = {
    loged: false
  }

  render() {
    return (
      <div className="App">
        <LoginForm loged={this.state.loged}/>
      </div>
    );
  }
}

export default App;
