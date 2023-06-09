import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleClientAddressValueChange,
  handleClientEmailValueChange,
  handleClientNameValueChange,
} from "../../../features/formModal/formModalSlice";

const ClientsDets = ({ clientDets, street, city, postCode, country }) => {
  const dispatch = useDispatch();
  const { inputErrors } = useSelector((store) => store.formModal);
  const { clientName, clientEmail } = clientDets;
  //
  return (
    <div className="w-full grid gap-6 grid-cols-6 pb-10 col-start-1 col-end-7">
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientName?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientName?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={clientName}
          onChange={(e) => {
            dispatch(handleClientNameValueChange(e.target.value));
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientEmail?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientEmail?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={clientEmail}
          onChange={(e) => {
            dispatch(handleClientEmailValueChange(e.target.value));
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientStreet?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientStreet?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={street}
          onChange={(e) => {
            dispatch(
              handleClientAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientCity?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientCity?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={city}
          onChange={(e) => {
            dispatch(
              handleClientAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientPostCode?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientPostCode?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={postCode}
          onChange={(e) => {
            dispatch(
              handleClientAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className={`text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.clientCountry?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
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
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.clientCountry?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={country}
          onChange={(e) => {
            dispatch(
              handleClientAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default ClientsDets;
