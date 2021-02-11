import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Homepage from "../Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
