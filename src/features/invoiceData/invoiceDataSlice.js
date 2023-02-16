import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const invoiceData = require("../../../data.json")
import invoiceData from "../../../data.json";


const initialState = {
  invoiceData: invoiceData
}

const InvoiceDataSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    
  }
})

export const {} = InvoiceDataSlice.actions
export default InvoiceDataSlice.reducer