import { Invoices, SingleInvoice, Home, LoginSignup } from "./pages";
import { PersistLogin } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginSignup />} />
      <Route element={<PersistLogin/>}>
        <Route path="/" element={<Home />}>
          <Route index element={<Invoices />} />
          <Route path="singleInvoice/:invoiceId" element={<SingleInvoice />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
