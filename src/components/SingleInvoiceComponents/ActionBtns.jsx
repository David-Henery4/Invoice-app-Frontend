import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAndActivateEditInvoice,
  // APIs
  updateEditedInvoice,
  toggleDeleteModal
} from "../../features/invoiceData/invoiceDataSlice";
import { setFormModalOpenToTrue } from "../../features/formModal/formModalSlice";

const ActionBtns = ({ isOnLargerScreens = false }) => {
  const dispatch = useDispatch();
  const { activeSingleInvoice } = useSelector(
    (store) => store.invoiceData
  );
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 ${
        isOnLargerScreens && "hidden flex-nowrap mdTab:flex bg-none"
      }`}
    >
      <button
        className="w-[73px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight hover:bg-shadedTextDark active:text-shadedTextLight active:bg-shadedContentLight dark:bg-shadedContentDark dark:text-shadedTextDark dark:hover:text-shadedTextLight dark:hover:bg-basicWhite active:dark:bg-shadedContentDark active:dark:text-shadedTextDark"
        onClick={() => {
          dispatch(setFormModalOpenToTrue());
          dispatch(getAndActivateEditInvoice(activeSingleInvoice.invoiceId));
        }}
      >
        Edit
      </button>
      <button
        className="w-[89px] h-12 rounded-3xl bg-deleteBtn text-basicWhite hover:bg-deleteBtnShaded active:bg-deleteBtn"
        onClick={() => {
          dispatch(toggleDeleteModal());
        }}
      >
        Delete
      </button>
      <button
        className="w-[149px] h-12 rounded-3xl bg-primaryPurple text-basicWhite mdTab:w-[131px] hover:bg-shadedPurple active:bg-primaryPurple"
        onClick={() => {
          dispatch(
            updateEditedInvoice({
              ...activeSingleInvoice,
              status: "paid",
            })
          );
        }}
        disabled={activeSingleInvoice.status === "draft"}
      >
        Mark as Paid
      </button>
    </div>
  );
};

export default ActionBtns;
