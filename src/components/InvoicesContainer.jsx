import React from 'react'
import { useSelector } from 'react-redux';
import Invoice from './Invoice';
import { Link } from "react-router-dom";

const InvoicesContainer = () => {
  const { invoiceData } = useSelector((store) => store.invoiceData)
  //
  return (
    <section className="col-start-1 col-end-13 h-full flex flex-col justify-start items-center gap-4">
      {invoiceData.map((invoice,i,ar) => {
        return (
          <Link key={i} className="w-full" to={`singleInvoice/${invoice.id}`}>
            <Invoice {...invoice} />
          </Link>
        );
      })}
    </section>
  );
}

export default InvoicesContainer