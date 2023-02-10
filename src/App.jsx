import { Navbar, InvoiceBar, EmptyInvoices, InvoicesContainer } from "./components";
import { EmptyIllustration } from "./assets";

function App() {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar />
      <main className="w-full h-full pt-8 col-start-2 col-end-12 grid grid-cols-invoiceMax grid-rows-firstRowMinContent gap-y-8 max-w-[400px] tab:max-w-[730px] lg:pt-[72px] mx-auto lg:col-start-3 lg:col-end-[14]">
        <InvoiceBar />
        {/* EMPTY INVOICES */}
        {/* <EmptyInvoices/> */}
        <InvoicesContainer/>
      </main>
    </div>
  );
}

export default App;
