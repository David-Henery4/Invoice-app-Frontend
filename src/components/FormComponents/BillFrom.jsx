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
          htmlFor="streetAddress"
        >
          Street Address
        </label>
        <input
          id="streetAddress"
          name="streetAddress"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="city"
        >
          City
        </label>
        <input
          id='city'
          name='city'
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="postcode"
        >
          Post Code
        </label>
        <input
          id='postcode'
          name='postcode'
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>

      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="country"
        >
          Country
        </label>
        <input
          id='country'
          name='country'
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
        />
      </div>
    </div>
  );
}

export default BillFrom