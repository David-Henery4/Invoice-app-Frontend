import React from 'react'

const Summary = ({items, total}) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-6 p-6 bg-shadedContentLight text-xs font-bold tracking-heading4 leading-heading4 text-textLight md:p-8 md:pb-10 md:text-med">
        <div className="hidden font-medium text-shadedTextLight text-xtraSm leading-body2 tracking-body2 w-full justify-between items-center mdTab:flex mdTab:text-end md:text-14">
          <h4 className="mdTab:text-left mdTab:flex-[1.5]">Item Name</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">QTY.</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">Price</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">Total</h4>
        </div>
        {items?.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full flex justify-between items-center mdTab:text-end"
            >
              <div className="flex flex-col mdTab:text-left mdTab:flex-[1.5]">
                <h4>{item?.name}</h4>
                <p className="text-shadedTextLight mdTab:hidden">
                  {item?.quantity.toLocaleString()} x £{" "}
                  {item?.price.toLocaleString()}
                </p>
              </div>
              <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
                {item?.quantity.toLocaleString()}
              </p>
              <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
                £ {item?.price.toLocaleString()}
              </p>
              <p className="mdTab:flex-[1]">£ {item?.total.toLocaleString()}</p>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center p-6 bg-navbarLight text-basicWhite md:p-8">
        <p className="text-xtraSm leading-body2 tracking-body2 md:text-14">
          Grand Total
        </p>
        <p className="text-xl leading-[32px] -tracking-[0.42px] md:text-2xl">
          £ {total?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Summary