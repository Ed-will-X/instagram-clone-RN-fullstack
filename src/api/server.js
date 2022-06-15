import axios from "axios";

export default axios.create({
    baseURL: "https://varsel-instagram-rest-api.herokuapp.com"
})