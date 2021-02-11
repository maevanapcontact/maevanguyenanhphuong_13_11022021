import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Homepage from "../Homepage/Homepage";
import LoginPage from "../LoginPage/LoginPage";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
