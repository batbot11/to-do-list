import React from "react";
import { Segment, Button, Checkbox } from "semantic-ui-react";

class TodoItem extends React.Component {
    
    toggle = () => {
        this.props.onToggle(this.props.todoId)
    }

    render () {
        return (
            <Segment>
                {this.props.task} 
                <Checkbox label="Done" checked={this.props.isDone} onClick = {this.toggle} ></Checkbox> <br/>
                <Button>Edit</Button> <Button negative >Delete</Button>
           </Segment>
        )
    }
}





export default TodoItem;