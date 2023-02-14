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

      <main className="bg-basicWhite w-full h-full pt-8 z-10 col-start-1 col-end-13 row-start-2 transition-all grid grid-cols-formPageMob">
        <section className="col-start-2 col-end-12 pb-6
        ">
        <BackBtn />
          <h2 className="text-2xl leading-heading1 -tracking-subheading font-bold mb-6">
            New Invoice
          </h2>
          <form id="invoiceForm" name="invoiceForm">
            <BillFrom />
            <BillTo />
            <ItemList />
          </form>
        </section>
        <div className="w-full col-start-1 col-end-13">
          <div className="w-full h-16 bg-gradient-to-t from-basicBlack to-basicBlack/10 opacity-10"></div>
          <div className="w-full px-6 py-5 flex flex-wrap justify-center items-center gap-[7px]">
            <button className="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight">Discard</button>
            <button className="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark">Save as Draft</button>
            <button className="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite">Save & Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
