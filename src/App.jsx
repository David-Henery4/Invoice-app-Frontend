import { Navbar, InvoiceBar, EmptyInvoices, InvoicesContainer } from "./components";
import { EmptyIllustration } from "./assets";
import {Invoices,SingleInvoice} from "./pages";

function App() {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar />
      {/* <Invoices/> */}
      <SingleInvoice/>
    </div>
  );
}

export default App;
