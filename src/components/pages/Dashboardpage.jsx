import React from "react";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import TodoList from "./todos/TodoList";

class Dashboardpage extends React.Component {

    

    render () {
        return (
            <div>
            <h1>To Do List for {this.props.username}</h1>
            <TodoList/>
        </div>
    
        )
    }
}

const mapState = state => ({
    username: state.user.username
})

export default connect(mapState, {logout})(Dashboardpage);