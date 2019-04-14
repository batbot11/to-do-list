import api from "../callbacks/api";

export const signup = (data) => dispatch => {
    api.user.signup(data)
}