import axios from "axios"


const BASE_URL = "http://localhost:3500";

const usersPost = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers:{"Content-Type": "application/json"}
});



export default usersPost