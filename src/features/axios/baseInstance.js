import axios from "axios"
// import {store} from "../../store";

// const accessToken = store.getState().users.accessToken
const BASE_URL = "http://localhost:3500";

// console.log(accessToken)

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