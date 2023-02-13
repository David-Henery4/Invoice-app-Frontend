import React from 'react'

const BillFrom = () => {
  return (
    <div className="grid gap-6 grid-cols-6 pb-10">
      <h3 className="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 col-start-1 col-end-7">
        Bill From
      </h3>

      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Street Address
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-4">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          City
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-4 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Post Code
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor=""
        >
          Country
        </label>
        <input
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
    </div>
  );
}

export default BillFrom