import React, { Component } from "react";
import { accounts } from "../../data";
import "./ProfilePage.scss";

import Account from "./Account";

class ProfilePage extends Component {
  render() {
    return (
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
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
