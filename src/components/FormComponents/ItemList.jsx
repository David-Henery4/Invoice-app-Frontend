import { IconDelete } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { updateInvoiceFormValuesAddNewItem, updateInvoiceFormValuesDeleteItem, handleItemValuesChange } from "../../features/formModal/formModalSlice";



const ItemList = ({ setInvoiceFormValues, items }) => {
  const dispatch = useDispatch()
  const { isItemListErrors, itemListErrorsList } = useSelector(
    (store) => store.formModal
  );
  //
  return (
    <div>
      <h2 className="font-bold text-[#777F98] text-lg leading-heading1 -tracking-[0.38px] mb-6">
        Item List
      </h2>
      {/* item */}
      {items?.map((item, i) => {
        let isErrorName = {
          isError: false,
          msg: "",
        };
        let isErrorQuantity = {
          isError: false,
          msg: "",
        };
        let isErrorPrice = {
          isError: false,
          msg: "",
        };
        itemListErrorsList.map((err, errIndex) => {
          if (item.id === err.id) {
            isErrorName = err.nameError;
            isErrorQuantity = err.quantityError;
            isErrorPrice = err.priceError;
          }
        });
        return (
          <div
            key={i}
            className="grid grid-cols-12 gap-x-4 gap-y-6 tab:grid-cols-itemListDesk"
          >
            <div className="relative w-full col-start-1 col-end-13 tab:col-start-1 tab:col-end-2">
              <label
                className={`text-xs font-medium leading-heading4 tracking-heading4 ${
                  isErrorName?.isError
                    ? "text-deleteBtn"
                    : "text-shadedTextLight dark:text-shadedTextDark"
                }`}
                htmlFor="itemName"
              >
                Item Name
              </label>
              <input
                className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
                  isErrorName?.isError
                    ? "border-deleteBtn"
                    : "border-shadedTextDark dark:border-none"
                }`}
                name="name"
                id="itemName"
                type="text"
                value={item?.name}
                onChange={(e) => {
                  const id = item?.id;
                  dispatch(
                    handleItemValuesChange({
                      id,
                      nameValue: { [e.target.name]: e.target.value },
                    })
                  );
                }}
              />
            </div>
            <div className="w-full col-start-1 col-end-4 tab:col-start-2 tab:col-end-3">
              <label
                className={`text-xs font-medium leading-heading4 tracking-heading4 ${
                  isErrorQuantity?.isError
                    ? "text-deleteBtn"
                    : "text-shadedTextLight dark:text-shadedTextDark"
                }`}
                htmlFor="itemQuantity"
              >
                Qty
              </label>
              <input
                className={`w-full rounded-md border-2  outline-none p-3 dark:bg-shadedContentDark ${
                  isErrorQuantity?.isError
                    ? "border-deleteBtn"
                    : "border-shadedTextDark dark:border-none"
                }`}
                name="quantity"
                id="itemQuantity"
                type="number"
                value={item?.quantity}
                onChange={(e) => {
                  const id = item?.id;
                  dispatch(
                    handleItemValuesChange({
                      id,
                      nameValue: { [e.target.name]: e.target.value },
                    })
                  );
                }}
              />
            </div>
            <div className="w-full col-start-4 col-end-8 tab:col-start-3 tab:col-end-4">
              <label
                className={`text-xs font-medium leading-heading4 tracking-heading4 ${
                  isErrorPrice?.isError
                    ? "text-deleteBtn"
                    : "text-shadedTextLight dark:text-shadedTextDark"
                }`}
                htmlFor="itemPrice"
              >
                Price
              </label>
              <input
                className={`w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark ${
                  isErrorPrice?.isError
                    ? "border-deleteBtn"
                    : "border-shadedTextDark dark:border-none"
                }`}
                name="price"
                id="itemPrice"
                type="number"
                value={item?.price}
                onChange={(e) => {
                  const id = item?.id;
                  dispatch(
                    handleItemValuesChange({
                      id,
                      nameValue: { [e.target.name]: e.target.value },
                    })
                  );
                }}
              />
            </div>
            {/* Item Total */}
            <div className="w-full col-start-8 col-end-13 tab:col-start-4 tab:col-end-5">
              <h4 className="dark:text-shadedTextDark">Total</h4>
              <div className="flex justify-between items-center py-3">
                <p className="dark:text-shadedTextDark">
                  {item.total?.toLocaleString()}
                </p>
                <button
                  className="hover:cursor-pointer"
                  disabled={items.length <= 1}
                  onClick={() => {
                    dispatch(updateInvoiceFormValuesDeleteItem(item.id));
                  }}
                >
                  <IconDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* ADD NEW ITEM BUTTON */}
      <button
        className="w-full py-4 bg-shadedContentLight rounded-3xl mt-12 text-xs font-bold text-shadedTextLight leading-body1 tracking-body1 dark:text-shadedTextDark dark:bg-shadedContentDark"
        onClick={(e) => {
          e.preventDefault();
          dispatch(updateInvoiceFormValuesAddNewItem());
        }}
      >
        + Add New Item
      </button>
      {isItemListErrors && (
        <div className="text-xs text-deleteBtn py-8">
          <p>- All fields must be added</p>
          <p className={`${items.length <= 1 ? "block" : "hidden"}`}>
            - An item must be added
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
