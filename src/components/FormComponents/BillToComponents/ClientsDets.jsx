import React from "react";
import { useSelector } from "react-redux";

const ClientsDets = ({
  clientDets,
  street,
  city,
  postCode,
  country,
}) => {
  const { inputErrors } = useSelector((store) => store.formModal);
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
            inputErrors?.clientName?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientName"
        >
          Client's Name
        </label>
        {inputErrors?.clientName?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientName?.msg}
          </p>
        )}
        <input
          id="clientName"
          name="clientName"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientName?.isError
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
            inputErrors?.clientEmail?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientEmail"
        >
          Clients's Email
        </label>
        {inputErrors?.clientEmail?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientEmail?.msg}
          </p>
        )}
        <input
          id="clientEmail"
          name="clientEmail"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientEmail?.isError
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
            inputErrors?.clientStreet?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientStreet"
        >
          Street Address
        </label>
        {inputErrors?.clientStreet?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientStreet?.msg}
          </p>
        )}
        <input
          id="clientStreet"
          name="street"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientStreet?.isError
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
            inputErrors?.clientCity?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientCity"
        >
          City
        </label>
        {inputErrors?.clientCity?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientCity?.msg}
          </p>
        )}
        <input
          id="clientCity"
          name="city"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientCity?.isError
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
            inputErrors?.clientPostCode?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientPostCode"
        >
          Post Code
        </label>
        {inputErrors?.clientPostCode?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientPostCode?.msg}
          </p>
        )}
        <input
          id="clientPostCode"
          name="postCode"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientPostCode?.isError
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
            inputErrors?.clientCountry?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight"
          }`}
          htmlFor="clientCountry"
        >
          Country
        </label>
        {inputErrors?.clientCountry?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.clientCountry?.msg}
          </p>
        )}
        <input
          id="clientCountry"
          name="country"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 ${
            inputErrors?.clientCountry?.isError
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
