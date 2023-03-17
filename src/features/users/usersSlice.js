import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import usersPost from "../axios/baseInstance";
import { addInvoicesFromLogin, clearInvoicesAfterLogout } from "../invoiceData/invoiceDataSlice";

const initialState = {
  user: null,
  userAccessToken: null,
  isLoading: false,
  isError: false,
};

export const register = createAsyncThunk(
  "register/user",
  async (userData, thunkAPI) => {
    try {
      const newUser = await usersPost.post("/users", userData);
      return newUser.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error(error);
      console.log(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("login/user", async (user, thunkAPI) => {
  try {
    const loggedInUser = await usersPost.post("/auth", user);
    // WILL NEED TO GET USERS INVOICES!
    thunkAPI.dispatch(addInvoicesFromLogin(loggedInUser.data.invoices));
    return loggedInUser.data.user;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk(
  "logout/user",
  async (user, thunkAPI) => {
    try {
      const userLoggedOut = await usersPost.post("/auth/logout")
      thunkAPI.dispatch(clearInvoicesAfterLogout())
      return userLoggedOut.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error(error);
      console.log(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateAccessToken: (state, {payload}) => {
      // state.user?.accessToken = payload
      state.userAccessToken = payload
    },
    resetUser: (state, {payload}) => {
      state.user = null
      state.userAccessToken = null
    },
    setUser: (state, {payload}) => {
      state.user = payload
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload;
        state.userAccessToken = payload?.accessToken
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.log(payload);
      })
      .addCase(register.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })

      // LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload;
        state.userAccessToken = payload?.accessToken;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.log(payload);
      })
      .addCase(login.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = null
        state.userAccessToken = null
        console.log(payload)
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.log(payload);
      })
      .addCase(logout.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export const {updateAccessToken, resetUser, setUser} = usersSlice.actions;

export default usersSlice.reducer;
