import { Navbar, BackBtn } from "./components";
import { BillFrom, BillTo, ItemList } from "./components/FormComponents";
import { Invoices, SingleInvoice } from "./pages";
import { IconDelete } from "./assets";

function App() {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar />
      <Invoices />
      {/* <SingleInvoice/>  */}

      <main className="bg-basicWhite w-full h-full p-6 pt-8 z-10 col-start-1 col-end-13 row-start-2 transition-all">
        <BackBtn />
        <section>
          <h2 className="text-2xl leading-heading1 -tracking-subheading font-bold mb-6">
            New Invoice
          </h2>
          <form id="invoice" name="invoice">
            <BillFrom />
            <BillTo />
            <ItemList/>
          </form>
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default App;
