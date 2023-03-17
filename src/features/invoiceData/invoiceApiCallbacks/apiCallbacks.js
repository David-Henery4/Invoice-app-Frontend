import formatErrorMsg from "../../../reusableFunctions/formatErrorMsg";
import handleInterceptors from "../../../reusableFunctions/axiosInterceptors";
import { axiosPrivate } from "../../axios/baseInstance";
import { resetUser } from "../../users/usersSlice";

const getUserInvoices = async (userId, thunkAPI) => {
  try {
    handleInterceptors(thunkAPI);
    const userInvoices = await axiosPrivate.get(`/invoices/${userId}`);
    console.log("fulfiled");
    return userInvoices.data;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
    thunkAPI.dispatch(resetUser());
    throw new Error(message);
  }
};

const handleNewInvoice = async (newInvoice, thunkAPI) => {
  try {
    handleInterceptors(thunkAPI);
    const res = await axiosPrivate.post("/invoices", newInvoice);
    return res.data.invoices;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
    thunkAPI.dispatch(resetUser());
    throw new Error(message);
  }
};

const handleEditInvoice = async (invoiceToEdit, thunkAPI) => {
  try {
    handleInterceptors(thunkAPI);
    const res = await axiosPrivate.patch("/invoices", invoiceToEdit);
    return res.data;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
    thunkAPI.dispatch(resetUser());
    throw new Error(message);
    // return message
  }
};

const handleDeleteInvoice = async (deletedInvoiceInfo, thunkAPI) => {
  try {
    handleInterceptors(thunkAPI);
    const res = await axiosPrivate.delete("/invoices", {
      data: deletedInvoiceInfo,
    });
    return res.data.invoices;
  } catch (error) {
    const message = formatErrorMsg(error);
    console.error(error);
    console.log(message);
    thunkAPI.rejectWithValue(message);
    thunkAPI.dispatch(resetUser());
    throw new Error(message);
  }
};

export {
  getUserInvoices,
  handleNewInvoice,
  handleEditInvoice,
  handleDeleteInvoice,
};
