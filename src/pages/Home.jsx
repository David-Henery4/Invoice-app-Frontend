import {useState, useEffect} from 'react'
import { Navbar, Overlay } from "../components";
import { NewEditInvoice } from "../pages";
import { Outlet } from 'react-router-dom';

const Home = () => {
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent dark:bg-bgColourDark md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Overlay/>
      <Navbar />
      <Outlet/>
      <NewEditInvoice/>
    </div>
  );
}

export default Home