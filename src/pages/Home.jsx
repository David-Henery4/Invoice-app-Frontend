import React from 'react'
import { Navbar, Overlay } from "../components";
import { NewEditInvoice } from "../pages";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Overlay isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Navbar />
      <Outlet/>
      <NewEditInvoice isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}

export default Home