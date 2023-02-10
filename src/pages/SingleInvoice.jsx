import React from 'react'
import {ArrowLeft} from "../assets"

const SingleInvoice = () => {
  return (
    <main className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-[14] pt-8">
      <a href="#" className='flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold'>
        <ArrowLeft/>
        <p>Go back</p>
      </a>
      
      <section>

        {/* Title, Reference & Address */}
        <div></div>

        {/* Dates & Customer Address */}
        <div></div>

        {/* Services, Prices, Totals & Quanity */}
        <div></div>

      </section>

      <div>
        
      </div>
    </main>
  );
}

export default SingleInvoice