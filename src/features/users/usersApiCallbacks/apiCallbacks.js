import formatErrorMsg from "../../../reusableFunctions/formatErrorMsg";
import { addInvoicesFromLogin, clearInvoicesAfterLogout } from "../../invoiceData/invoiceDataSlice";
import usersPost from "../../axios/baseInstance";

const handleRegister = async (userData, thunkAPI) => {
  try {
    const newUser = await usersPost.post("/users", userData);
    return newUser.data;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
  }
};

const handleLogin = async (user, thunkAPI) => {
  try {
    const loggedInUser = await usersPost.post("/auth", user);
    // WILL NEED TO GET USERS INVOICES!
    thunkAPI.dispatch(addInvoicesFromLogin(loggedInUser.data.invoices));
    return loggedInUser.data.user;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
  }
};

const handleLogout = async (user, thunkAPI) => {
  try {
    const userLoggedOut = await usersPost.post("/auth/logout");
    thunkAPI.dispatch(clearInvoicesAfterLogout());
    return userLoggedOut.data;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
  }
};

export {handleRegister, handleLogin, handleLogout}