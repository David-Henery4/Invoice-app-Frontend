import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormModalOpenToFalse, setInvoiceFormValues, setDefaultTerms,resetInputErrors, resetIsItemListErrors,resetItemListErrorsList } from '../features/formModal/formModalSlice';
import { endAndDeactivateEditInvoice } from '../features/invoiceData/invoiceDataSlice';

const Overlay = () => {
  const dispatch = useDispatch()
  const {isFormOpen} = useSelector(store => store.formModal)
  const {isEditModeActive} = useSelector(store => store.invoiceData)
  const resetErrorAndValues = () => {
    dispatch(setInvoiceFormValues());
    dispatch(setDefaultTerms());
    dispatch(resetInputErrors());
    dispatch(resetIsItemListErrors(false));
    dispatch(resetItemListErrorsList([]));
    dispatch(setFormModalOpenToFalse());
    if (isEditModeActive) {
      dispatch(endAndDeactivateEditInvoice());
    }
  }
  return ( 
    <div
      className={`${isFormOpen ? "block" : "hidden"} w-full h-full row-start-2 col-start-1 col-end-13 bg-basicBlack/50 z-[1] lg:col-end-[16] lg:row-start-1`}
      onClick={() => {
        if (isFormOpen) {
          dispatch(setFormModalOpenToFalse())
          resetErrorAndValues()
        };
      }}
    ></div>
  );
}

export default Overlay