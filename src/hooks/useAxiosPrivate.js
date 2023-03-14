import { axiosPrivate } from "../features/axios/baseInstance";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const {user, userAccessToken} = useSelector(store => store.users)
  
  useEffect(() => {

    console.log("PrivateAxios")
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers["Authorization"]){
          config.headers["Authorization"] = `Bearer ${userAccessToken}`;
        }
        return config
      }, (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      // Here we handle the logic for if the access token has expired
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent){
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )


    return () => {
      // REQUEST
      axiosPrivate.interceptors.request.eject(requestIntercept)
      // RESPONSE
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [user,refresh])
  
  return axiosPrivate
}

export default useAxiosPrivate