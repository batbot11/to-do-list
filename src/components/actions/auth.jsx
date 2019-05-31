import api from "../callbacks/api";
import { USER_SIGNED_UP, REMOVE_TODOS, USER_LOGGED_OUT } from "../constants/constants";
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

// User Logs out



export const logout = () => dispatch => {
  localStorage.removeItem("AuthJWT")
  dispatch({type: REMOVE_TODOS})
  return dispatch({type: USER_LOGGED_OUT})
}