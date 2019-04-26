import React from "react";
import {connect} from "react-redux";
import {Form, Button} from "semantic-ui-react";
import {addToList} from "../../actions/todoActions";

class TodoForm extends React.Component {

    state = {
        newTodo: ""
    }

    onChange = (event) => {
        this.setState({
            newTodo: {...this.state, newTodo: event.target.value}
        })
    }

    onSubmit = () => {
        this.props.addToList(this.state.newTodo)
    }

    render () {
        return (
            <Form onSubmit = {this.onSubmit} >
                <Form.Field>
                    <label >What's the task?</label>
                    <input type="text"
                    placeholder = "Enter your task here"
                    onChange = {this.onChange}
                    />
                    <Button positive >Submit</Button>
                </Form.Field>
            </Form>
        )
    }
}

export default connect(null, {addToList})(TodoForm);