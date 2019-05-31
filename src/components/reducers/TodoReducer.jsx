import { OPEN_TODO_FORM, DISPLAY_TODOS, TOGGLE_ISDONE, ADDED_TO_LIST, DELETE_TASK, FILL_FORM, UPDATE_TASK, REMOVE_TODOS } from "../constants/constants";

const initialState = {
    openTodoForm: false,
    todos: [],
    selectedTodo: null
}



export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_TODO_FORM:
        return {...state, openTodoForm: true}
        case DISPLAY_TODOS:
        return {...state, todos: action.payload};
        case ADDED_TO_LIST:
        return {...state, openTodoForm: false,
        todos: [...state.todos, action.payload]
        }
        case TOGGLE_ISDONE:
        return {...state,
        todos: [...state.todos.map(todo => {
            if (todo._id !== action.payload._id) return todo
            else return action.payload
        })]
        }
       case DELETE_TASK:
        return {...state, 
        todos: [...state.todos.filter(todo => todo._id !== action.payload)]
        }
        case FILL_FORM:
            return {...state,
            selectedTodo: {...state.todos.filter(todo => todo._id === action.payload)[0]}
        }
        case REMOVE_TODOS:
        return initialState;
        default: return state
    }
}