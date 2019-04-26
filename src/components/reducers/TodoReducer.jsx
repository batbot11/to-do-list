import { OPEN_TODO_FORM, DISPLAY_TODOS, TOGGLE_ISDONE } from "../constants/constants";

const initialState = {
    openTodoForm: false,
    todos: []
}



export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_TODO_FORM:
        return {...state, openTodoForm: true}
        case DISPLAY_TODOS:
        return {...state, todos: action.payload};
        case TOGGLE_ISDONE:
        return {...state,
        todos: [...state.todos.map(todo => {
            if (todo._id !== action.payload._id) return todo
            else return action.payload
        })]
        }
       
        default: return state
    }
}