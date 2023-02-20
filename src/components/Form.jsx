import { useEffect, useState } from "react";
import { BillFrom, BillTo, ItemList } from "../components/FormComponents";
import handleDateFormatting from "../reusableFunctions/dateFormatting";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";
import { useUniqueId } from "../hooks";

const Form = () => {
  const generateId = useUniqueId();
  const [invoiceFormValues, setInvoiceFormValues] = useState({
    id: generateId(),
    createdAt: getCreatedAtDateFormat(),
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    status: "pending",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  });
  //
  const handlePaymentDue = () => {
    setInvoiceFormValues((prevValues) => {
      return {
        ...prevValues,
        paymentDue: getCreatedAtDateFormat(
          new Date(
            new Date(invoiceFormValues.createdAt).setDate(
              new Date(invoiceFormValues.createdAt).getDate() +
                invoiceFormValues?.paymentTerms
            )
          )
        ),
      };
    })
  };
  //
  useEffect(() => {
    handlePaymentDue()
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
      />
      <ItemList
        setInvoiceFormValues={setInvoiceFormValues}
        items={invoiceFormValues?.items}
      />
    </form>
  );
};

export default Form;
