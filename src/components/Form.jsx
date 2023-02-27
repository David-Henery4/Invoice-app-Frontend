import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BillFrom, BillTo, ItemList } from "../components/FormComponents";
import {
  updateInvoiceFormValuesPaymentDue,
  updateInvoiceFormValuesTotalSum,
} from "../features/formModal/formModalSlice";

const Form = ({
  invoiceFormValues,
  defaultTerms,
}) => {
  const dispatch = useDispatch()
  //
  useEffect(() => {
    dispatch(updateInvoiceFormValuesTotalSum())
  }, [invoiceFormValues?.items]);
  //
  useEffect(() => {
    dispatch(updateInvoiceFormValuesPaymentDue())
  }, [invoiceFormValues?.paymentTerms, invoiceFormValues?.createdAt]);
  //
  return (
    <form id="invoiceForm" name="invoiceForm">
      <BillFrom
        {...invoiceFormValues?.senderAddress}
      />
      <BillTo
        {...invoiceFormValues}
        defaultTerms={defaultTerms}
      />
      <ItemList
        items={invoiceFormValues?.items}
      />
    </form>
  );
};

export default Form;
