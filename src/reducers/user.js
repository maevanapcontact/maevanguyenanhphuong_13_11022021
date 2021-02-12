import { IS_LOGGED_OUT } from "../constants/logStatus";
import { LOGIN, LOGOUT, EDIT_PROFILE } from "../constants/UserActionTypes";

const user = (state = IS_LOGGED_OUT, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        logStatus: true,
      };
    case LOGOUT:
      return IS_LOGGED_OUT;
    case EDIT_PROFILE:
      if (state.id === action.id && state.token === action.token)
        return {
          ...state,
          firstName: action.firstname ? action.firstName : state.firstName,
          lastName: action.lastName ? action.lastName : state.lastName,
        };
      else return state;
    default:
      return state;
  }
};

export default user;
