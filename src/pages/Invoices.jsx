import React from "react";
import { useSelector } from "react-redux";
import {
  InvoiceBar,
  EmptyInvoices,
  InvoicesContainer,
} from "../components";

const Invoices = () => {
  const { invoiceData, isFilterActive, filteredInvoiceData } = useSelector(
    (store) => store.invoiceData
  );
  //
  return (
    <main className="relative w-full h-full py-8 col-start-2 col-end-12 row-start-2 grid grid-cols-invoiceMax grid-rows-firstRowMinContent gap-y-8 max-w-[400px] tab:max-w-[730px] lg:pt-[72px] mx-auto lg:col-start-3 lg:col-end-[14] lg:row-start-1">
      <InvoiceBar />
      {isFilterActive ? (
        <>
          {invoiceData && filteredInvoiceData.length >= 1 ? (
            <InvoicesContainer />
          ) : (
            <EmptyInvoices />
          )}
        </>
      ) : (
        <>
          {invoiceData && invoiceData.length >= 1 ? (
            <InvoicesContainer />
          ) : (
            <EmptyInvoices />
          )}
        </>
      )}
    </main>
  );
};

export default Invoices;
