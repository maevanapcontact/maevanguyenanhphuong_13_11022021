import React, { Component } from "react";
import "./Account.scss";

class Account extends Component {
  render() {
    const { title, amount, description } = this.props;

    return (
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    );
  }
}

export default Account;
