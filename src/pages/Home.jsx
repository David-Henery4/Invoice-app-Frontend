import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Overlay } from "../components";
import { NewEditInvoice } from "../pages";


const Home = () => {
  const navigate = useNavigate()
  const { user  } = useSelector((store) => store.users);
  const { isInvoiceLoading } = useSelector((store) => store.invoiceData);
  //
  useEffect(() => {
    if (!user){
      navigate("/login")
    }
  }, [user])
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent dark:bg-bgColourDark md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Overlay />
      <Navbar />
      {isInvoiceLoading ?
      <div className='w-full min-h-screen grid place-items-center col-start-2 col-end-12'>
      <div className="lds-dual-ring"></div>
      </div>
      : <Outlet />}
      <NewEditInvoice />
    </div>
  );
}

export default Home