import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";
import jwt_decode from "jwt-decode";
import './index.css';
import App from './App.jsx';
import UserReducer from "./components/reducers/UserReducer";
import TodoReducer from "./components/reducers/TodoReducer";
import * as serviceWorker from './serviceWorker';
import setAuthToken from "./components/utils/setAuthToken";
import { userSignedUp } from './components/actions/auth';

const rootReducer = combineReducers({user: UserReducer, todo: TodoReducer});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Set to current user on reload
if (localStorage.AuthJWT) {
    setAuthToken(localStorage.AuthJWT);
    const decode = jwt_decode(localStorage.AuthJWT);
    store.dispatch(userSignedUp(decode))
}

ReactDOM.render(
<Provider store = {store} >    
<BrowserRouter>
<Route component = {App}  />
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
