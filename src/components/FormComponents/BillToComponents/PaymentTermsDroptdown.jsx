import React from "react";

const PaymentTermsDroptdown = ({ isTermsDropdownActive }) => {
  return (
    <div
      className={`w-full bg-basicWhite absolute top-14 left-0 shadow-filterShadow rounded-lg font-bold text-xs leading-heading4 tracking-heading4 ${
        isTermsDropdownActive ? "block" : "hidden"
      }`}
    >
      <div>
        <p className="px-5 py-3 border-b border-b-shadedTextDark hover:cursor-pointer hover:text-primaryPurple">
          Net 1 day
        </p>
      </div>
      <div>
        <p className="px-5 py-3 border-b border-b-shadedTextDark hover:cursor-pointer hover:text-primaryPurple">
          Net 7 day
        </p>
      </div>
      <div>
        <p className="px-5 py-3 border-b border-b-shadedTextDark hover:cursor-pointer hover:text-primaryPurple">
          Net 14 day
        </p>
      </div>
      <div>
        <p className="px-5 py-3 border-b border-b-shadedTextDark hover:cursor-pointer hover:text-primaryPurple">
          Net 30 day
        </p>
      </div>
    </div>
  );
};

export default PaymentTermsDroptdown;
