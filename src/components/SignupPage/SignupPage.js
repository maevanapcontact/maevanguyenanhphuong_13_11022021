import React, { Component } from "react";
import axios from "axios";
import "./SignupPage.scss";

class SignupPage extends Component {
  handleSubmit(evt) {
    evt.preventDefault();

    const data = {
      email: "john@doe.com",
      password: "passjohn",
      firstName: "John",
      lastName: "Doe",
    };

    axios
      .post("http://localhost:3001/api/v1/user/signup", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="firstname">Firstname</label>
        <input type="text" id="firstname" />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" />
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}

export default SignupPage;
