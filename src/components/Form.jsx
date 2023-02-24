import { useEffect } from "react";
import { BillFrom, BillTo, ItemList } from "../components/FormComponents";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";

const Form = ({
  invoiceFormValues,
  setInvoiceFormValues,
  defaultTerms,
  setDefaultTerms,
  listItemErrors,
  isInputErrors,
}) => {
  const handlePaymentDue = () => {
    setInvoiceFormValues((prevValues) => {
      return {
        ...prevValues,
        paymentDue: getCreatedAtDateFormat(
          new Date(
            new Date(invoiceFormValues?.createdAt).setDate(
              new Date(invoiceFormValues?.createdAt).getDate() +
                invoiceFormValues?.paymentTerms
            )
          )
        ),
      };
    });
  };
  //
  const handleTotalSum = () => {
    let total = 0;
    invoiceFormValues?.items?.forEach((item) => {
      total += item.total;
    });
    setInvoiceFormValues((prevValues) => {
      return { ...prevValues, total };
    });
  };
  //
  useEffect(() => {
    handleTotalSum();
  }, [invoiceFormValues?.items]);
  //
  useEffect(() => {
    handlePaymentDue();
  }, [invoiceFormValues?.paymentTerms, invoiceFormValues?.createdAt]);
  //
  return (
    <form id="invoiceForm" name="invoiceForm">
      <BillFrom
        setInvoiceFormValues={setInvoiceFormValues}
        {...invoiceFormValues?.senderAddress}
        isInputErrors={isInputErrors}
      />
      <BillTo
        setInvoiceFormValues={setInvoiceFormValues}
        {...invoiceFormValues}
        setDefaultTerms={setDefaultTerms}
        defaultTerms={defaultTerms}
        isInputErrors={isInputErrors}
      />
      <ItemList
        setInvoiceFormValues={setInvoiceFormValues}
        items={invoiceFormValues?.items}
        listItemErrors={listItemErrors}
      />
    </form>
  );
};

export default Form;
