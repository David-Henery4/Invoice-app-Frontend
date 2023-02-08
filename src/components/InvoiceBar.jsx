import React from 'react'
import { ArrowDown, PlusIcon } from "../assets";

const InvoiceBar = () => {
  return (
    <div className="flex justify-between items-center col-start-1 col-end-13 md:py-1">
      {/* LEFT */}
      <div>
        <h1 className="text-xl font-bold tracking-heading2 md:text-lrgHeading md:tracking-heading1">
          Invoices
        </h1>
        <h4 className="text-xs text-textReallyDark leading-heading4 -tracking-heading4 md:text-med">
          No invoices
        </h4>
      </div>
      {/* RIGHT */}
      <div className="flex justify-center items-center gap-[18px] md:gap-10">
        {/* Filter & Icon */}
        <div className="flex justify-center items-center gap-3 hover:cursor-pointer">
          <h4 className="text-xs text-textLight leading-heading4 -tracking-heading4 font-bold md:text-med">
            Filter <span className="hidden md:inline">by status</span>
          </h4>
          <ArrowDown />
        </div>
        {/* New Invoice Button */}
        <button className="w-[90px] flex justify-start items-center p-[6px] bg-primaryPurple rounded-3xl gap-2 md:w-[150px] md:h-12 md:gap-4 md:p-2">
          <span className="h-8 w-8 rounded-full bg-basicWhite grid place-items-center">
            <PlusIcon />
          </span>
          <p className="text-xs font-bold text-basicWhite tracking-body1 leading-heading4 md:text-med">
            New <span className='hidden md:inline'>Invoice</span>
          </p>
        </button>
      </div>
    </div>
  );
}

export default InvoiceBar