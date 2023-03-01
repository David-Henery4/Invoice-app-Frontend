import React from "react";
import { ArrowLeft } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormModalOpenToFalse,
  resetIsItemListErrors,
  resetItemListErrorsList,
  resetInputErrors,
  setDefaultTerms,
  setInvoiceFormValues,
} from "../features/formModal/formModalSlice";
import { endAndDeactivateEditInvoice } from "../features/invoiceData/invoiceDataSlice";
import { Link } from "react-router-dom";

const BackBtn = ({ isOnInvoiceForm = false }) => {
  const { isEditModeActive } = useSelector((store) => store.invoiceData);
  const dispatch = useDispatch();
  //
  const handleValueAndErrorReset = () => {
    dispatch(setInvoiceFormValues());
    dispatch(setDefaultTerms());
    dispatch(resetInputErrors());
    dispatch(resetIsItemListErrors(false));
    dispatch(resetItemListErrorsList([]));
    dispatch(setFormModalOpenToFalse());
    if (isEditModeActive) {
      dispatch(endAndDeactivateEditInvoice());
    }
  };
  return (
    <Link
      to={isOnInvoiceForm || "/"}
      className={`w-fit mb-8 flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold dark:text-basicWhite md:text-med ${
        isOnInvoiceForm && "tab:hidden"
      }`}
      onClick={() => {
        if (isOnInvoiceForm) {
          dispatch(setFormModalOpenToFalse());
          handleValueAndErrorReset();
        }
      }}
    >
      <ArrowLeft />
      <p>Go back</p>
    </Link>
  );
};

export default BackBtn;
