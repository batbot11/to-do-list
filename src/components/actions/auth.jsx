import api from "../callbacks/api";
import { USER_SIGNED_UP } from "../constants/constants";

export const userSignedUp = (userData) => ({
    type: USER_SIGNED_UP,
    payload: userData
})

export const signup = (data) => dispatch => {
  return  api.user.signup(data).then(data => dispatch(userSignedUp(data)))
}

export const login = data => dispatch => {
  return api.user.login(data).then(data => dispatch(userSignedUp(data)))
}