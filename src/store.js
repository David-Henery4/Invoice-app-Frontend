import { configureStore } from "@reduxjs/toolkit";
import InvoiceDataReducer from "./features/invoiceData/invoiceDataSlice";
import FormModal from "./features/formModal/formModalSlice";

export const store = configureStore({
  reducer: {
    invoiceData: InvoiceDataReducer,
    formModal: FormModal,
  },
})

