import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost3000",
});


export default api;