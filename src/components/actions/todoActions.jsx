import { OPEN_TODO_FORM, DISPLAY_TODOS, TOGGLE_ISDONE } from "../constants/constants";
import api from "../callbacks/api";

export const addnewtodo = () => (dispatch) => dispatch({type: OPEN_TODO_FORM});

export const getTodos = () => dispatch => {
    api.todo.getTodos()
    .then(data => dispatch(displayTodos(data)))
}

export const displayTodos = (data) => ({
    type: DISPLAY_TODOS,
    payload: data
})

export const addToList = newTodo => dispatch => {
    api.todo.addTodo(newTodo)
}

export const toggleIsDone = todo => ({
    type: TOGGLE_ISDONE,
    payload: todo
})


export const toggle = todoId => dispatch => {
    api.todo.toggleTodo(todoId)
    .then(todo => dispatch(toggleIsDone(todo)))

}