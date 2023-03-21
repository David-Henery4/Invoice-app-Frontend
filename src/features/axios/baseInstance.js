import axios from "axios"


const BASE_URL = "https://invoice-app-backend-b45s.onrender.com";

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