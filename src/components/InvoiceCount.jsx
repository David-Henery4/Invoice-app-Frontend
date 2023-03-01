import React from 'react'
import { useSelector } from 'react-redux';

const InvoiceCount = () => {
  const { isFilterActive, filteredInvoiceData, invoiceData } = useSelector(
    (store) => store.invoiceData
  );
  //
  return (
    <h4 className="text-xs text-textReallyDark leading-heading4 -tracking-heading4 dark:text-shadedTextDark md:text-med">
      {isFilterActive ? (
        <>
          {filteredInvoiceData?.length <= 0 ? (
            <span>No Invoices</span>
          ) : filteredInvoiceData?.length === 1 ? (
            <>
              <span className="md:hidden">{`${filteredInvoiceData?.length} invoice`}</span>
              <span className="hidden md:block">{`There is ${filteredInvoiceData?.length} invoice`}</span>
            </>
          ) : (
            <>
              <span className="md:hidden">{`${filteredInvoiceData?.length} invoices`}</span>
              <span className="hidden md:block">{`There are ${filteredInvoiceData?.length} total invoices`}</span>
            </>
          )}
        </>
      ) : (
        <>
          {invoiceData?.length <= 0 ? (
            <span>No Invoices</span>
          ) : invoiceData?.length === 1 ? (
            <>
              <span className="md:hidden">{`${invoiceData?.length} invoice`}</span>
              <span className="hidden md:block">{`There is ${invoiceData?.length} invoice`}</span>
            </>
          ) : (
            <>
              <span className="md:hidden">{`${invoiceData?.length} invoices`}</span>
              <span className="hidden md:block">{`There are ${invoiceData?.length} total invoices`}</span>
            </>
          )}
        </>
      )}
    </h4>
  );
}

export default InvoiceCount