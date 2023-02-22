import { useSelector, useDispatch } from "react-redux";
import { setFormModalOpenToFalse } from "../features/formModal/formModalSlice";
import {
  saveInvoiceAsDraft,
  endAndDeactivateEditInvoice,
  updateAndDeactivateEditInvoice,
  addNewInvoice,
} from "../features/invoiceData/invoiceDataSlice";
import checkDynamicInputValidations from "../validations/checkDynamicInputValidations";

const NewEditBtns = ({
  handleDiscardResetFormValues,
  invoiceFormValues,
  listItemErrors,
}) => {
  const dispatch = useDispatch();
  const { isEditModeActive } = useSelector((store) => store.invoiceData);
  const {
    isItemListErrors,
    setIsItemListErrors,
    itemListErrorsList,
    setItemListErrorsList,
  } = listItemErrors;
  //
  const handlelistItemInputsValidation = () => {
    const { listErrorsList, isListErrors } = checkDynamicInputValidations(
      invoiceFormValues?.items
    );
    setIsItemListErrors(isListErrors);
    setItemListErrorsList(listErrorsList);
    if (!isListErrors) {
      dispatch(setFormModalOpenToFalse());
      dispatch(addNewInvoice(invoiceFormValues));
      handleDiscardResetFormValues();
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
              dispatch(setFormModalOpenToFalse());
              handleDiscardResetFormValues();
              dispatch(endAndDeactivateEditInvoice());
            }}
          >
            Cancel
          </button>
          <button
            className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
            onClick={() => {
              dispatch(setFormModalOpenToFalse());
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
              dispatch(setFormModalOpenToFalse());
              handleDiscardResetFormValues();
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
            }}
          >
            Save as Draft
          </button>
          <button
            className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
            onClick={() => {
              handlelistItemInputsValidation();
              // if (!isItemListErrors) {
              //   dispatch(setFormModalOpenToFalse());
              //   dispatch(addNewInvoice(invoiceFormValues));
              //   handleDiscardResetFormValues();
              // }
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