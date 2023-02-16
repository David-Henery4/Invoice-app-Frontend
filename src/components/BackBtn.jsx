import React from "react";
import { ArrowLeft } from "../assets";
import { useDispatch } from "react-redux";
import { setFormModalOpenToFalse } from "../features/formModal/formModalSlice";
import { Link } from "react-router-dom";

const BackBtn = ({ isOnInvoiceForm = false }) => {
  const dispatch = useDispatch();
  return (
    <Link
        to={isOnInvoiceForm || "/"}
        className={`w-fit mb-8 flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold md:text-med ${
          isOnInvoiceForm && "tab:hidden"
        }`}
        onClick={() => {
          if (isOnInvoiceForm) {
            dispatch(setFormModalOpenToFalse());
          }
        }}
      >
        <ArrowLeft />
        <p>Go back</p>
    </Link>
  )
};

export default BackBtn;
