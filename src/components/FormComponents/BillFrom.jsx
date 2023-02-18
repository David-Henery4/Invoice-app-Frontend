import React from 'react'

const BillFrom = ({
  street,
  city,
  postCode,
  country,
  setInvoiceFormValues,
}) => {
  //
  const handleSenderAddressValueChange = (prevValues,e) => {
    return {
      ...prevValues,
      senderAddress: { ...prevValues.senderAddress, [e.target.name]: e.target.value },
    };
  }
  //
  return (
    <div className="grid gap-6 grid-cols-6 pb-10">
      <h3 className="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 col-start-1 col-end-7">
        Bill From
      </h3>

      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="senderStreet"
        >
          Street Address
        </label>
        <input
          id="senderStreet"
          name="street"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={street}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="senderCity"
        >
          City
        </label>
        <input
          id="senderCity"
          name="city"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={city}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="senderPostcode"
        >
          Post Code
        </label>
        <input
          id="senderPostcode"
          name="postCode"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={postCode}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="senderCountry"
        >
          Country
        </label>
        <input
          id="senderCountry"
          name="country"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={country}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
    </div>
  );
};

export default BillFrom