import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
