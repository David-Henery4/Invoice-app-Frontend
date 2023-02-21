import { useEffect, useState } from "react";
import { BillFrom, BillTo, ItemList } from "../components/FormComponents";
import handleDateFormatting from "../reusableFunctions/dateFormatting";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";
import { useUniqueId } from "../hooks";

const Form = ({
  invoiceFormValues,
  setInvoiceFormValues,
  defaultTerms,
  setDefaultTerms,
}) => {
  //
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
      />
      <BillTo
        setInvoiceFormValues={setInvoiceFormValues}
        {...invoiceFormValues}
        setDefaultTerms={setDefaultTerms}
        defaultTerms={defaultTerms}
      />
      <ItemList
        setInvoiceFormValues={setInvoiceFormValues}
        items={invoiceFormValues?.items}
      />
    </form>
  );
};

export default Form;
