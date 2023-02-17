import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getActiveSingleInvoice } from "../features/invoiceData/invoiceDataSlice";
import { BackBtn } from "../components";
import {
  ActionBtns,
  StatusAndActionBar,
  TitleRefAddress,
  DatesClientsDets,
  Summary,
} from "../components/SingleInvoiceComponents";

const SingleInvoice = () => {
  const { activeSingleInvoice, invoiceData } = useSelector(
    (store) => store.invoiceData
  );
  const dispatch = useDispatch()
  const { invoiceId } = useParams();
  //
  useEffect(() => {
    dispatch(getActiveSingleInvoice(invoiceId));
  }, [invoiceData]);
  //
  return (
    <>
      <main className="relative w-full max-w-[730px] mx-auto col-start-2 col-end-12 row-start-2 lg:col-start-3 lg:col-end-[14] pt-8 mdTab:pt-12 mdTab:pb-[135px] lg:pt-16 lg:pb-[54px] lg:row-start-1">
        <BackBtn />

        <section className="w-full grid gap-4">
          {/* Status */}
          <StatusAndActionBar
            id={activeSingleInvoice?.id}
            status={activeSingleInvoice?.status}
          />

          {/* Details */}
          <div className="w-full p-6 bg-basicWhite rounded-lg md:p-8 lg:p-12">
            <div className="w-full grid gap-8 pb-10">
              {/* Title, Reference & Sender Address */}
              <TitleRefAddress {...activeSingleInvoice} />
              {/* Dates & Customer Address */}
              <DatesClientsDets {...activeSingleInvoice} />
            </div>

            {/* Summary */}
            {/* Services, Prices, Totals & Quanity */}
            <Summary {...activeSingleInvoice} />
          </div>
        </section>
      </main>

      {/* Mobile Bottom Btns */}
      <div className="col-start-1 col-end-13 w-full p-6 mt-14 bg-basicWhite mdTab:hidden">
        <ActionBtns id={activeSingleInvoice?.id} />
      </div>
    </>
  );
};

export default SingleInvoice;
