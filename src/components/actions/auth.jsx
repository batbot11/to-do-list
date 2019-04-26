import api from "../callbacks/api";
import { USER_SIGNED_UP } from "../constants/constants";
import setAuthToken from "../utils/setAuthToken";

export const userSignedUp = (userData) => ({
    type: USER_SIGNED_UP,
    payload: userData
})

export const signup = (data) => dispatch => {
  return  api.user.signup(data).then(data =>{
    localStorage.setItem("AuthJWT", data.token)
     dispatch(userSignedUp(data));
      setAuthToken(data.token)
    })
}

export const login = data => dispatch => {
  return api.user.login(data).then(data => {
    localStorage.setItem("AuthJWT", data.token)
    dispatch(userSignedUp(data))
    setAuthToken(data.token)
  })
}