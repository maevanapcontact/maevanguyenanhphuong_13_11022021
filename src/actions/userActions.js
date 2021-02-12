import * as types from "../constants/UserActionTypes";

export const login = (email, password) => ({
  type: types.LOGIN,
  email,
  password,
});

export const logout = (id) => ({
  type: types.LOGOUT,
  id,
});

export const editProfile = (id, token, firstName, lastName) => ({
  type: types.EDIT_PROFILE,
  id,
  token,
  firstName,
  lastName,
});
