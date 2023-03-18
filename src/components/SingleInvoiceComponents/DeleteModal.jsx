import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toggleDeleteModal,
  removeInvoice,
} from "../../features/invoiceData/invoiceDataSlice";

const DeleteModal = ({ invoiceId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isDeleteModalActive, activeSingleInvoice } = useSelector(
    (store) => store.invoiceData
  );
  //
  return (
    <div
      className={`absolute z-[60] w-11/12 max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg px-6 py-12 mdTab:p-12 mdTab:text-left text-center bg-basicWhite grid gap-4 dark:bg-contentBgDark ${
        isDeleteModalActive ? "block" : "hidden"
      }`}
    >
      <h2 className="text-textLight font-semibold text-2xl leading-[32px] -tracking-[.5px] dark:text-basicWhite">
        Confirm Deletion
      </h2>
      <p className="text-med font-normal text-textReallyDark leading-heading2 -tracking-[.25px] dark:text-shadedTextDark">
        Are you sure you want to delete invoice <span>#{invoiceId}?</span> This
        action cannot be undone.
      </p>
      <div className="flex gap-2 justify-center flex-wrap mdTab:justify-end">
        <button
          className="w-24 h-12 rounded-3xl text-shadedTextLight bg-shadedContentLight hover:bg-[#E4E8FE] active:bg-shadedContentLight dark:text-shadedTextDark dark:bg-shadedContentDark dark:hover:bg-[#313345] active:dark:bg-shadedContentDark"
          onClick={() => {
            dispatch(toggleDeleteModal());
          }}
        >
          Cancel
        </button>
        <button
          className="w-24 h-12 bg-deleteBtn text-basicWhite rounded-3xl hover:bg-deleteBtnShaded active:bg-deleteBtn"
          onClick={() => {
            dispatch(
              removeInvoice({
                userId: activeSingleInvoice.userId,
                _id: activeSingleInvoice._id,
              })
            );
            navigate("/");
            dispatch(toggleDeleteModal());
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal