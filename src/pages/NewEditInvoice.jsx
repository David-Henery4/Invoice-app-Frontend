import { useState, useEffect } from "react";
import { BackBtn, Form } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setFormModalOpenToFalse } from "../features/formModal/formModalSlice";
import {
  saveInvoiceAsDraft,
  endAndDeactivateEditInvoice,
  updateAndDeactivateEditInvoice,
  addNewInvoice,
} from "../features/invoiceData/invoiceDataSlice";
import initialInvoiceValues from "../initialInvoiceValueData/initialInvoiceValues";
import { useUniqueId } from "../hooks";
import getCreatedAtDateFormat from "../reusableFunctions/createdAtDateFormat";
import termsDropdownData from "../dropdowndata/termsDropdownData";

const NewEditInvoice = () => {
  const dispatch = useDispatch();
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
  const handleCloseForm = () => {
    dispatch(setFormModalOpenToFalse());
  };
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
        {isEditModeActive ? (
          <div className="w-full px-6 py-5 flex  justify-end items-center gap-[7px] bg-basicWhite pointer-events-auto tab:px-14 tab:py-8">
            <button
              className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24"
              onClick={() => {
                handleCloseForm();
                handleDiscardResetFormValues();
                dispatch(endAndDeactivateEditInvoice())
              }}
            >
              Cancel
            </button>
            <button
              className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
              onClick={() => {
                handleCloseForm();
                dispatch(updateAndDeactivateEditInvoice(invoiceFormValues));
              }}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="w-full px-6 py-5 flex flex-wrap justify-center items-center gap-[7px] bg-basicWhite pointer-events-auto tab:px-14 tab:py-8">
            <button
              className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24 tab:mr-auto"
              onClick={() => {
                handleCloseForm();
                handleDiscardResetFormValues();
              }}
            >
              Discard
            </button>
            <button
              className="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark tab:w-[113px]"
              onClick={() => {
                handleCloseForm();
                dispatch(saveInvoiceAsDraft(invoiceFormValues));
              }}
            >
              Save as Draft
            </button>
            <button
              className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
              onClick={() => {
                handleCloseForm();
                dispatch(addNewInvoice(invoiceFormValues))
              }}
            >
              Save & Send
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default NewEditInvoice;
