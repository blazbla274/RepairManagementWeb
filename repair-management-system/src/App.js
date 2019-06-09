import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Exposition from './components/Exposition/Exposition';
import ThemsBox from './components/ThemsBox/ThemsBox';
import Thems from './components/ThemsBox/Thems';
import Background from './components/Background/Background';

class App extends Component {
  state = {
    loged: false,
    userId: null,
    activeBookmark: "Repairs",
    ableBookmarks: ["Cars", "History", "Settings"],
    themName: "Blue"
  }

  logInHandler = () => {
    this.setState({
      loged: true,
      userId: 1
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
      return Thems.blue
      case "Red":
      return Thems.red
      case "Pink":
      return Thems.pink
      default: this.loadThem("Blue");
    }
  };

  render() {

    let style = this.loadThem(this.state.themName);
    
    return (
      <div className="App">
        <Background/>
        <LoginForm 
          loged={this.state.loged} 
          loginAction={this.logInHandler}
          style={style}/>
        <ThemsBox
          changeThem={this.changeThemHandler}/>
        <NavigationBar 
          loged={this.state.loged} 
          logoutAction={this.logOutHandler}
          bookmarks={this.state.ableBookmarks}
          changeBookmarkAction={this.changeBookmarkHandler}
          style={style}/>
        <Exposition 
          userId={this.state.userId}
          loged={this.state.loged} 
          activeBookmark={this.state.activeBookmark} 
          style={style}/>
      </div>
    );
  }
}

export default App;
