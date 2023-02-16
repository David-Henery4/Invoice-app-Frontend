import { Invoices, SingleInvoice,  Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Invoices/>}/>
        <Route path="singleInvoice/:invoiceId" element={<SingleInvoice/>}/>
      </Route>
    </Routes>
  );
}

export default App;
