import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginPage from "../components/LoginPage/LoginPage";
import * as userActions from "../actions/userActions";

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

const UserLogin = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default UserLogin;
