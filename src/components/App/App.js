import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "../Nav/Nav";
import Homepage from "../Homepage/Homepage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import SignupPage from "../SignupPage/SignupPage";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
