import termsDropdownData from "../../../dropdowndata/termsDropdownData";
import { useDispatch } from "react-redux";
import { updateDefaultTerms } from "../../../features/formModal/formModalSlice";

const PaymentTermsDroptdown = ({
  isTermsDropdownActive,
}) => {
  const dispatch = useDispatch()
  //
  return (
    <div
      className={`w-full bg-basicWhite absolute top-14 left-0 z-10 shadow-filterShadow rounded-lg font-bold text-xs leading-heading4 tracking-heading4 ${
        isTermsDropdownActive ? "block" : "hidden"
      }`}
    >
      {termsDropdownData.map((option, i) => {
        return (
          <div key={i} onClick={() => {
            dispatch(updateDefaultTerms(option))
          }}>
            <p className="px-5 py-3 border-b border-b-shadedTextDark hover:cursor-pointer hover:text-primaryPurple">
              {option.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentTermsDroptdown;
