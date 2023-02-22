import { useUniqueId } from "../hooks";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";
const generateId = useUniqueId();

const initialInvoiceValues = {
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
      id: generateId(),
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ],
  total: 0,
};

export default initialInvoiceValues;
