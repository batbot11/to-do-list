import axios from "axios";

export default {
    user: {
        signup: (data) => axios.post("/api/user/signup", {data}).then(res => res.data),
        login: (data) => axios.post("/api/user/login", {data}).then(res => res.data)
    },
    todo: {
        addTodo: (newTodo) => axios.post("/api/todo/addTodo", {newTodo}).then(res => res.data),
        getTodos: () => axios.get("/api/todo").then(res => res.data),
        toggleTodo: (todoId) => axios.post("/api/todo/toggleTodo", {todoId}).then(res => res.data),
        deleteTask: (todoId) => axios.delete("/api/todo/deleteTask", {data: {todoId}}),
        updateTodo: (task, todoId) => axios.post("/api/todo/updateTodo", {task, todoId})
    }
}