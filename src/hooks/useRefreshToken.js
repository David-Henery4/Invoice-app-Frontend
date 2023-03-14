import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {updateAccessToken} from "../features/users/usersSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch()
  //
  const refresh = async () => {
    try {
      const res = await axios.get("http://localhost:3500/auth/refresh", {
        withCredentials: true,
      });
      dispatch(updateAccessToken(res.data.accessToken))
      return res.data.accessToken
    } catch (error) {
      console.log(error)
    }
  }
  //
  return (
    refresh
  )
}

export default useRefreshToken