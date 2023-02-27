import { useSelector, useDispatch } from "react-redux";
import {
  setFormModalOpenToFalse,
  setIsItemListErrors,
  resetIsItemListErrors,
  resetItemListErrorsList,
  setItemListErrorsList,
  resetInputErrors,
  setDefaultTerms,
  setInvoiceFormValues,
} from "../features/formModal/formModalSlice";
import {
  saveInvoiceAsDraft,
  endAndDeactivateEditInvoice,
} from "../features/invoiceData/invoiceDataSlice";
import checkDynamicInputValidations from "../validations/checkDynamicInputValidations";

const NewEditBtns = ({ validation }) => {
  const dispatch = useDispatch();
  const { isEditModeActive } = useSelector((store) => store.invoiceData);
  const { invoiceFormValues } = useSelector((store) => store.formModal);
  //
  const handlelistItemInputsValidation = () => {
    const { listErrorsList, isListErrors } = checkDynamicInputValidations(
      invoiceFormValues?.items
    );
    dispatch(setIsItemListErrors(isListErrors));
    dispatch(setItemListErrorsList(listErrorsList));
    validation(invoiceFormValues, isListErrors);
  };
  //
  const handleValueAndErrorReset = () => {
    dispatch(setInvoiceFormValues());
    dispatch(setDefaultTerms());
    dispatch(resetInputErrors());
    dispatch(resetIsItemListErrors(false));
    dispatch(resetItemListErrorsList([]));
    dispatch(setFormModalOpenToFalse());
    if (isEditModeActive){
      dispatch(endAndDeactivateEditInvoice());
    }
  };
  //
  return (
    <>
      {isEditModeActive ? (
        <div className="w-full px-6 py-5 flex  justify-end items-center gap-[7px] bg-basicWhite pointer-events-auto tab:px-14 tab:py-8">
          <button
            className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24"
            onClick={() => {
              handleValueAndErrorReset()
            }}
          >
            Cancel
          </button>
          <button
            className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
            onClick={() => {
              handlelistItemInputsValidation();
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
              handleValueAndErrorReset()
            }}
          >
            Discard
          </button>
          <button
            className="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark tab:w-[113px]"
            onClick={() => {
              handleValueAndErrorReset()
              dispatch(saveInvoiceAsDraft(invoiceFormValues));
            }}
          >
            Save as Draft
          </button>
          <button
            className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
            onClick={() => {
              handlelistItemInputsValidation();
            }}
          >
            Save & Send
          </button>
        </div>
      )}
    </>
  );
};

export default NewEditBtns;
