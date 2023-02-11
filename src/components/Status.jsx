import React from 'react'

const Status = ({status}) => {
  return (
    <div className="bg-paidStatus/10 flex justify-center items-center w-[104px] h-10 gap-2">
      <div className="w-2 h-2 rounded-full bg-paidStatus"></div>
      <p className="text-paidStatus md:text-med">{status}</p>
    </div>
  );
}

export default Status