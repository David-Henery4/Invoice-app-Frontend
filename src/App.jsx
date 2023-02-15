import { Navbar, BackBtn, Overlay } from "./components";
import { BillFrom, BillTo, ItemList } from "./components/FormComponents";
import { Invoices, SingleInvoice, NewEditInvoice } from "./pages";
import { IconDelete } from "./assets";
import { useState } from "react";

function App() {
  const [isFormOpen,setIsFormOpen] = useState(false)
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Overlay isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Navbar />
      <Invoices setIsFormOpen={setIsFormOpen} />
      {/* <SingleInvoice/>  */}

      <NewEditInvoice isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}

export default App;
