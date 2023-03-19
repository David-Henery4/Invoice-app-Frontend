import { axiosPrivate } from "../features/axios/baseInstance";
import getRefresh from "./getRefreshToken";

const handleInterceptors = (thunkAPI) => {
  axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${
          thunkAPI.getState().users.userAccessToken
        }`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  //
  axiosPrivate.interceptors.response.use(
    (response) => response,
    // Handle the logic for if the access token has expired
    async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 403 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const newAccessToken = await getRefresh(thunkAPI);
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    }
  );
};

export default handleInterceptors


