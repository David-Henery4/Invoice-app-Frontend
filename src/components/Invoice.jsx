import React from 'react'

const Invoice = () => {
  return (
    <div className="bg-basicWhite w-full grid text-xs font-bold grid-cols-invoiceMax grid-rows-invoiceContainerMobRows p-6 tab:grid-cols-singleInvoiceContainer tab:grid-rows-none  tab:items-center ">
      <p className="col-start-1 col-end-6 row-start-1 row-end-2 smlTab:row-auto smlTab:col-end-2 md:text-med">
        <span className="text-toggleColourDark">#</span>RT3080
      </p>
      <p className="text-textReallyDark font-medium col-start-1 col-end-6 row-start-3 row-end-4 tab:col-start-2 tab:col-end-3 tab:row-auto md:text-med">
        Due 19 Aug 2021
      </p>
      <p className="text-toggleColourDark font-medium col-start-4 col-end-13 row-start-1 row-end-2 justify-self-end tab:row-auto tab:col-start-3 tab:col-end-4 tab:justify-self-auto md:text-med">
        Jensen Huang
      </p>
      <div className="col-start-1 col-end-13 flex justify-between items-center row-start-3 row-end-4 tab:row-auto tab:col-start-4 tab:col-end-5 tab:justify-end tab:gap-10">
        <p className="text-base self-end tab:self-center">£ 1,800.90</p>
        <div className="bg-paidStatus/10 flex justify-center items-center w-[104px] h-10 gap-2">
          <div className="w-2 h-2 rounded-full bg-paidStatus"></div>
          <p className="text-paidStatus md:text-med">Paid</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice