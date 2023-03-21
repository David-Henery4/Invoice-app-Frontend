import axios from "axios";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccessToken, setUser } from "../../features/users/usersSlice";
import { getInvoices } from "../../features/invoiceData/invoiceDataSlice";


const getRefreshForLogin = async () => {
  try {
    const res = await axios.get(
      "https://invoice-app-backend-b45s.onrender.com/auth/refresh",
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const PersistLogin = () => {
  const dispatch = useDispatch();
  const { userAccessToken } = useSelector((store) => store.users);
  const [isLoading, setIsLoading] = useState(true);
  //
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const { accessToken, user } = await getRefreshForLogin();
        dispatch(updateAccessToken(accessToken));
        dispatch(setUser(user));
        dispatch(getInvoices(user._id));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !userAccessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);
  //
  return (
    <>
      {isLoading ? (
        <div className="w-screen min-h-screen grid place-items-center bg-bgColourLight dark:bg-bgColourDark">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
