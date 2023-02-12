import React from 'react'

const Summary = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-6 p-6 bg-shadedContentLight text-xs font-bold tracking-heading4 leading-heading4 text-textLight md:p-8 md:pb-10 md:text-med">
        <div className="hidden font-medium text-shadedTextLight text-xtraSm leading-body2 tracking-body2 w-full justify-between items-center mdTab:flex mdTab:text-end md:text-14">
          <h4 className="mdTab:text-left mdTab:flex-[1.5]">Item Name</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">QTY.</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">Price</h4>
          <h4 className="hidden mdTab:inline mdTab:flex-[1]">Total</h4>
        </div>
        <div className="w-full flex justify-between items-center mdTab:text-end">
          <div className="flex flex-col mdTab:text-left mdTab:flex-[1.5]">
            <h4>Banner Design</h4>
            <p className="text-shadedTextLight mdTab:hidden">1 x £ 156.00</p>
          </div>
          <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
            1
          </p>
          <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
            £ 156.00
          </p>
          <p className="mdTab:flex-[1]">£ 156.00</p>
        </div>
        <div className="w-full flex justify-between items-center mdTab:text-end">
          <div className="flex flex-col mdTab:text-left mdTab:flex-[1.5]">
            <h4>Email Design</h4>
            <p className="text-shadedTextLight mdTab:hidden">2 x £ 200.00</p>
          </div>
          <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
            2
          </p>
          <p className="text-shadedTextLight hidden mdTab:inline mdTab:flex-[1]">
            £ 200.00
          </p>
          <p className="mdTab:flex-[1]">£ 400.00</p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center p-6 bg-navbarLight text-basicWhite md:p-8">
        <p className="text-xtraSm leading-body2 tracking-body2 md:text-14">
          Grand Total
        </p>
        <p className="text-xl leading-[32px] -tracking-[0.42px] md:text-2xl">
          £ 556.00
        </p>
      </div>
    </div>
  );
}

export default Summary