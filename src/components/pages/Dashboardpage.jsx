import React from "react";
import {connect} from "react-redux";
import TodoList from "./todos/TodoList";

const Dashboardpage = ({username}) => (
    <div>
        <h1>To Do List for {username}</h1>
        <TodoList/>
    </div>
)

const mapState = state => ({
    username: state.user.username
})

export default connect(mapState)(Dashboardpage);