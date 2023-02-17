import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteInvoice, markInvoiceAsPaid } from "../../features/invoiceData/invoiceDataSlice";

const ActionBtns = ({ isOnLargerScreens = false, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 ${
        isOnLargerScreens && "hidden flex-nowrap mdTab:flex"
      }`}
    >
      <button className="w-[73px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight">
        Edit
      </button>
      <button
        className="w-[89px] h-12 rounded-3xl bg-deleteBtn text-basicWhite"
        onClick={() => {
          dispatch(deleteInvoice(id));
          navigate("/");
        }}
      >
        Delete
      </button>
      <button className="w-[149px] h-12 rounded-3xl bg-primaryPurple text-basicWhite mdTab:w-[131px]" onClick={() => {
        dispatch(markInvoiceAsPaid(id))
      }}>
        Mark as Paid
      </button>
    </div>
  );
};

export default ActionBtns;
