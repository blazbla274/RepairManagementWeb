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

    const style = {
      fontColor: {
        color: "#1347d4"
      },
      backgroundColor: {
        backgroundColor: "#1347d4"
      },
      inputBackgroundColor: {
        backgroundColor: "#5582ff"
      },
      borderColor: {
        borderColor: "#1347d4"
      }
    }
    
    return (
      <div className="App">
        <LoginForm 
          loged={this.state.loged} 
          loginAction={this.logInHandler}
          style={style}/>
        <NavigationBar 
          loged={this.state.loged} 
          logoutAction={this.logOutHandler}
          changeBookmarkAction={this.changeBookmarkHandler}
          style={style}/>
        <Exposition 
          loged={this.state.loged} 
          activeBookmark={this.state.activeBookmark} 
          style={style}/>
      </div>
    );
  }
}

export default App;
