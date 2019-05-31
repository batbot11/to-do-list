import { OPEN_TODO_FORM, DISPLAY_TODOS, TOGGLE_ISDONE, ADDED_TO_LIST, DELETE_TASK, FILL_FORM, UPDATE_TASK
 } from "../constants/constants";
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
    .then(data => dispatch(addedToList(data)))
}

export const addedToList = data => ({
    type: ADDED_TO_LIST,
    payload: data
})

export const toggleIsDone = todo => ({
    type: TOGGLE_ISDONE,
    payload: todo
})


export const toggle = todoId => dispatch => {
    api.todo.toggleTodo(todoId)
    .then(todo => dispatch(toggleIsDone(todo)))
}

// Delete a task

export const taskDeleted = todoId => ({
    type: DELETE_TASK,
    payload: todoId
})

export const deleteTask = todoId => dispatch => {
    dispatch(taskDeleted(todoId));
    api.todo.deleteTask(todoId);
}

// Edit a Task

export const editTodo = todoId => dispatch => {
    dispatch({type: OPEN_TODO_FORM})
    dispatch({type: FILL_FORM,
    payload: todoId
    })
}

// Update a task

export const updateTodo = (task, todoId) => dispatch => {
    api.todo.updateTodo(task, todoId)
}