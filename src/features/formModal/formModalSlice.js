import { createSlice } from "@reduxjs/toolkit";
import initialInvoiceValues from "../../initialInvoiceValueData/initialInvoiceValues";
import getCreatedAtDateFormat from "../../reusableFunctions/createdAtDateFormat";
import termsDropdownData from "../../dropdowndata/termsDropdownData";
import { useUniqueId } from "../../hooks";
const generateId = useUniqueId();

const initialState = {
  isFormOpen: false,
  isItemListErrors: false,
  itemListErrorsList: [],
  inputErrors: {},
  invoiceFormValues: initialInvoiceValues,
  defaultTerms: {
    id: 1,
    label: "Net 1 day",
    days: 1,
  },
};

const FormModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    setInvoiceFormValues: (state, { payload }) => {
      // state.invoiceFormValues = initialInvoiceValues
      state.invoiceFormValues = {
        ...initialInvoiceValues,
        id: generateId(),
        createdAt: getCreatedAtDateFormat(),
        items: [
          {
            id: generateId(),
            name: "",
            quantity: 0,
            price: 0,
            total: 0,
          },
        ],
      };
    },
    handleValueChange: (state, { payload }) => {
      state.invoiceFormValues = { ...state.invoiceFormValues, ...payload };
    },
    handleClientNameValueChange: (state, { payload }) => {
      state.invoiceFormValues.clientName = payload
    },
    handleClientEmailValueChange: (state, { payload }) => {
      state.invoiceFormValues.clientEmail = payload
    },
    handleClientAddressValueChange: (state, { payload }) => {
      state.invoiceFormValues.clientAddress = {
        ...state.invoiceFormValues.clientAddress,
        ...payload,
      };
    },
    handleSenderAddressValueChange: (state, { payload }) => {
      state.invoiceFormValues.senderAddress = {
        ...state.invoiceFormValues.senderAddress,
        ...payload
      };
    },
    handleItemValuesChange: (state, { payload }) => {
      const { id, nameValue } = payload;
      state.invoiceFormValues.items = state.invoiceFormValues.items
        .map((item) => {
          if (item.id === id) {
            return { ...item, ...nameValue };
          }
          return item;
        })
        .map((item) => {
          if (item.id === id) {
            return { ...item, total: +item.price * +item.quantity };
          }
          return item;
        });
    },
    updateInvoiceFormValuesDeleteItem: (state, { payload }) => {
      state.invoiceFormValues.items = state.invoiceFormValues.items.filter(
        (item) => item.id !== payload
      );
    },
    updateInvoiceFormValuesAddNewItem: (state, { payload }) => {
      state.invoiceFormValues.items = [
        ...state.invoiceFormValues.items,
        {
          id: generateId(),
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ];
    },
    updateInvoiceFormValuesTotalSum: (state, { payload }) => {
      let total = 0;
      state.invoiceFormValues?.items?.forEach((item) => {
        total += item.total;
      });
      state.invoiceFormValues.total = total;
    },
    updateInvoiceFormValuesPaymentDue: (state, { payload }) => {
      state.invoiceFormValues.paymentDue = getCreatedAtDateFormat(
        new Date(
          new Date(state.invoiceFormValues?.createdAt).setDate(
            new Date(state.invoiceFormValues?.createdAt).getDate() +
              state.invoiceFormValues?.paymentTerms
          )
        )
      );
    },
    updateInvoiceFormValuesPaymentTerms: (state, { payload }) => {
      state.invoiceFormValues.paymentTerms = payload
    },
    updateEditedInvoiceFormValues: (state, { payload }) => {
      state.invoiceFormValues = payload;
    },
    setDefaultTerms: (state, { payload }) => {
      state.defaultTerms = {
        id: 1,
        label: "Net 1 day",
        days: 1,
      };
    },
    updateDefaultTerms: (state, { payload }) => {
      state.defaultTerms = payload;
    },
    updateEditedDefaultTerms: (state, { payload }) => {
      state.defaultTerms = termsDropdownData.find(
        (terms) => terms.days === payload.paymentTerms
      );
    },
    setFormModalOpenToFalse: (state, { payload }) => {
      state.isFormOpen = false;
    },
    setFormModalOpenToTrue: (state, { payload }) => {
      state.isFormOpen = true;
    },
    setIsItemListErrors: (state, { payload }) => {
      state.isItemListErrors = payload;
    },
    setItemListErrorsList: (state, { payload }) => {
      state.itemListErrorsList = payload;
    },
    resetIsItemListErrors: (state, { payload }) => {
      state.isItemListErrors = false;
    },
    resetItemListErrorsList: (state, { payload }) => {
      state.itemListErrorsList = [];
    },
    setInputErrors: (state, { payload }) => {
      state.inputErrors = payload;
    },
    resetInputErrors: (state, { payload }) => {
      state.inputErrors = {};
    },
  },
});

export const {
  setFormModalOpenToFalse,
  setFormModalOpenToTrue,
  resetIsItemListErrors,
  resetItemListErrorsList,
  setIsItemListErrors,
  setItemListErrorsList,
  setInputErrors,
  resetInputErrors,
  setDefaultTerms,
  setInvoiceFormValues,
  updateEditedDefaultTerms,
  updateEditedInvoiceFormValues,
  updateInvoiceFormValuesPaymentDue,
  updateInvoiceFormValuesTotalSum,
  updateInvoiceFormValuesAddNewItem,
  updateInvoiceFormValuesDeleteItem,
  handleItemValuesChange,
  handleSenderAddressValueChange,
  updateDefaultTerms,
  handleClientAddressValueChange,
  handleClientEmailValueChange,
  handleClientNameValueChange,
  updateInvoiceFormValuesPaymentTerms,
  handleValueChange
} = FormModalSlice.actions;

export default FormModalSlice.reducer;
