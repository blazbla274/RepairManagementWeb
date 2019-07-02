import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:token" component={App} />
        </div>
      </Router>
    );
  }
}

export default MainRouter;
