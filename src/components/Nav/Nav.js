import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./index.html">
          <img
            className="main-nav-logo-image"
            src="./images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="./sign-in.html">
            <span className="fa fa-user-circle"></span>
            Sign In
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
