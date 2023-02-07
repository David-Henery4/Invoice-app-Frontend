import { Navbar, InvoiceBar } from "./components";
import { EmptyIllustration } from "./assets";

function App() {
  //
  return (
    <div className="App font-spartan min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="w-full h-full pt-8 grid grid-cols-invoiceMob flex-1 grid-rows-firstRowMinContent gap-y-8">
        <InvoiceBar />
        {/* EMPTY INVOICES */}
        <section className="col-start-2 col-end-12 h-full">
          <div>
            <div>
              <EmptyIllustration/>
            </div>
            <div>
              <h2 className="text-xl font-bold">There is nothing here</h2>
              <p className="text-xs leading-body1 tracking-body1 font-medium text-textReallyDark">
                Create an invoice by clicking the <span className="font-bold">New</span> button and get started
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
