import React from "react";
import { Segment, Button, Checkbox } from "semantic-ui-react";

class TodoItem extends React.Component {
    
    toggle = () => {
        this.props.onToggle(this.props.todoId)
    }

    edit = () => {
        this.props.editTodo(this.props.todoId)
    }

    delete = () => this.props.deleteTodo(this.props.todoId)

    render () {
        return (
            <Segment>
                {this.props.task} 
                <Checkbox label="Done" checked={this.props.isDone} onClick = {this.toggle}  ></Checkbox> <br/>
                <Button onClick = {this.edit} >Edit</Button> <Button negative onClick = {this.delete} >Delete</Button>
           </Segment>
        )
    }
}


export default TodoItem;