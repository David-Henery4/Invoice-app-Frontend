import { useEffect, useState } from "react";
import { ArrowDown } from "../../../assets";
import PaymentTermsDroptdown from "./PaymentTermsDroptdown";
import getCreatedAtDateFormat from "../../../reusableFunctions/createdAtDateFormat";
import handleDateFormatting from "../../../reusableFunctions/dateFormatting";

const InvoiceDets = ({ invoiceDets }) => {
  const { description, createdAt, paymentTerms, setInvoiceFormValues } =
    invoiceDets;
  const [isTermsDropdownActive, setIsTermsDropdownActive] = useState(false);
  const [defaultTerms, setDefaultTerms] = useState({
    id: 1,
    label: "Net 1 day",
    days: 1,
  });
  //
  const handleValueChanges = (e) => {
    setInvoiceFormValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  //
  useEffect(() => {
    setInvoiceFormValues((prevValues) => {
      return { ...prevValues, paymentTerms : defaultTerms?.days};
    })
  },[defaultTerms])
  //
  return (
    <div className="w-full grid gap-6 grid-cols-6 col-start-1 col-end-7">
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-1 tab:col-end-4">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="invoiceDate"
        >
          Invoice Date
        </label>
        <input
          id="invoiceDate"
          name="createdAt"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
          type="date"
          min={getCreatedAtDateFormat(new Date())}
          value={createdAt}
          onChange={(e) => {
            handleValueChanges(e);
          }}
        />
      </div>
      <div className="grid gap-2 col-start-1 col-end-7 tab:col-start-4 tab:col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="paymentTerms"
        >
          Payment Terms
        </label>
        <div className="relative">
          <input
            id="paymentTerms"
            name="paymentTerms"
            readOnly={true}
            className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3 hover:cursor-pointer"
            type="text"
            value={defaultTerms.label}
            onClick={() => {
              setIsTermsDropdownActive(!isTermsDropdownActive);
            }}
          />
          <ArrowDown className="absolute -translate-y-1/2 top-1/2 right-5 hover:cursor-pointer" />
          {/* Dropdown */}
          <PaymentTermsDroptdown
            setDefaultTerms={setDefaultTerms}
            isTermsDropdownActive={isTermsDropdownActive}
          />
        </div>
      </div>
      <div className="grid gap-2 col-start-1 col-end-7">
        <label
          className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
          htmlFor="projectDescription"
        >
          Project Description
        </label>
        <input
          id="projectDescription"
          name="description"
          className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
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
