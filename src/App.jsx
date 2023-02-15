import { Navbar, BackBtn } from "./components";
import { BillFrom, BillTo, ItemList } from "./components/FormComponents";
import { Invoices, SingleInvoice, NewEditInvoice } from "./pages";
import { IconDelete } from "./assets";

function App() {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar />
      <Invoices />
      {/* <SingleInvoice/>  */}

      <NewEditInvoice/>
    </div>
  );
}

export default App;
