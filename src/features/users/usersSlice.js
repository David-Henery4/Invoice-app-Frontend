import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleLogin,
  handleLogout,
  handleRegister,
} from "./usersApiCallbacks/apiCallbacks";

const initialState = {
  user: null,
  userAccessToken: null,
  isLoading: false,
  isError: false,
};


export const register = createAsyncThunk("register/user", handleRegister);

export const login = createAsyncThunk("login/user", handleLogin);

export const logout = createAsyncThunk("logout/user", handleLogout);


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateAccessToken: (state, { payload }) => {
      state.userAccessToken = payload;
    },
    resetUser: (state, { payload }) => {
      state.user = null;
      state.userAccessToken = null;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload;
        state.userAccessToken = payload?.accessToken;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
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
      })
      .addCase(login.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = null;
        state.userAccessToken = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logout.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export const { updateAccessToken, resetUser, setUser } = usersSlice.actions;

export default usersSlice.reducer;
