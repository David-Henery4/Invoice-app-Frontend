import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormModalOpenToFalse } from '../features/formModal/formModalSlice';

const Overlay = () => {
  const dispatch = useDispatch()
  const {isFormOpen} = useSelector(store => store.formModal)
  return (
    <div
      className={`${isFormOpen ? "block" : "hidden"} w-full h-full row-start-2 col-start-1 col-end-13 bg-basicBlack/50 z-[1] lg:col-end-[16] lg:row-start-1`}
      onClick={() => {
        if (isFormOpen) dispatch(setFormModalOpenToFalse());
      }}
    ></div>
  );
}

export default Overlay