import { useEffect } from "react";
import { BackBtn, Form, NewEditBtns } from "../components";
import { useSelector, useDispatch } from "react-redux";
import useCheckInputValidations from "../validations/useCheckInputValidations";
import { setFormModalOpenToFalse, setInputErrors, setDefaultTerms, setInvoiceFormValues, updateEditedDefaultTerms, updateEditedInvoiceFormValues } from "../features/formModal/formModalSlice";
import {
  updateAndDeactivateEditInvoice,
  addNewInvoice,
} from "../features/invoiceData/invoiceDataSlice";

const NewEditInvoice = () => {
  const dispatch = useDispatch()
  const { isFormOpen } = useSelector((store) => store.formModal);
  const { isEditModeActive, currentEditedInvoice } = useSelector(
    (store) => store.invoiceData
  );
  const { invoiceFormValues, defaultTerms} = useSelector(
    (store) => store.formModal
  );
  //
  const handleFinalSubmit = (finalValues) => {
    if (!isEditModeActive){
      handleCreateNewInvoice(finalValues)
    }
    if (isEditModeActive){
      handleEditInvoice(finalValues)
    }
  }
  //
    const handleCreateNewInvoice = (values) => {
      dispatch(setFormModalOpenToFalse());
      dispatch(addNewInvoice(values));
      dispatch(setInvoiceFormValues());
      dispatch(setDefaultTerms());
    };
    //
    const handleEditInvoice = (values) => {
      dispatch(setFormModalOpenToFalse());
      dispatch(updateAndDeactivateEditInvoice(values));
    };
  //
  const { isInputErrors, validation } =
    useCheckInputValidations(handleFinalSubmit);
  //
  useEffect(() => {
    dispatch(setInputErrors(isInputErrors))
  },[isInputErrors])
  //
  useEffect(() => {
    if (isEditModeActive) {
      dispatch(
        updateEditedInvoiceFormValues(currentEditedInvoice)
      )
      dispatch(
        updateEditedDefaultTerms(currentEditedInvoice)
      )
    }
    if (!isEditModeActive) {
      dispatch(setInvoiceFormValues());
      dispatch(setDefaultTerms());
    }
  }, [isEditModeActive]);
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
          defaultTerms={defaultTerms}
        />
      </section>
      <div className="w-full col-start-1 col-end-13 tab:sticky tab:bottom-0 tab:left-0 pointer-events-none">
        <div className="w-full h-16 bg-gradient-to-t from-basicBlack to-basicBlack/10 opacity-10"></div>
        <NewEditBtns
          validation={validation}
        />
      </div>
    </main>
  );
};

export default NewEditInvoice;
