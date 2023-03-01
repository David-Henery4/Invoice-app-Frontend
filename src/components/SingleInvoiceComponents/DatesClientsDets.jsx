import React from 'react'
import handleDateFormatting from "../../reusableFunctions/dateFormatting";

const DatesClientsDets = ({
  paymentDue,
  createdAt,
  clientName,
  clientEmail,
  clientAddress,
}) => {
  //
  return (
    <div className="grid grid-cols-datesAddressMob grid-rows-datesAddressMob mdTab:grid-cols-datesAddressTab mdTab:grid-rows-datesAddressTab md:grid-cols-datesAddressDesk">
      <div className="grid gap-8 col-start-1 col-end-2 md:row-start-1 md:row-end-2">
        <div className="grid gap-3">
          <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight dark:text-shadedTextDark md:text-med">
            Invoice Date
          </h4>
          <p className="text-med font-bold leading-subheading tracking-subheading text-textLight dark:text-basicWhite md:text-lg">
            {createdAt && handleDateFormatting(createdAt)}
          </p>
        </div>
        <div className="grid gap-3">
          <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight dark:text-shadedTextDark md:text-med">
            Payment Due
          </h4>
          <p className="text-med font-bold leading-subheading tracking-subheading text-textLight dark:text-basicWhite md:text-lg">
            {paymentDue && handleDateFormatting(paymentDue)}
          </p>
        </div>
      </div>
      <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 grid gap-3 col-start-3 col-end-4 dark:text-shadedTextDark md:text-14 md:row-start-1 md:row-end-3">
        <h4 className="text-xs tracking-heading4 leading-heading4 dark:text-shadedTextDark md:text-med">
          Bill To
        </h4>
        <div>
          <h2 className="text-med font-bold leading-subheading tracking-subheading text-textLight mb-2 dark:text-basicWhite md:text-lg">
            {clientName && clientName}
          </h2>
          <p>{clientAddress?.street}</p>
          <p>{clientAddress?.city}</p>
          <p>{clientAddress?.postCode}</p>
          <p>{clientAddress?.country}</p>
        </div>
      </div>
      <div className="col-start-1 col-end-5 row-start-3 row-end-4 mdTab:row-start-1 mdTab:row-end-2 mdTab:col-start-5 mdTab:col-end-6">
        <h4 className="text-xs text-shadedTextLight tracking-heading4 leading-heading4 dark:text-shadedTextDark md:text-med">
          Sent to
        </h4>
        <p className="text-med font-bold leading-subheading tracking-subheading text-textLight break-all dark:text-basicWhite md:text-lg">
          {clientEmail && clientEmail}
        </p>
      </div>
    </div>
  );
};

export default DatesClientsDets