import React from "react";
import { IconDelete } from "../../assets";

const ItemList = () => {
  return (
    <div>
      <h2 className="font-bold text-[#777F98] text-lg leading-heading1 -tracking-[0.38px] mb-6">
        Item List
      </h2>
      {/* item */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-6 tab:grid-cols-itemListDesk">
        <div className="w-full col-start-1 col-end-13 tab:col-start-1 tab:col-end-2">
          <label
            className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
            htmlFor="itemName"
          >
            Item Name
          </label>
          <input
            className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
            name="itemName"
            id="itemName"
            type="text"
          />
        </div>
        <div className="w-full col-start-1 col-end-4 tab:col-start-2 tab:col-end-3">
          <label
            className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
            htmlFor="itemQuantity"
          >
            Qty
          </label>
          <input
            className="w-full rounded-md border-2 border-shadedTextDark outline-none pl-5 py-3"
            name="itemQuantity"
            id="itemQuantity"
            type="text"
          />
        </div>
        <div className="w-full col-start-4 col-end-8 tab:col-start-3 tab:col-end-4">
          <label
            className="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
            htmlFor="itemPrice"
          >
            Price
          </label>
          <input
            className="w-full rounded-md border-2 border-shadedTextDark outline-none px-5 py-3"
            name="itemPrice"
            id="itemPrice"
            type="text"
          />
        </div>
        {/* Item Total */}
        <div className="w-full col-start-8 col-end-13 tab:col-start-4 tab:col-end-5">
          <h4>Total</h4>
          <div className="flex justify-between items-center py-3">
            <p>400.00</p>
            <IconDelete />
          </div>
        </div>
      </div>
      {/* ADD NEW ITEM BUTTON */}
      <button
        className="w-full py-4 bg-shadedContentLight rounded-3xl mt-12 text-xs font-bold text-shadedTextLight leading-body1 tracking-body1"
        onClick={(e) => e.preventDefault()}
      >
        + Add New Item
      </button>
    </div>
  );
};

export default ItemList;
