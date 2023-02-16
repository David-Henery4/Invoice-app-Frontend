import React from 'react'
import {BackBtn} from "../components"
import {BillFrom, BillTo, ItemList} from "../components/FormComponents"
import { useSelector, useDispatch } from "react-redux";
import { setFormModalOpenToFalse } from '../features/formModal/formModalSlice';

const NewEditInvoice = () => {
  const dispatch = useDispatch()
  const {isFormOpen} = useSelector(store => store.formModal)
  //
  const handleCloseForm = () => {
    dispatch(setFormModalOpenToFalse())
  }
  //
  return (
    <main
      className={`fixed top-[72px] overflow-y-scroll bg-basicWhite w-full h-[calc(100vh-72px)] pt-8 z-10 transition-all -translate-x-[200%] grid grid-cols-formPageMob max-w-[616px] mdTab:rounded-r-[20px] tab:grid-cols-formPageTab md:top-20 lg:top-0 lg:h-screen lg:max-w-[666px] lg:pl-[50px] lg:left-[50px] lg:z-[1] ${
        isFormOpen && "translate-x-0"
      }`}
    >
      <section
        className="col-start-2 col-end-12 pb-6
        "
      >
        <BackBtn isOnInvoiceForm={true}/>
        <h2 className="text-2xl leading-heading1 -tracking-subheading font-bold mb-6">
          New Invoice
        </h2>
        <form id="invoiceForm" name="invoiceForm">
          <BillFrom />
          <BillTo />
          <ItemList />
        </form>
      </section>
      <div className="w-full col-start-1 col-end-13 tab:sticky tab:bottom-0 tab:left-0">
        <div className="w-full h-16 bg-gradient-to-t from-basicBlack to-basicBlack/10 opacity-10"></div>
        <div className="w-full px-6 py-5 flex flex-wrap justify-center items-center gap-[7px] bg-basicWhite tab:px-14 tab:py-8">
          <button
            className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24 tab:mr-auto"
            onClick={() => {
              handleCloseForm();
            }}
          >
            Discard
          </button>
          <button
            className="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark tab:w-[113px]"
            onClick={() => {
              handleCloseForm();
            }}
          >
            Save as Draft
          </button>
          <button
            className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
            onClick={() => {
              handleCloseForm();
            }}
          >
            Save & Send
          </button>
        </div>
      </div>
    </main>
  );
};

export default NewEditInvoice