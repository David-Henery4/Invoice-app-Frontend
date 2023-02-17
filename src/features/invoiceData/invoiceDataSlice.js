import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const invoiceData = require("../../../data.json")
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
    deleteInvoice: (state, {payload}) => {
      console.log(payload)
      const newInvoiceData = state.invoiceData.filter(invoice => invoice.id !== payload)
      state.invoiceData = newInvoiceData
    },
    markInvoiceAsPaid: (state, {payload}) => {
      state.invoiceData.find(invoice => invoice.id === payload).status = "paid"
    },
  },
});

export const { getActiveSingleInvoice, filterInvoices, deleteInvoice, markInvoiceAsPaid } =
  InvoiceDataSlice.actions;
export default InvoiceDataSlice.reducer;
