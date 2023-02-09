import { Navbar, InvoiceBar, EmptyInvoices } from "./components";
import { EmptyIllustration } from "./assets";

function App() {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar />
      <main className="w-full h-full pt-8 col-start-2 col-end-12 grid grid-cols-invoiceMax grid-rows-firstRowMinContent gap-y-8 max-w-[400px] smlTab:max-w-[730px] lg:pt-[72px] mx-auto lg:col-start-3 lg:col-end-[14]">
        <InvoiceBar />
        {/* EMPTY INVOICES */}
        {/* <EmptyInvoices/> */}
        <section className="col-start-1 col-end-13 h-full">
          <div className="bg-basicWhite w-full grid text-xs font-bold px-6 pb-3 pt-6 grid-cols-invoiceMax grid-rows-invoiceContainerMobRows smlTab:grid-cols-invoiceTabSml smlTab:grid-rows-none smlTab:p-3 smlTab:items-center mdTab:p-6 mdTab:grid-cols-invoiceTabMd">
            <p className="col-start-1 col-end-6 row-start-1 row-end-2 smlTab:row-auto smlTab:col-end-2">
              <span className="text-toggleColourDark">#</span>RT30 80
            </p>
            <p className="text-textReallyDark font-medium col-start-1 col-end-6 row-start-3 row-end-4 smlTab:col-start-2 smlTab:col-end-3 smlTab:row-auto">
              Due 19 Aug 2021
            </p>
            <p className="text-toggleColourDark font-medium col-start-4 col-end-13 row-start-1 row-end-2 justify-self-end smlTab:row-auto smlTab:col-start-3 smlTab:col-end-4 smlTab:justify-self-auto">
              Jensen Huang
            </p>
            <div className="col-start-1 col-end-13 flex justify-between items-center row-start-3 row-end-4 smlTab:row-auto smlTab:col-start-4 smlTab:col-end-5 smlTab:gap-5 smlTab:justify-end">
              <p className="text-base self-end smlTab:self-center">£ 1,800.90</p>
              <div className="bg-paidStatus/10 flex justify-center items-center w-[104px] h-10 gap-2">
                <div className="w-2 h-2 rounded-full bg-paidStatus"></div>
                <p className="text-paidStatus">Paid</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
