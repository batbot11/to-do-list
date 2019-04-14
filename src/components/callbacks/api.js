import axios from "axios";

export default {
    user: {
        signup: (data) => axios.post("/api/user/signup", {data}).then(res => res.data),
        login: (data) => axios.post("/api/user/login", {data}).then(res => res.data)
    }
}