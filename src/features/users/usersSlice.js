import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import usersPost from "../axios/baseInstance";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
}

export const register = createAsyncThunk( "register/user", async (userData, thunkAPI) => {
  try {
    const newUser = await usersPost.post("/users", userData);
    return newUser.data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.error(error)
    console.log(message)
    thunkAPI.rejectWithValue(message)
  }
})

export const login = createAsyncThunk( "login/user", async (user, thunkAPI) => {
  try {
    const loggedInUser = await usersPost.post("/auth", user)
    return loggedInUser.data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
  }
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder

    // REGISTER
    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.isError = false
      state.user = payload
    })
    .addCase(register.rejected, (state, {payload}) => {
      state.isLoading = false
      state.isError = true
      console.log(payload)
    })
    .addCase(register.pending, (state, {payload}) => {
      state.isLoading = true
      state.isError = false
    })

    // LOGIN
    .addCase(login.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.isError = false
      state.user = payload
    })
    .addCase(login.rejected, (state, {payload}) => {
      state.isLoading = false
      state.isError = true
      console.log(payload);
    })
    .addCase(login.pending, (state, {payload}) => {
      state.isLoading = true
      state.isError = false
    })
  },
})

export const {} = usersSlice.actions

export default usersSlice.reducer