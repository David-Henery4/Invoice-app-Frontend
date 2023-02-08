import React from 'react'
import { EmptyIllustration } from "../assets";

const EmptyInvoices = () => {
  return (
    <section className="col-start-1 col-end-13 h-full">
      <div className="flex flex-col justify-end items-center text-center h-2/3 gap-10 md:h-3/4">
        <div className="w-48 h-40 md:w-60 md:h-52">
          <EmptyIllustration className="w-full h-full" />
        </div>
        <div className="grid gap-6">
          <h2 className="text-xl font-bold">There is nothing here</h2>
          <p className="text-xs leading-body1 tracking-body1 font-medium text-textReallyDark max-w-[179px]">
            Create an invoice by clicking the{" "}
            <span className="font-bold">
              New <span className="hidden md:inline">invoice</span>
            </span>{" "}
            button and get started
          </p>
        </div>
      </div>
    </section>
  );
}

export default EmptyInvoices