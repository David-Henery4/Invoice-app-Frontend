import axios from "axios";
import {updateAccessToken} from "../features/users/usersSlice";

const getRefresh = async (thunkAPI) => {
  try {
    const res = await axios.get(
      "https://invoice-app-backend-b45s.onrender.com/auth/refresh",
      {
        withCredentials: true,
      }
    );
    thunkAPI.dispatch(updateAccessToken(res.data.accessToken));
    return res.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export default getRefresh