import invoiceData from "../../../data.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserInvoices,
  handleNewInvoice,
  handleEditInvoice,
  handleDeleteInvoice,
} from "./invoiceApiCallbacks/apiCallbacks";


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
  isDeleteModalActive: false,
};

export const getInvoices = createAsyncThunk(
  "getInvoices/invoiceData",
  getUserInvoices
);

export const createNewInvoice = createAsyncThunk(
  "createNewInvoice/invoiceData",
  handleNewInvoice
);

export const updateEditedInvoice = createAsyncThunk(
  "updateEditedInvoice/invoiceData",
  handleEditInvoice
);

export const removeInvoice = createAsyncThunk(
  "removeInvoice/invoiceData", handleDeleteInvoice
);

const InvoiceDataSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    clearInvoicesAfterLogout: (state, { payload }) => {
      state.invoiceData = [];
    },
    addInvoicesFromLogin: (state, { payload }) => {
      state.invoiceData = payload;
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
    toggleDeleteModal: (state, {payload}) => {
      state.isDeleteModalActive = !state.isDeleteModalActive
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all users invoices
      .addCase(getInvoices.fulfilled, (state, { payload }) => {
        state.isInvoiceLoading = false;
        state.isError = false;
        state.invoiceData = payload;
      })
      .addCase(getInvoices.rejected, (state, { payload }) => {
        state.isError = true;
        state.isInvoiceLoading = false;
        // state.invoiceData = [];
      })
      .addCase(getInvoices.pending, (state, { payload }) => {
        state.isInvoiceLoading = true;
        state.isError = false;
      })

      // Create new Invoice & get Updated invoices
      .addCase(createNewInvoice.fulfilled, (state, { payload }) => {
        state.isInvoiceLoading = false;
        state.isError = false;
        state.invoiceData = payload;
      })
      .addCase(createNewInvoice.rejected, (state, { payload }) => {
        state.isError = true;
        state.isInvoiceLoading = false;
        // state.invoiceData = [];
      })
      .addCase(createNewInvoice.pending, (state, { payload }) => {
        state.isInvoiceLoading = true;
        state.isError = false;
      })

      // Create delete invoice
      .addCase(removeInvoice.fulfilled, (state, { payload }) => {
        state.isInvoiceLoading = false;
        state.isError = false;
        state.invoiceData = payload;
      })
      .addCase(removeInvoice.rejected, (state, { payload }) => {
        state.isError = true;
        state.isInvoiceLoading = false;
        // state.invoiceData = [];
      })
      .addCase(removeInvoice.pending, (state, { payload }) => {
        state.isInvoiceLoading = true;
        state.isError = false;
      })

      // Edit invoice
      .addCase(updateEditedInvoice.fulfilled, (state, { payload }) => {
        state.isInvoiceLoading = false;
        state.isError = false;
        state.isEditModeActive = false;
        state.currentEditedInvoice = {};
        state.activeSingleInvoice = payload;
        state.invoiceData = state.invoiceData.map((invoice) =>
          invoice._id === payload._id ? (invoice = payload) : invoice
        );
      })
      .addCase(updateEditedInvoice.rejected, (state, { payload }) => {
        state.isError = true;
        state.isInvoiceLoading = false;
        state.isEditModeActive = false;
        state.currentEditedInvoice = {};
        // state.invoiceData = [];
      })
      .addCase(updateEditedInvoice.pending, (state, { payload }) => {
        state.isInvoiceLoading = true;
        state.isError = false;
      });
  },
});

export const {
  getActiveSingleInvoice,
  filterInvoices,
  getAndActivateEditInvoice,
  endAndDeactivateEditInvoice,
  addInvoicesFromLogin,
  clearInvoicesAfterLogout,
  toggleDeleteModal,
} = InvoiceDataSlice.actions;
export default InvoiceDataSlice.reducer;
