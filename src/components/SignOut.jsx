import { useDispatch } from "react-redux";
import { logout } from "../features/users/usersSlice";

const SignOut = ({ isSignOutActive }) => {
  const dispatch = useDispatch()
  //
  return (
    <div
      className={`absolute top-6 -left-16 rounded-md overflow-hidden transition-all bg-bgColourLight ${
        isSignOutActive ? "block" : "hidden"
      } lg:-top-1 lg:left-12`}
    >
      <button
        className="w-full h-full py-2 px-4 bg-primaryPurple text-basicWhite whitespace-nowrap"
        onClick={() => {
          dispatch(logout())
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut