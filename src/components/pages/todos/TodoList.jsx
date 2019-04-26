import React from "react";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import {addnewtodo, getTodos, toggle} from "../../actions/todoActions";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    componentDidMount () {
        this.props.getTodos();
    }
     
     
      onToggle = (todoId) => {
        this.props.toggle(todoId)
      } 


    render () {
        
        return (
            <div>
            <Button positive onClick={this.props.addnewtodo} >Add a new To-do</Button>
            {this.props.openTodoForm && <TodoForm/>}
          {this.props.todos.length > 0 && this.props.todos.map(singleTodo => 
          <TodoItem key = {singleTodo._id} task = {singleTodo.todo} isDone = {singleTodo.isDone}
          todoId = {singleTodo._id}
          onToggle = {this.onToggle}
          /> 
          )}
        </div>
        )
    }
}


const mapState = state => ({
    openTodoForm: state.todo.openTodoForm,
    todos: state.todo.todos
})

export default connect(mapState, {addnewtodo, getTodos, toggle})(TodoList);