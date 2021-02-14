import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../../actions/userActions";
import axios from "axios";
import "./LoginPage.scss";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      passwordInput: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { emailInput, passwordInput } = this.state;

    const user = {
      email: emailInput,
      password: passwordInput,
    };

    axios
      .post("http://localhost:3001/api/v1/user/login", user)
      .then((res) => {
        this.props.login(emailInput, passwordInput);
        console.log(res);
        console.log(this.props.user);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <span className="fa fa-user-circle sign-in-icon"></span>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="emailInput" onChange={this.handleInputChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="passwordInput" onChange={this.handleInputChange} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" className="sign-in-button" value="Sign in" />
          </form>
        </section>
      </main>
    );
  }
}

const mstp = state => ({
  user: state.user,
});

const mdtp = dispatch => {
  return bindActionCreators({
    login,
  }, dispatch)
};

export default connect(mstp, mdtp)(LoginPage);
