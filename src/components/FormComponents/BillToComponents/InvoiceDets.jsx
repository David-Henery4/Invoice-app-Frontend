import React from 'react'

const InvoiceDets = () => {
  return (
    <div className="w-full grid gap-6 grid-cols-6 col-start-1 col-end-7">
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-1 tab:col-end-4">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="invoiceDate"
        >
          Invoice Date
        </label>
        <input
          id="invoiceDate"
          name="invoiceDate"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="date"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-4 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="paymentTerms"
        >
          Payment Terms
        </label>
        <input
          id="paymentTerms"
          name="paymentTerms"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="projectDescription"
        >
          Project Description
        </label>
        <input
          id="projectDescription"
          name="projectDescription"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
    </div>
  );
}

export default InvoiceDets