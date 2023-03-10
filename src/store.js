import { configureStore } from "@reduxjs/toolkit";
import InvoiceDataReducer from "./features/invoiceData/invoiceDataSlice";
import FormModal from "./features/formModal/formModalSlice";
import usersReducer from "./features/users/usersSlice"

export const store = configureStore({
  reducer: {
    invoiceData: InvoiceDataReducer,
    formModal: FormModal,
    users: usersReducer,
  },
})

