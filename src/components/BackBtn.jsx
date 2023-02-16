import React from 'react'
import { ArrowLeft } from "../assets";
import { useDispatch } from 'react-redux';
import { setFormModalOpenToFalse } from '../features/formModal/formModalSlice';

const BackBtn = ({isOnInvoiceForm = false}) => {
  const dispatch = useDispatch()
  return (
    <a
      href="#"
      className={`w-fit mb-8 flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold md:text-med ${
        isOnInvoiceForm && "tab:hidden"
      }`}
      onClick={() => {
        if (isOnInvoiceForm) {
          dispatch(setFormModalOpenToFalse())
        }
      }}
    >
      <ArrowLeft />
      <p>Go back</p>
    </a>
  );
}

export default BackBtn