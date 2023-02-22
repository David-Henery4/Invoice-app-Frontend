import { useState, useEffect } from "react";
import { BackBtn, Form, NewEditBtns } from "../components";
import { useSelector} from "react-redux";
import initialInvoiceValues from "../initialInvoiceValueData/initialInvoiceValues";
import { useUniqueId } from "../hooks";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";
import termsDropdownData from "../dropdowndata/termsDropdownData";

const NewEditInvoice = () => {
  const generateId = useUniqueId();
  const { isFormOpen } = useSelector((store) => store.formModal);
  const {
    isEditModeActive,
    currentEditedInvoice,
  } = useSelector((store) => store.invoiceData);
  const [invoiceFormValues, setInvoiceFormValues] =
    useState(initialInvoiceValues);
  const [defaultTerms, setDefaultTerms] = useState({
    id: 1,
    label: "Net 1 day",
    days: 1,
  });
  //
  const handleDiscardResetFormValues = () => {
    setInvoiceFormValues(initialInvoiceValues);
    setInvoiceFormValues((prevValues) => {
      return {
        ...prevValues,
        id: generateId(),
        createdAt: getCreatedAtDateFormat(),
      };
    });
    setDefaultTerms({
      id: 1,
      label: "Net 1 day",
      days: 1,
    });
  };
  //
  useEffect(() => {
    if(isEditModeActive){
      setInvoiceFormValues(currentEditedInvoice)
      setDefaultTerms(termsDropdownData.find(terms => terms.days === currentEditedInvoice.paymentTerms))
    }
    if(!isEditModeActive){
      handleDiscardResetFormValues()
    }

  }, [isEditModeActive])
  //
  return (
    <main
      className={`fixed top-[72px] overflow-y-scroll bg-basicWhite w-full h-[calc(100vh-72px)] pt-8 z-10 transition-all -translate-x-[200%] grid grid-cols-formPageMob max-w-[616px] mdTab:rounded-r-[20px] tab:grid-cols-formPageTab md:top-20 lg:top-0 lg:h-screen lg:max-w-[666px] lg:pl-[50px] lg:left-[50px] lg:z-[1] ${
        isFormOpen && "translate-x-0"
      }`}
    >
      <section
        className="col-start-2 col-end-12 pb-6
        "
      >
        <BackBtn isOnInvoiceForm={true} />
        <h2 className="text-2xl leading-heading1 -tracking-subheading font-bold mb-6">
          {isEditModeActive ? `Edit #${invoiceFormValues.id}` : "New Invoice"}
        </h2>
        <Form
          invoiceFormValues={invoiceFormValues}
          setInvoiceFormValues={setInvoiceFormValues}
          defaultTerms={defaultTerms}
          setDefaultTerms={setDefaultTerms}
        />
      </section>
      <div className="w-full col-start-1 col-end-13 tab:sticky tab:bottom-0 tab:left-0 pointer-events-none">
        <div className="w-full h-16 bg-gradient-to-t from-basicBlack to-basicBlack/10 opacity-10"></div>
        <NewEditBtns
          handleDiscardResetFormValues={handleDiscardResetFormValues}
          invoiceFormValues={invoiceFormValues}
        />
      </div>
    </main>
  );
};

export default NewEditInvoice;
