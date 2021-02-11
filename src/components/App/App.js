import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
