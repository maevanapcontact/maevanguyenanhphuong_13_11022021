import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/userActions";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {!this.props.user.logStatus ? (
          <div>
            <Link className="main-nav-item" to="/login">
              <span className="fa fa-user-circle"></span>
              Sign In
            </Link>
          </div>
        ) : (
          <div className="main-nav-logout">
            <span className="fas fa-user main-nav-user"></span>
            <span className="main-nav-name">Tony</span>
            <Link className="main-nav-item" to="/" onClick={() => this.props.logout("id")}>
              <span className="fas fa-sign-out-alt main-nav-out"></span>
              Sign out
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

const mstp = state => ({
  user: state.user,
});

const mdtp = dispatch => {
  return bindActionCreators({
    logout,
  }, dispatch)
};

export default connect(mstp, mdtp)(Nav);
