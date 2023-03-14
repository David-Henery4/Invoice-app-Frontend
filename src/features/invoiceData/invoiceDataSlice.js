import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceData from "../../../data.json";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { axiosPrivate } from "../axios/baseInstance";
import { updateAccessToken, resetUser } from "../users/usersSlice";
import axios from "axios";

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

const getRefresh = async (thunkAPI) => {
  try {
    // const dispatch = thunkAPI.dispatch()
    const res = await axios.get("http://localhost:3500/auth/refresh", {
      withCredentials: true,
    });
    thunkAPI.dispatch(updateAccessToken(res.data.accessToken));
    return res.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

const handleInterceptors = (thunkAPI) => {
  axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${
          thunkAPI.getState().users.userAccessToken
        }`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  //
  axiosPrivate.interceptors.response.use(
    (response) => response,
    // Here we handle the logic for if the access token has expired
    async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 403 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const newAccessToken = await getRefresh(thunkAPI);
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    }
  );
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

const InvoiceDataSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    getActiveSingleInvoice: (state, { payload }) => {
      state.activeSingleInvoice = state.invoiceData.find(
        (item) => item.id === payload
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
        (invoice) => invoice.id !== payload
      );
      state.invoiceData = newInvoiceData;
    },
    markInvoiceAsPaid: (state, { payload }) => {
      state.invoiceData.find((invoice) => invoice.id === payload).status =
        "paid";
    },
    saveInvoiceAsDraft: (state, { payload }) => {
      const newDraft = { ...payload, status: "draft" };
      state.invoiceData = [...state.invoiceData, newDraft];
    },
    getAndActivateEditInvoice: (state, { payload }) => {
      state.isEditModeActive = true;
      state.currentEditedInvoice = state.invoiceData.find(
        (item) => item.id === payload
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
        invoice.id === payload.id ? (invoice = payload) : invoice
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
        console.log("rejected")
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
} = InvoiceDataSlice.actions;
export default InvoiceDataSlice.reducer;
