import React, { Component } from "react";
import { accounts } from "../../data";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { editProfile } from "../../actions/userActions";
import axios from "axios";
import "./ProfilePage.scss";

import Account from "./Account";

class ProfilePage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjhkYmM1M2E1N2MwMWFhNGViYjUyMiIsImlhdCI6MTYxMzMwNjM2MywiZXhwIjoxNjEzMzkyNzYzfQ.b0RgfyeuopH7naxC9l2ehXpLy4cqCBFkOpVwI76-oxM";
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.props.user);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjhkYmM1M2E1N2MwMWFhNGViYjUyMiIsImlhdCI6MTYxMzMwNjM2MywiZXhwIjoxNjEzMzkyNzYzfQ.b0RgfyeuopH7naxC9l2ehXpLy4cqCBFkOpVwI76-oxM";

    const data = {
      firstName: "Maeva",
      lastName: "NGUYEN",
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.props.editProfile("id", token, data.firstName, data.lastName);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <form onSubmit={this.handleSubmit}>
              <div className="header-form-group">
                <label className="sr-only" htmlFor="firstname">
                  Firstname
                </label>
                <input type="text" id="firstname" placeholder="Tony" />
                <label className="sr-only" htmlFor="lastname">
                  Lastname
                </label>
                <input type="text" id="lastname" placeholder="Jarvis" />
              </div>
              <div className="header-form-group">
                <input className="edit-button" type="submit" value="Save" />
                <input className="edit-button" type="button" value="Cancel" />
              </div>
            </form>
          </h1>
        </header>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((elt) => (
          <Account
            key={elt.id}
            title={elt.title}
            amount={elt.amount}
            description={elt.description}
          />
        ))}
      </main>
    );
  }
}

const mstp = state => ({
  user: state.user,
});

const mdtp = dispatch => {
  return bindActionCreators({
    editProfile,
  }, dispatch)
};

export default connect(mstp, mdtp)(ProfilePage);
