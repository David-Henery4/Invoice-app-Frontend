import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormModalOpenToFalse } from '../features/formModal/formModalSlice';
import { endAndDeactivateEditInvoice } from '../features/invoiceData/invoiceDataSlice';

const Overlay = () => {
  const dispatch = useDispatch()
  const {isFormOpen} = useSelector(store => store.formModal)
  const {isEditModeActive} = useSelector(store => store.invoiceData)
  return (
    <div
      className={`${isFormOpen ? "block" : "hidden"} w-full h-full row-start-2 col-start-1 col-end-13 bg-basicBlack/50 z-[1] lg:col-end-[16] lg:row-start-1`}
      onClick={() => {
        if (isFormOpen) dispatch(setFormModalOpenToFalse());
        if (isEditModeActive) {
          dispatch(endAndDeactivateEditInvoice())
        }
      }}
    ></div>
  );
}

export default Overlay