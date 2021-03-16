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
    this.state = {
      firstnameInput: "",
      lastnameInput: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = this.props.user.token;
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const { firstName, lastName } = res.data.body;
        this.props.editProfile(firstName, lastName);
      })
      .catch((err) => {
        console.error(err);
      });
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
    const { firstnameInput, lastnameInput } = this.state;
    const token = this.props.user.token;

    const data = {
      firstName: firstnameInput,
      lastName: lastnameInput,
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.props.editProfile(firstnameInput, lastnameInput);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { firstName, lastName } = this.props.user;

    return (
      <main className="main bg-dark">
        <header className="header">
          <h2>
            Welcome back
            <span className="header-name">{`${firstName} ${lastName}!`}</span>
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="header-form-group">
              <label className="sr-only" htmlFor="firstname">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                placeholder={firstName}
                name="firstnameInput"
                onChange={this.handleInputChange}
              />
              <label className="sr-only" htmlFor="lastname">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder={lastName}
                name="lastnameInput"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="header-form-group">
              <input className="edit-button" type="submit" value="Save" />
              <input className="edit-button" type="button" value="Cancel" />
            </div>
          </form>
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

const mstp = (state) => ({
  user: state.user,
});

const mdtp = (dispatch) => {
  return bindActionCreators(
    {
      editProfile,
    },
    dispatch
  );
};

export default connect(mstp, mdtp)(ProfilePage);
