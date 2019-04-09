import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Exposition from './components/Exposition/Exposition';

class App extends Component {
  state = {
    loged: false,
    activeBookmark: "Repairs",
    ableBookmarks: ["Repairs", "History", "Settings"]
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

  changeBookmarkHandler = (bookmarkName) => {
    let stateCorrect = false;
    this.state.ableBookmarks.forEach(element => {
      if(element === bookmarkName) {
          stateCorrect = true;
          return;
      }
      console.log("element");
    });
    
    if(stateCorrect)
      this.setState({
        activeBookmark: bookmarkName
      });
  }

  render() {
    return (
      <div className="App">
        <LoginForm loged={this.state.loged} loginAction={this.logInHandler}/>
        <NavigationBar 
          loged={this.state.loged} 
          logoutAction={this.logOutHandler}
          changeBookmarkAction={this.changeBookmarkHandler}/>
        <Exposition 
          loged={this.state.loged} 
          activeBookmark={this.state.activeBookmark} />
      </div>
    );
  }
}

export default App;
