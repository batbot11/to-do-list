import axios from "axios";

export default {
    user: {
        signup: (data) => axios.post("/api/user/signup", {data})
    }
}