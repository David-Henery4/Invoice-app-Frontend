import React from "react";

const ClientsDets = ({
  clientDets,
  street,
  city,
  postCode,
  country,
  isInputErrors,
}) => {
  const { clientName, clientEmail, setInvoiceFormValues } = clientDets;
  //
  const handleClientAddressValueChange = (prevValues, e) => {
    return {
      ...prevValues,
      clientAddress: {
        ...prevValues.clientAddress,
        [e.target.name]: e.target.value,
      },
    };
  };
  //
  return (
    <div className="w-full grid gap-6 grid-cols-6 pb-10 col-start-1 col-end-7">
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientName?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientName"
        >
          Client's Name
        </label>
        {isInputErrors?.clientName?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientName?.msg}
          </p>
        )}
        <input
          id="clientName"
          name="clientName"
          className={`w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 ${
            isInputErrors?.clientName?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={clientName}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) => {
              return { ...prevValues, clientName: e.target.value };
            });
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientEmail?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientEmail"
        >
          Clients's Email
        </label>
        {isInputErrors?.clientEmail?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientEmail?.msg}
          </p>
        )}
        <input
          id="clientEmail"
          name="clientEmail"
          className={`w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 ${
            isInputErrors?.clientEmail?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={clientEmail}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) => {
              return { ...prevValues, clientEmail: e.target.value };
            });
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientStreet?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientStreet"
        >
          Street Address
        </label>
        {isInputErrors?.clientStreet?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientStreet?.msg}
          </p>
        )}
        <input
          id="clientStreet"
          name="street"
          className={`w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 ${
            isInputErrors?.clientStreet?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={street}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientCity?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientCity"
        >
          City
        </label>
        {isInputErrors?.clientCity?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientCity?.msg}
          </p>
        )}
        <input
          id="clientCity"
          name="city"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.clientCity?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={city}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientPostCode?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientPostCode"
        >
          Post Code
        </label>
        {isInputErrors?.clientPostCode?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientPostCode?.msg}
          </p>
        )}
        <input
          id="clientPostCode"
          name="postCode"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.clientPostCode?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={postCode}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            isInputErrors?.clientCountry?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientCountry"
        >
          Country
        </label>
        {isInputErrors?.clientCountry?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {isInputErrors?.clientCountry?.msg}
          </p>
        )}
        <input
          id="clientCountry"
          name="country"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            isInputErrors?.clientCountry?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark"
          }`}
          type="text"
          value={country}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
    </div>
  );
};

export default ClientsDets;
