import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInvoiceFormValuesPaymentTerms,
  handleValueChange,
} from "../../../features/formModal/formModalSlice";
import PaymentTermsDroptdown from "./PaymentTermsDroptdown";
import getCreatedAtDateFormat from "../../../reusableFunctions/createdAtDateFormat";
import useClickOffDropdown from "../../../hooks/useClickOffDropdown";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext/themeContext";

const InvoiceDets = ({ invoiceDets }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { inputErrors } = useSelector((store) => store.formModal);
  const { description, createdAt, defaultTerms } = invoiceDets;
  const [isTermsDropdownActive, setIsTermsDropdownActive] = useState(false);
  const termsDropDownRef = useRef();
  useClickOffDropdown(
    termsDropDownRef,
    setIsTermsDropdownActive,
    "#paymentTerms"
  );
  //
  const handleValueChanges = (e) => {
    dispatch(handleValueChange({ [e.target.name]: e.target.value }));
  };
  //
  useEffect(() => {
    dispatch(updateInvoiceFormValuesPaymentTerms(defaultTerms?.days));
  }, [defaultTerms]);
  //
  return (
    <div className="w-full grid gap-6 grid-cols-6 col-start-1 col-end-7">
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-1 tab:col-end-4">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 dark:text-shadedTextDark"
          htmlFor="invoiceDate"
        >
          Invoice Date
        </label>
        <input
          id="invoiceDate"
          name="createdAt"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 dark:bg-shadedContentDark dark:border-none"
          type="date"
          style={{colorScheme: `${theme === "dark" ? "dark" : ""}`}}
          min={getCreatedAtDateFormat(new Date())}
          value={createdAt}
          onChange={(e) => {
            handleValueChanges(e);
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-4 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4 dark:text-shadedTextDark"
          htmlFor="paymentTerms"
        >
          Payment Terms
        </label>
        <div className="relative">
          <input
            ref={termsDropDownRef}
            id="paymentTerms"
            name="paymentTerms"
            readOnly={true}
            className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 dark:bg-shadedContentDark hover:cursor-pointer dark:border-none"
            type="text"
            value={defaultTerms.label}
            onClick={() => {
              setIsTermsDropdownActive(!isTermsDropdownActive);
            }}
          />
          <ArrowDown className="absolute -translate-y-1/2 top-1/2 right-5 pointer-events-none hover:cursor-pointer" />
          {/* Dropdown */}
          <PaymentTermsDroptdown
            // setDefaultTerms={setDefaultTerms}
            isTermsDropdownActive={isTermsDropdownActive}
          />
        </div>
      </div>
      <div className="relative grid gap-2 col-start-1 col-end-7">
        <label
          className={`text-xs font-medium leading-heading4 tracking-heading4 ${
            inputErrors?.description?.isError
              ? "text-deleteBtn"
              : "text-shadedTextLight dark:text-shadedTextDark"
          }`}
          htmlFor="projectDescription"
        >
          Project Description
        </label>
        {inputErrors?.description?.isError && (
          <p className="text-xs text-deleteBtn absolute top-0 right-0">
            {inputErrors?.description?.msg}
          </p>
        )}
        <input
          id="projectDescription"
          name="description"
          className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
            inputErrors?.description?.isError
              ? "border-deleteBtn"
              : "border-shadedTextDark dark:border-none"
          }`}
          type="text"
          value={description}
          onChange={(e) => {
            handleValueChanges(e);
          }}
        />
      </div>
    </div>
  );
};

export default InvoiceDets;
