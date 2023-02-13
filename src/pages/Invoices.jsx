import React from 'react'
import {
  InvoiceBar,
  EmptyInvoices,
  InvoicesContainer,
  BackBtn,
} from "../components";

const Invoices = () => {
  return (
    <main className="relative w-full h-full pt-8 col-start-2 col-end-12 row-start-2 grid grid-cols-invoiceMax grid-rows-firstRowMinContent gap-y-8 max-w-[400px] tab:max-w-[730px] lg:pt-[72px] mx-auto lg:col-start-3 lg:col-end-[14]">
      <InvoiceBar />
      {/* EMPTY INVOICES */}
      {/* <EmptyInvoices/> */}
      <InvoicesContainer />

      {/* FORM
      <main className="bg-basicWhite absolute top-0 -left-6 w-screen h-full">
        <BackBtn />
      </main> */}
    </main>
  );
}

export default Invoices