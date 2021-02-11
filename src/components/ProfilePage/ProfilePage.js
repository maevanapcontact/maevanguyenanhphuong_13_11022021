import React, { Component } from "react";
import { accounts } from "../../data";
import axios from "axios";
import "./ProfilePage.scss";

import Account from "./Account";

class ProfilePage extends Component {
  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjU2YWQ2MGUwOGQ3MmYzNDZjZTg1MiIsImlhdCI6MTYxMzA3MDE2OCwiZXhwIjoxNjEzMTU2NTY4fQ.ADHV0zdwDeoyXYXbqwjCUXJACsK3mvlCCojIkSq5iZM";
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjU2YWQ2MGUwOGQ3MmYzNDZjZTg1MiIsImlhdCI6MTYxMzA3MDE2OCwiZXhwIjoxNjEzMTU2NTY4fQ.ADHV0zdwDeoyXYXbqwjCUXJACsK3mvlCCojIkSq5iZM";

    const data = {
      firstName: "Maeva",
      lastName: "NGUYEN",
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <form onSubmit={this.handleSubmit}>
              <label className="sr-only" htmlFor="firstname">
                Firstname
              </label>
              <input type="text" id="firstname" />
              <label className="sr-only" htmlFor="lastname">
                Lastname
              </label>
              <input type="text" id="lastname" />
              <input type="submit" value="Save" />
            </form>
          </h1>
          <button className="edit-button">Edit Name</button>
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

export default ProfilePage;
