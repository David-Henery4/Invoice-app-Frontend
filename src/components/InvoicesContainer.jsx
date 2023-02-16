import React from 'react'
import { useSelector } from 'react-redux';
import Invoice from './Invoice';

const InvoicesContainer = () => {
  const { invoiceData } = useSelector((store) => store.invoiceData)
  //
  return (
    <section className="col-start-1 col-end-13 h-full flex flex-col justify-start items-center gap-4">
      {invoiceData.map((invoice,i,ar) => {
        return <Invoice key={i} {...invoice}/>
      })}
    </section>
  );
}

export default InvoicesContainer