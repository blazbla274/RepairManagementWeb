import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar'

class App extends Component {
  state = {
    loged: false
  }

  logInHandler = () => {
    this.setState({
      loged: true
    });
  }

  logOutHandler = () => {
    this.setState({
      loged: false
    });
  }

  render() {
    return (
      <div className="App">
        <LoginForm loged={this.state.loged} loginAction={this.logInHandler}/>
        <NavigationBar loged={this.state.loged} logoutAction={this.logOutHandler}/>
      </div>
    );
  }
}

export default App;
