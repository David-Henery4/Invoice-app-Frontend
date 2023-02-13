import React from "react";
import {InvoiceDets, ClientsDets} from "./BillToComponents"

const BillTo = () => {
  return (
    <div className="grid grid-cols-6 pb-16">
      <h3 className="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 mb-6 col-start-1 col-end-7">
        Bill To
      </h3>
      <ClientsDets/>
      <InvoiceDets/>
    </div>
  );
};

export default BillTo;
