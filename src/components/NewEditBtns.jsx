import { useSelector, useDispatch } from "react-redux";
import { setFormModalOpenToFalse,  setIsItemListErrors, resetIsItemListErrors, resetItemListErrorsList, setItemListErrorsList, resetInputErrors} from "../features/formModal/formModalSlice";
import {
  saveInvoiceAsDraft,
  endAndDeactivateEditInvoice,
} from "../features/invoiceData/invoiceDataSlice";
import checkDynamicInputValidations from "../validations/checkDynamicInputValidations";


const NewEditBtns = ({
  handleDiscardResetFormValues,
  invoiceFormValues,
  validation,
}) => {
  const dispatch = useDispatch();
  const { isEditModeActive } = useSelector((store) => store.invoiceData);
  //
  const handlelistItemInputsValidation = () => {
    const { listErrorsList, isListErrors } = checkDynamicInputValidations(
      invoiceFormValues?.items
    );
    dispatch(setIsItemListErrors(isListErrors))
    dispatch(setItemListErrorsList(listErrorsList))
    validation(invoiceFormValues, isListErrors);
  };
  //
  return (
    <>
      {isEditModeActive ? (
        <div className="w-full px-6 py-5 flex  justify-end items-center gap-[7px] bg-basicWhite pointer-events-auto tab:px-14 tab:py-8">
          <button
            className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24"
            onClick={() => {
              dispatch(setFormModalOpenToFalse());
              handleDiscardResetFormValues();
              dispatch(endAndDeactivateEditInvoice());
              // resetInputErrors()
              dispatch(resetInputErrors())
              dispatch(resetIsItemListErrors(false));
              dispatch(resetItemListErrorsList([]))
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
              dispatch(setFormModalOpenToFalse());
              handleDiscardResetFormValues();
              // resetInputErrors()
              dispatch(resetInputErrors());
              dispatch(resetIsItemListErrors(false));
              dispatch(resetItemListErrorsList([]));
            }}
          >
            Discard
          </button>
          <button
            className="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark tab:w-[113px]"
            onClick={() => {
              dispatch(setFormModalOpenToFalse());
              dispatch(saveInvoiceAsDraft(invoiceFormValues));
              handleDiscardResetFormValues();
              // resetInputErrors();
              dispatch(resetInputErrors());
              dispatch(resetIsItemListErrors(false));
              dispatch(resetItemListErrorsList([]));
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
