import axios from "axios"

const usersPost = axios.create({
  baseURL: "http://localhost:3500",
});

export default usersPost