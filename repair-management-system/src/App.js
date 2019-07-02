import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Exposition from './components/Exposition/Exposition';
import ThemsBox from './components/ThemsBox/ThemsBox';
import Thems from './components/ThemsBox/Thems';
import homePath from './configuration/configuration';
import Background from './components/Background/Background';
import ActivationForm from './components/ActivationForm/ActivationForm'
import axios from 'axios';

class App extends Component {
  state = {
    loged: false,
    userId: null,
    token: null,
    isActive: false,
    email: null,
    activeBookmark: "Open",
    ableBookmarks: ["Open", "Cars", "History", "Settings"],
    themName: "Blue"
  }

  logInHandler = (login, password, token) => {
    if (!!login && !!password) {
      console.log("loged")
      this.setState({
        loged: true,
        userId: 1,
        email: "Jakisemail@interia.pl",
        isActive: true
      })
    } else if (!!token) {
      axios.get(`${homePath}/user/me`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }).then(response => {
        console.log(response.data.isActive)
        if (response.data.isActive) {
          this.setState({
            loged: true,
            userId: response.data.id,
            email: response.data.usernameOrEmail,
            isActive: true
          })
        } else {
          this.setState({
            loged: true
          })
        }
      }).catch(error => {
          console.log(error);
        })
    }
  }

  logOutHandler = () => {
    this.setState({
      loged: false,
      userId: null,
      token: null,
      isActive: false,
      email: null,
    });
    axios.defaults.headers['Authorization'] = ``;
    window.open("http://localhost:3000","_self")
  }

  changeBookmarkHandler = (bookmarkName) => {
    let stateCorrect = false;
    this.state.ableBookmarks.forEach(element => {
      if (element === bookmarkName) {
        stateCorrect = true;
        return;
      }
    });

    if (stateCorrect)
      this.setState({
        activeBookmark: bookmarkName
      });
  }
  componentWillMount() {
    let token = this.props.history.location.search.split("?token=")[1];
    if (!!token) {
      this.setState({
        token: token
      });
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      this.logInHandler(null, null, token);
    }
  }

  changeThemHandler = (themName) => {
    this.setState({
      themName: themName
    });
  }

  loadThem = (them) => {
    switch (them) {
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
        <Background />
        <LoginForm
          loged={this.state.loged}
          loginAction={this.logInHandler}
          style={style} />
        {!this.state.isActive ?
          <ActivationForm
            style={style}
            loged={this.state.loged}
            logoutAction={this.logOutHandler} /> :
          <div>
            <ThemsBox
              changeThem={this.changeThemHandler} />
            <NavigationBar
              loged={this.state.loged}
              logoutAction={this.logOutHandler}
              bookmarks={this.state.ableBookmarks}
              changeBookmarkAction={this.changeBookmarkHandler}
              style={style} />
            <Exposition
              userId={this.state.userId}
              loged={this.state.loged}
              activeBookmark={this.state.activeBookmark}
              style={style} />
          </div>
        }
      </div>
    );
  }
}

export default App;
