import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Overlay } from "../components";
import { NewEditInvoice } from "../pages";
import { getInvoices } from '../features/invoiceData/invoiceDataSlice';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, userAccessToken } = useSelector((store) => store.users);
  const { isInvoiceLoading } = useSelector((store) => store.invoiceData);
  //
  useEffect(() => {
    if (!user){
      navigate("/login")
    }
    if (user){
      // dispatch(getInvoices(userAccessToken))
      // 
      // WORKING
      // dispatch(getInvoices())
    }
  }, [user])
  //
  return (
    <div className="App bg-bgColourLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent dark:bg-bgColourDark md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Overlay />
      <Navbar />
      {isInvoiceLoading ? <div className="lds-dual-ring"></div> : <Outlet />}
      <NewEditInvoice />
    </div>
  );
}

export default Home