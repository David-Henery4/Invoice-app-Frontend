import React from 'react'

const Overlay = ({isFormOpen, setIsFormOpen}) => {
  return (
    <div
      className={`${isFormOpen ? "block" : "hidden"} w-full h-full row-start-2 col-start-1 col-end-13 bg-basicBlack/50 z-[1] lg:col-end-[16] lg:row-start-1`}
      onClick={() => {
        if (setIsFormOpen) setIsFormOpen(false);
      }}
    ></div>
  );
}

export default Overlay