import React from "react";

const ClientsDets = ({clientDets, street,city,postCode,country}) => {
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
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientName"
        >
          Client's Name
        </label>
        <input
          id="clientName"
          name="clientName"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={clientName}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) => {
              return { ...prevValues, clientName: e.target.value };
            });
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientEmail"
        >
          Clients's Email
        </label>
        <input
          id="clientEmail"
          name="clientEmail"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={clientEmail}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) => {
              return { ...prevValues, clientEmail: e.target.value };
            });
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientStreet"
        >
          Street Address
        </label>
        <input
          id="clientStreet"
          name="street"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={street}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientCity"
        >
          City
        </label>
        <input
          id="clientCity"
          name="city"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={city}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientPostCode"
        >
          Post Code
        </label>
        <input
          id="clientPostCode"
          name="postCode"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="text"
          value={postCode}
          onChange={(e) => {
            setInvoiceFormValues((prevValues) =>
              handleClientAddressValueChange(prevValues, e)
            );
          }}
        />
      </div>

      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="clientCountry"
        >
          Country
        </label>
        <input
          id="clientCountry"
          name="country"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
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
