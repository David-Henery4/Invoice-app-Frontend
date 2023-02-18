import { useState } from "react";
import { BillFrom, BillTo, ItemList } from "../components/FormComponents";
import { useUniqueId } from "../hooks";

const Form = () => {
  const generateId = useUniqueId();
  const [invoiceFormValues, setInvoiceFormValues] = useState({
    id: generateId(),
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 0,
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
