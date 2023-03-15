import React from 'react'

const TitleRefAddress = ({ invoiceId,description, senderAddress }) => {
  return (
    <div className="w-full flex justify-between items-start flex-col gap-8 mdTab:flex-row">
      <div className="text-xs font-bold tracking-heading4 leading-heading4 md:text-med">
        <h4 className=" text-textLight dark:text-basicWhite">
          <span className="text-shadedTextLight dark:text-textReallyDark">
            #
          </span>
          {invoiceId}
        </h4>
        <p className="font-medium text-shadedTextLight dark:text-shadedTextDark">
          {description}
        </p>
      </div>
      <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 dark:text-shadedTextDark md:text-14">
        <p>{senderAddress?.street}</p>
        <p>{senderAddress?.city}</p>
        <p>{senderAddress?.postCode}</p>
        <p>{senderAddress?.country}</p>
      </div>
    </div>
  );
};

export default TitleRefAddress