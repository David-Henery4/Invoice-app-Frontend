import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAndActivateEditInvoice,
  // apis
  removeInvoice,
  updateEditedInvoice
} from "../../features/invoiceData/invoiceDataSlice";
import { setFormModalOpenToTrue } from "../../features/formModal/formModalSlice";

const ActionBtns = ({ isOnLargerScreens = false }) => {
  const navigate = useNavigate();
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
        className="w-[73px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight dark:bg-shadedContentDark dark:text-shadedTextDark"
        onClick={() => {
          dispatch(setFormModalOpenToTrue());
          dispatch(getAndActivateEditInvoice(activeSingleInvoice.invoiceId));
        }}
      >
        Edit
      </button>
      <button
        className="w-[89px] h-12 rounded-3xl bg-deleteBtn text-basicWhite"
        onClick={() => {
          dispatch(
            removeInvoice({
              userId: activeSingleInvoice.userId,
              _id: activeSingleInvoice._id,
            })
          );
          navigate("/");
        }}
      >
        Delete
      </button>
      <button
        className="w-[149px] h-12 rounded-3xl bg-primaryPurple text-basicWhite mdTab:w-[131px]"
        onClick={() => {
          dispatch(
            updateEditedInvoice({
              ...activeSingleInvoice,
              status: "paid",
            })
          );
        }}
      >
        Mark as Paid
      </button>
    </div>
  );
};

export default ActionBtns;
