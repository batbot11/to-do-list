import { USER_SIGNED_UP } from "../constants/constants";

const initialState = {
    username: "",
    token: "",
    loggedIn: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_SIGNED_UP:
        return {...state, username: action.payload.username, token: action.payload.token, loggedIn: true}
        default: return state
    }
}