import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormOpen: false,
  isItemListErrors: false,
  itemListErrorsList: [],
  inputErrors: {},
};

const FormModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    setFormModalOpenToFalse: (state, { payload }) => {
      state.isFormOpen = false;
    },
    setFormModalOpenToTrue: (state, { payload }) => {
      state.isFormOpen = true;
    },
    setIsItemListErrors: (state, { payload }) => {
      state.isItemListErrors = payload
    },
    setItemListErrorsList: (state, { payload }) => {
      state.itemListErrorsList = payload
    },
    resetIsItemListErrors: (state, { payload }) => {
      state.isItemListErrors = false
    },
    resetItemListErrorsList: (state, { payload }) => {
      state.itemListErrorsList = []
    },
    setInputErrors: (state, {payload}) => {
      state.inputErrors = payload
    },
    resetInputErrors: (state, {payload}) => {
      state.inputErrors = {}
    }
  },
});

export const { setFormModalOpenToFalse, setFormModalOpenToTrue, resetIsItemListErrors, resetItemListErrorsList, setIsItemListErrors, setItemListErrorsList, setInputErrors, resetInputErrors } =
  FormModalSlice.actions;

export default FormModalSlice.reducer;
