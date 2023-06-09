import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleSenderAddressValueChange } from '../../features/formModal/formModalSlice';

const BillFrom = ({
  street,
  city,
  postCode,
  country,
}) => {
  const dispatch = useDispatch()
  const { inputErrors } = useSelector((store) => store.formModal);
  //
  return (
    <div className="grid gap-6 grid-cols-6 pb-10">
      <h3 className="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 col-start-1 col-end-7">
        Bill From
      </h3>

      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.senderStreet?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
          }`}
          htmlFor="senderStreet"
        >
          Street Address
        </label>
        {inputErrors?.senderStreet?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.senderStreet?.msg}
          </p>
        )}
        <input
          id="senderStreet"
          name="street"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.senderStreet?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={street}
          onChange={(e) => {
            dispatch(
              handleSenderAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.senderCity?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
          }`}
          htmlFor="senderCity"
        >
          City
        </label>
        {inputErrors?.senderCity?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.senderCity?.msg}
          </p>
        )}
        <input
          id="senderCity"
          name="city"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.senderCity?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={city}
          onChange={(e) => {
            dispatch(
              handleSenderAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.senderPostCode?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
          }`}
          htmlFor="senderPostcode"
        >
          Post Code
        </label>
        {inputErrors?.senderPostCode?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.senderPostCode?.msg}
          </p>
        )}
        <input
          id="senderPostcode"
          name="postCode"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.senderPostCode?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={postCode}
          onChange={(e) => {
            dispatch(
              handleSenderAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>

      <div className="relative grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.senderCountry?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
          }`}
          htmlFor="senderCountry"
        >
          Country
        </label>
        {inputErrors?.senderCountry?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.senderCountry?.msg}
          </p>
        )}
        <input
          id="senderCountry"
          name="country"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.senderCountry?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={country}
          onChange={(e) => {
            dispatch(
              handleSenderAddressValueChange({
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default BillFrom