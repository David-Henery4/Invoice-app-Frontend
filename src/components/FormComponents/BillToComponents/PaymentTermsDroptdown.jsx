import termsDropdownData from "../../../dropdowndata/termsDropdownData";

const PaymentTermsDroptdown = ({
  isTermsDropdownActive,
  setDefaultTerms,
}) => {
  //
  return (
    <div
      className={`w-full bg-basicWhite absolute top-14 left-0 shadow-filterShadow rounded-lg font-bold text-xs leading-heading4 tracking-heading4 ${
        isTermsDropdownActive ? "block" : "hidden"
      }`}
    >
      {termsDropdownData.map((option, i) => {
        return (
          <div key={i} onClick={() => {
            setDefaultTerms(option)
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
