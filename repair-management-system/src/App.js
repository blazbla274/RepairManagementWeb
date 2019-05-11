import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Exposition from './components/Exposition/Exposition';
import ThemsBox from './components/ThemsBox/ThemsBox';

class App extends Component {
  state = {
    loged: false,
    activeBookmark: "Repairs",
    ableBookmarks: ["Repairs", "History", "Settings"],
    themName: "Blue"
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

  changeThemHandler = (themName) => {
    this.setState({
      themName: themName
    });
  }

  loadThem = (them) => {
    switch(them) {
      case "Blue":
      return {
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
      case "Red":
      return {
        fontColor: {
          color: "#b70d0d"
        },
        backgroundColor: {
          backgroundColor: "#b70d0d"
        },
        inputBackgroundColor: {
          backgroundColor: "#ea6464"
        },
        borderColor: {
          borderColor: "#b70d0d"
        }
      }
      case "Pink":
      return {
        fontColor: {
          color: "#d600d6"
        },
        backgroundColor: {
          backgroundColor: "#d600d6"
        },
        inputBackgroundColor: {
          backgroundColor: "#ed5ced"
        },
        borderColor: {
          borderColor: "#d600d6"
        }
      }
      default: this.loadThem("Blue");
    }
  };

  render() {

    let style = this.loadThem(this.state.themName);
    
    return (
      <div className="App">
        <LoginForm 
          loged={this.state.loged} 
          loginAction={this.logInHandler}
          style={style}/>
        <ThemsBox
          changeThem={this.changeThemHandler}/>
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
