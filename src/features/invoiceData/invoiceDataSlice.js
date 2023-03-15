import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceData from "../../../data.json";
import { axiosPrivate } from "../axios/baseInstance";
import { updateAccessToken, resetUser } from "../users/usersSlice";
import axios from "axios";
import handleInterceptors from "../../reusableFunctions/axiosInterceptors";

const initialState = {
  // invoiceData: invoiceData,
  invoiceData: [],
  activeSingleInvoice: {},
  isFilterActive: false,
  filteredInvoiceData: [],
  filterModes: [
    {
      id: 1,
      name: "draft",
      filterActive: false,
    },
    {
      id: 2,
      name: "pending",
      filterActive: false,
    },
    {
      id: 3,
      name: "paid",
      filterActive: false,
    },
  ],
  isEditModeActive: false,
  currentEditedInvoice: {},
  isInvoiceLoading: false,
  isError: false,
};


export const getInvoices = createAsyncThunk(
  "getInvoices/invoiceData",
  async (accessToken, thunkAPI) => {
    try {
      handleInterceptors(thunkAPI);
      const userInvoices = await axiosPrivate.get("/invoices");
      console.log("fulfiled")
      return userInvoices.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.error(error);
      console.log(message);
      thunkAPI.rejectWithValue(message);
      console.log("refresh-expired")
      thunkAPI.dispatch(resetUser())
      throw new Error(message)
      // return message
    }
  }
);

export const updateEditedInvoice = createAsyncThunk("updateEditedInvoice/invoiceData", async (_, thunkAPI) => {
  
});

export const createNewInvoice = createAsyncThunk("createNewInvoice/invoiceData", async (_, thunkAPI) => {
  
});

export const removeInvoice = createAsyncThunk("removeInvoice/invoiceData", async (_, thunkAPI) => {
  
});

const InvoiceDataSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    addInvoicesFromLogin: (state, {payload}) => {
      state.invoiceData = payload
    },
    getActiveSingleInvoice: (state, { payload }) => {
      state.activeSingleInvoice = state.invoiceData.find(
        (item) => item.invoiceId === payload
      );
    },
    filterInvoices: (state, { payload }) => {
      // selects what filter type is active
      state.filterModes.map((filter) => {
        filter.id === payload
          ? (filter.filterActive = !filter.filterActive)
          : (filter.filterActive = false);
      });

      // lets know if ANY filter is active
      state.filterModes.some((filter) =>
        filter.filterActive
          ? (state.isFilterActive = true)
          : (state.isFilterActive = false)
      );

      // creates the filtered array to display
      const currentActiveFilter = state.filterModes.find(
        (filter) => filter.id === payload
      );
      const newFilteredArray = state.invoiceData.filter(
        (invoice) => invoice.status === currentActiveFilter.name
      );
      state.filteredInvoiceData = newFilteredArray;

      // MAYBE reset to empty if filter is not active anymore?
    },
    addNewInvoice: (state, { payload }) => {
      state.invoiceData = [...state.invoiceData, payload];
    },
    deleteInvoice: (state, { payload }) => {
      const newInvoiceData = state.invoiceData.filter(
        (invoice) => invoice.invoiceId !== payload
      );
      state.invoiceData = newInvoiceData;
    },
    markInvoiceAsPaid: (state, { payload }) => {
      state.invoiceData.find(
        (invoice) => invoice.invoiceId === payload
      ).status = "paid";
    },
    saveInvoiceAsDraft: (state, { payload }) => {
      const newDraft = { ...payload, status: "draft" };
      state.invoiceData = [...state.invoiceData, newDraft];
    },
    getAndActivateEditInvoice: (state, { payload }) => {
      state.isEditModeActive = true;
      state.currentEditedInvoice = state.invoiceData.find(
        (item) => item.invoiceId === payload
      );
    },
    endAndDeactivateEditInvoice: (state, { payload }) => {
      state.isEditModeActive = false;
      state.currentEditedInvoice = {};
    },
    updateAndDeactivateEditInvoice: (state, { payload }) => {
      state.isEditModeActive = false;
      state.currentEditedInvoice = {};
      if (payload.status === "draft") {
        payload.status = "pending";
      }
      state.invoiceData = state.invoiceData.map((invoice) =>
        invoice.invoiceId === payload.invoiceId ? (invoice = payload) : invoice
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.fulfilled, (state, { payload }) => {
        state.isInvoiceLoading = false;
        state.isError = false;
        state.invoiceData = payload;
      })
      .addCase(getInvoices.rejected, (state, { payload }) => {
        state.isError = true;
        state.isInvoiceLoading = false;
        state.invoiceData = []
      })
      .addCase(getInvoices.pending, (state, { payload }) => {
        state.isInvoiceLoading = true;
        state.isError = false;
      });
  },
});

export const {
  getActiveSingleInvoice,
  filterInvoices,
  deleteInvoice,
  markInvoiceAsPaid,
  saveInvoiceAsDraft,
  getAndActivateEditInvoice,
  endAndDeactivateEditInvoice,
  updateAndDeactivateEditInvoice,
  addNewInvoice,
  addInvoicesFromLogin,
} = InvoiceDataSlice.actions;
export default InvoiceDataSlice.reducer;
