import { Status } from "../components";
import handleDateFormatting from "../reusableFunctions/dateFormatting";

const Invoice = ({ clientName, invoiceId, status, total, paymentDue }) => {
  //
  return (
    <div className="bg-basicWhite w-full grid text-xs font-bold rounded-lg grid-cols-invoiceMax grid-rows-invoiceContainerMobRows p-6 hover:outline hover:outline-1 hover:outline-primaryPurple dark:bg-contentBgDark tab:grid-cols-singleInvoiceContainer tab:grid-rows-none  tab:items-center ">
      <p className="col-start-1 col-end-6 row-start-1 row-end-2 dark:text-basicWhite tab:row-auto tab:col-end-2 md:text-med">
        <span className="text-toggleColourDark dark:text-shadedTextLight">
          #
        </span>
        {invoiceId}
      </p>
      <p className="text-shadedTextLight font-medium col-start-1 col-end-6 row-start-3 row-end-4 dark:text-shadedTextDark tab:col-start-2 tab:col-end-3 tab:row-auto md:text-med">
        Due {paymentDue && handleDateFormatting(paymentDue)}
      </p>
      <p className="text-toggleColourDark font-medium col-start-4 col-end-13 row-start-1 row-end-2 justify-self-end dark:text-basicWhite tab:row-auto tab:col-start-3 tab:col-end-4 tab:justify-self-auto md:text-med">
        {clientName}
      </p>
      <div className="col-start-1 col-end-13 flex justify-between items-center row-start-3 row-end-4 tab:row-auto tab:col-start-4 tab:col-end-5 tab:justify-end tab:gap-10">
        <p className="text-base self-end tab:self-center dark:text-basicWhite">
          £ {total?.toLocaleString()}
        </p>
        <Status status={status} />
      </div>
    </div>
  );
};

export default Invoice;
