import React from 'react'

const InvoicesLoadingSpinner = () => {
  return (
    <div className="w-full min-h-screen grid place-items-center col-start-2 col-end-12 lg:col-start-3 lg:col-end-[14]">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default InvoicesLoadingSpinner