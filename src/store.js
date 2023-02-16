import { configureStore } from "@reduxjs/toolkit";
import InvoiceDataReducer from "./features/invoiceData/invoiceDataSlice";

export const store = configureStore({
  reducer: {
    invoiceData: InvoiceDataReducer,
  },
})

