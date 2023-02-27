import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import invoiceData from "../../../data.json";

const initialState = {
  invoiceData: invoiceData,
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
  currentEditedInvoice: {}
};

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
        filter.id === payload ? filter.filterActive = !filter.filterActive : filter.filterActive = false
      });

      // lets know if ANY filter is active
      state.filterModes.some((filter) =>
        filter.filterActive
          ? (state.isFilterActive = true)
          : (state.isFilterActive = false)
      );

      // creates the filtered array to display
      const currentActiveFilter = state.filterModes.find(filter => filter.id === payload)
      const newFilteredArray = state.invoiceData.filter(invoice => invoice.status === currentActiveFilter.name)
      state.filteredInvoiceData = newFilteredArray

      // MAYBE reset to empty if filter is not active anymore?
    },
    addNewInvoice: (state, {payload}) => {
      state.invoiceData = [...state.invoiceData, payload]
    },
    deleteInvoice: (state, {payload}) => {
      const newInvoiceData = state.invoiceData.filter(invoice => invoice.id !== payload)
      state.invoiceData = newInvoiceData
    },
    markInvoiceAsPaid: (state, {payload}) => {
      state.invoiceData.find(invoice => invoice.id === payload).status = "paid"
    },
    saveInvoiceAsDraft: (state, {payload}) => {
      const newDraft = {...payload, status: "draft"}
      state.invoiceData = [...state.invoiceData, newDraft]
    },
    getAndActivateEditInvoice: (state, {payload}) => {
      state.isEditModeActive = true
      state.currentEditedInvoice = state.invoiceData.find(
        (item) => item.id === payload
      );
    },
    endAndDeactivateEditInvoice: (state, {payload}) => {
      state.isEditModeActive = false
      state.currentEditedInvoice = {}
    },
    updateAndDeactivateEditInvoice: (state, {payload}) => {
      state.isEditModeActive = false;
      state.currentEditedInvoice = {};
      if (payload.status === "draft"){
        payload.status = "pending"
      }
      state.invoiceData = state.invoiceData.map((invoice) =>
        invoice.id === payload.id ? (invoice = payload) : invoice
      );
    }
  },
});

export const { getActiveSingleInvoice, filterInvoices, deleteInvoice, markInvoiceAsPaid, saveInvoiceAsDraft, getAndActivateEditInvoice, endAndDeactivateEditInvoice, updateAndDeactivateEditInvoice, addNewInvoice } =
  InvoiceDataSlice.actions;
export default InvoiceDataSlice.reducer;
