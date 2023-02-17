import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const invoiceData = require("../../../data.json")
import invoiceData from "../../../data.json";


const initialState = {
  invoiceData: invoiceData,
  activeSingleInvoice: {},
  
}

const InvoiceDataSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    getActiveSingleInvoice: (state, {payload}) => {
      state.activeSingleInvoice = state.invoiceData.find(item => item.id === payload)
    },
  }
})

export const {getActiveSingleInvoice} = InvoiceDataSlice.actions
export default InvoiceDataSlice.reducer