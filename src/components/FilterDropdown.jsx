import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterInvoices } from "../features/invoiceData/invoiceDataSlice";
import { CheckIcon } from "../assets";

const FilterDropdown = ({ isFilterDropdownOpen}) => {
  const dispatch = useDispatch()
  const { filterModes, isFilterActive, invoiceData } = useSelector(
    (store) => store.invoiceData
  );
  //
  useEffect(() => {
    if (isFilterActive){
      const currentFilterType = filterModes.find(filter => filter?.filterActive === true)
      dispatch(filterInvoices(currentFilterType.id))
    }
  }, [invoiceData])
  //
  return (
    <div
      className={`${
        isFilterDropdownOpen ? "flex" : "hidden"
      } absolute top-8 left-1/2 -translate-x-1/2  bg-basicWhite text-textLight shadow-filterShadow rounded-lg p-6 flex-col gap-4 justify-start items-start hover:cursor-default`}>
      {filterModes?.map(filter => {
        return (
          <div
            key={filter?.id}
            className="flex justify-center items-center gap-3 hover:cursor-pointer"
            onClick={() => {
              dispatch(filterInvoices(filter.id));
            }}
          >
            <div
              className={`h-4 w-4 grid place-items-center rounded-sm bg-shadedTextDark cursor-pointer ${
                filter.filterActive
                  ? "bg-primaryPurple border-0"
                  : "border border-primaryPurple"
              }`}
            >
              <CheckIcon
                className={`${
                  filter.filterActive ? "block" : "hidden"
                }`}
              />
            </div>
            <p className="capitalize">{filter.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterDropdown;
