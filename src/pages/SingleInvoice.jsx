import React from "react";
import { ArrowLeft } from "../assets";
import { Status } from "../components";
import {ActionBtns} from "../components/SingleInvoiceComponents";

const SingleInvoice = () => {
  return (
    <>
      <main className="w-full max-w-[730px] mx-auto col-start-2 col-end-12 lg:col-start-3 lg:col-end-[14] pt-8">
        <a
          href="#"
          className="w-fit mb-8 flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold"
        >
          <ArrowLeft />
          <p>Go back</p>
        </a>

        <section
          className="w-full grid gap-4
        "
        >
          {/* Status */}
          <div className="w-full bg-basicWhite p-6 rounded-lg mdTab:flex items-center justify-between md:p-8">
            <div className="flex justify-between items-center mdTab:justify-start mdTab:gap-4">
              <p className="text-xs text-toggleColourDark leading-body1 tracking-body1">
                Status
              </p>
              <Status status={"Pending"} />
            </div>
            <ActionBtns isOnLargerScreens={true} />
          </div>

          {/* Details */}
          <div className="w-full p-6 bg-basicWhite rounded-lg md:p-8">
            <div className="w-full grid gap-8 pb-10">
              <div className="w-full flex justify-between items-start flex-col gap-8 mdTab:flex-row">
                {/* Title, Reference & Sender Address */}
                <div className="text-xs font-bold tracking-heading4 leading-heading4">
                  <h4 className=" text-textLight">
                    <span className="text-shadedTextLight">#</span>XM9141
                  </h4>
                  <p className="font-medium text-shadedTextLight">
                    Graphic Design
                  </p>
                </div>
                <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2">
                  <p>19 Union Terrace</p>
                  <p>London</p>
                  <p>E1 3EZ</p>
                  <p>United Kingdom</p>
                </div>
              </div>

              {/* Dates & Customer Address */}
              <div className="grid grid-cols-datesAddressMob grid-rows-datesAddressMob mdTab:grid-cols-datesAddressTab mdTab:grid-rows-datesAddressTab">
                <div className="grid gap-8 col-start-1 col-end-2">
                  <div className="grid gap-3">
                    <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight">
                      Invoice Date
                    </h4>
                    <p className="text-med font-bold leading-subheading tracking-subheading text-textLight">
                      21 Aug 2021
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <h4 className="text-xs tracking-heading4 leading-heading4 text-shadedTextLight">
                      Payment Due
                    </h4>
                    <p className="text-med font-bold leading-subheading tracking-subheading text-textLight">
                      20 Sep 2021
                    </p>
                  </div>
                </div>
                <div className="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 grid gap-3 col-start-3 col-end-4">
                  <h4 className="text-xs tracking-heading4 leading-heading4">
                    Bill To
                  </h4>
                  <div>
                    <h2 className="text-med font-bold leading-subheading tracking-subheading text-textLight mb-2">
                      Alex Grim
                    </h2>
                    <p>84 Church Way</p>
                    <p>Bradford</p>
                    <p>BD1 9PB</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="col-start-1 col-end-5 row-start-3 row-end-4 mdTab:row-start-1 mdTab:row-end-2 mdTab:col-start-5 mdTab:col-end-6">
                  <h4 className="text-xs text-shadedTextLight tracking-heading4 leading-heading4">
                    Sent to
                  </h4>
                  <p className="text-med font-bold leading-subheading tracking-subheading text-textLight">
                    alexgrim@mail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            {/* Services, Prices, Totals & Quanity */}
            <div className="w-full rounded-lg overflow-hidden">
              <div className="w-full flex flex-col justify-start items-center gap-6 p-6 bg-shadedContentLight text-xs font-bold tracking-heading4 leading-heading4 text-textLight md:p-8">
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col">
                    <h4>Banner Design</h4>
                    <p className="text-shadedTextLight">1 x £ 156.00</p>
                  </div>
                  <p>£ 156.00</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col">
                    <h4>Banner Design</h4>
                    <p className="text-shadedTextLight">1 x £ 156.00</p>
                  </div>
                  <p>£ 156.00</p>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center p-6 bg-navbarLight text-basicWhite md:p-8">
                <p className="text-xtraSm leading-body2 tracking-body2">
                  Grand Total
                </p>
                <p className="text-xl leading-[32px] -tracking-[0.42px]">
                  £ 556.00
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Btns */}
      <div className="col-start-1 col-end-13 w-full p-6 mt-14 bg-basicWhite mdTab:hidden">
        <ActionBtns />
      </div>
    </>
  );
};

export default SingleInvoice;