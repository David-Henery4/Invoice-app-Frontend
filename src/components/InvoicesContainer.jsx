import React from 'react'
import Invoice from './Invoice';

const InvoicesContainer = () => {
  return (
    <section className="col-start-1 col-end-13 h-full flex flex-col justify-start items-center gap-4">
      <Invoice/>
      <Invoice/>
      <Invoice/>
      <Invoice/>
    </section>
  );
}

export default InvoicesContainer