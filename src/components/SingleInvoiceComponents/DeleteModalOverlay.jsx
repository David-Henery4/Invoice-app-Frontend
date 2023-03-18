import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteModal } from "../../features/invoiceData/invoiceDataSlice";

const DeleteModalOverlay = () => {
  const dispatch = useDispatch()
  const { isDeleteModalActive } = useSelector((store) => store.invoiceData);
  //
  return (
    <div className={`fixed top-0 left-0 z-50 w-full h-full bg-basicBlack/50 ${isDeleteModalActive ? "block" : "hidden"}`} onClick={() => {
      dispatch(toggleDeleteModal())
    }}></div>
  );
}

export default DeleteModalOverlay