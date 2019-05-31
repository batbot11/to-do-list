import React from "react";
import {connect} from "react-redux";
import {Form, Button} from "semantic-ui-react";
import {addToList, updateTodo} from "../../actions/todoActions";

class TodoForm extends React.Component {

    state = {
        data: {
            newTodo: ""
        }
    }

    componentDidMount() {
        this.props.selectedTodo && this.setState({
            data: {
                newTodo: this.props.selectedTodo.todo
            }
        })
    }    

    onChange = (event) => {
      this.setState({
          data: {...this.state.data, newTodo: event.target.value}
      })
    }

    onSubmit = () => {
            this.props.addToList(this.state.data)
    }

    render () {
        return (
            <Form onSubmit = {this.onSubmit} >
                <Form.Field>
                    <label >What's the task?</label>
                    <input type="text"
                    placeholder = "Enter your task here"
                    name = "newTodo"
                    value = {this.state.data.newTodo}
                    onChange = {this.onChange}
                    />
                    <Button positive >Submit</Button>
                </Form.Field>
            </Form>
        )
    }
}

const mapState = state => ({
    openTodoForm: state.todo.openTodoForm,
    selectedTodo: state.todo.selectedTodo
})

export default connect(mapState, {addToList, updateTodo})(TodoForm);