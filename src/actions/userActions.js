import * as types from "../constants/UserActionTypes";

export const login = (email, password, token) => ({
  type: types.LOGIN,
  email,
  password,
  token,
});

export const logout = (id) => ({
  type: types.LOGOUT,
  id,
});

export const editProfile = (firstName, lastName) => ({
  type: types.EDIT_PROFILE,
  firstName,
  lastName,
});
