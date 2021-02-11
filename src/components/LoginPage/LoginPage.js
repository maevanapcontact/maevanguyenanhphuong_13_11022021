import React, { Component } from "react";
import "./LoginPage.scss";

class LoginPage extends Component {
  render() {
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <span className="fa fa-user-circle sign-in-icon"></span>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    );
  }
}

export default LoginPage;
