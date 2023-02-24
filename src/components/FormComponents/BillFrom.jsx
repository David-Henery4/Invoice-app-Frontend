import React from 'react'

const BillFrom = ({
  street,
  city,
  postCode,
  country,
  setInvoiceFormValues,
  isInputErrors
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

      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.senderStreet?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="senderStreet"
        >
          Street Address
        </label>
        {isInputErrors?.senderStreet?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.senderStreet?.msg}
          </p>
        )}
        <input
          id="senderStreet"
          name="street"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.senderStreet?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={street}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.senderCity?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="senderCity"
        >
          City
        </label>
        {isInputErrors?.senderCity?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.senderCity?.msg}
          </p>
        )}
        <input
          id="senderCity"
          name="city"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.senderCity?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={city}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.senderPostCode?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="senderPostcode"
        >
          Post Code
        </label>
        {isInputErrors?.senderPostCode?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.senderPostCode?.msg}
          </p>
        )}
        <input
          id="senderPostcode"
          name="postCode"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.senderPostCode?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={postCode}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleSenderAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.senderCountry?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="senderCountry"
        >
          Country
        </label>
        {isInputErrors?.senderCountry?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.senderCountry?.msg}
          </p>
        )}
        <input
          id="senderCountry"
          name="country"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.senderCountry?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
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