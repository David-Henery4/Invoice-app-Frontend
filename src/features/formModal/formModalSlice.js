import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isFormOpen: false,
}

const FormModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    setFormModalOpenToFalse: (state, {payload}) => {
      state.isFormOpen = false
    },
    setFormModalOpenToTrue: (state, {payload}) => {
      state.isFormOpen = true
    },
  }
})

export const {setFormModalOpenToFalse, setFormModalOpenToTrue} = FormModalSlice.actions

export default FormModalSlice.reducer