import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, login } from "../features/users/usersSlice";

const LoginSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.users);
  //
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  //
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [demoUsername, setDemoUsername] = useState("testing1234");
  const [demoPassword, setDemoPassword] = useState("123456");
  const [isUsernameInputActive, setIsUsernameInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  //
  const signUpLoginInputValidation = () => {
    if (username.trim().length <= 0 || password.trim().length <= 0) {
      setIsPasswordInvalid(true);
      setIsUsernameInvalid(true);
    }
    if (username.trim().length >= 1 || password.trim().length >= 1) {
      setIsPasswordInvalid(false);
      setIsUsernameInvalid(false);
      handleSubmit();
    }
  };
  //
  const handleSubmit = () => {
    if (isSignUp) {
      dispatch(register({ username, password }));
    }
    if (!isSignUp) {
      dispatch(login({ username, password }));
    }
  };
  //
  const handleUsernameInputValue = () => {
    username.length
      ? setIsUsernameInputActive(true)
      : setIsUsernameInputActive(false);
  };
  const handlePasswordInputValue = () => {
    password.length
      ? setIsPasswordInputActive(true)
      : setIsPasswordInputActive(false);
  };
  //
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  //
  return (
    <div className="w-full min-h-screen grid place-items-center bg-bgColourLight text-textLight dark:bg-bgColourDark dark:text-basicWhite">
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <main className="w-11/12 max-w-lg pt-10 pb-6 px-6 rounded-lg bg-basicWhite flex flex-col justify-center items-center gap-6 dark:bg-contentBgDark">
          <h1 className="font-light text-4xl mb-6">
            {isSignUp ? "Sign up" : "Login"}
          </h1>
          {/**/}
          <div className="relative w-full grid gap-6">
            <div className="relative w-full grid gap-3">
              <label
                htmlFor="username"
                className={`absolute left-2 text-base font-normal transition-all ${
                  isUsernameInputActive
                    ? "-top-3 -left-2 bg-basicWhite scale-75 px-2 text-shadedTextLight  dark:bg-basicWhite/0"
                    : "top-2 text-textLight dark:text-shadedTextDark"
                }`}
              >
                Username
              </label>
              <input
                name="username"
                id="username"
                type="text"
                className={`w-full outline-none border p-2 dark:bg-[#181B2E] ${
                  isPasswordInvalid || isUsernameInvalid
                    ? "border-deleteBtn"
                    : "border-shadedTextDark dark:border-none"
                }`}
                onFocus={() => setIsUsernameInputActive(true)}
                onBlur={handleUsernameInputValue}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative w-full grid gap-3">
              <label
                htmlFor="password"
                className={`absolute left-2 text-base font-normal transition-all ${
                  isPasswordInputActive
                    ? "-top-3 -left-2 bg-basicWhite scale-75 px-2 text-shadedTextLight dark:bg-basicWhite/0"
                    : "top-2 text-textLight dark:text-shadedTextDark"
                }`}
              >
                Password
              </label>
              <input
                name="password"
                id="password"
                type="text"
                className={`w-full outline-none border p-2 dark:bg-[#181B2E] ${
                  isPasswordInvalid || isUsernameInvalid
                    ? "border-deleteBtn"
                    : "border-shadedTextDark dark:border-none"
                }`}
                onFocus={() => setIsPasswordInputActive(true)}
                onBlur={handlePasswordInputValue}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isPasswordInvalid || isUsernameInvalid ? (
              <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xtraSm text-deleteBtn">
                Inputs can't be empty!
              </p>
            ) : null}
          </div>
          {/**/}
          <div className="w-full flex flex-col justify-center items-center gap-6 mt-4">
            <button
              className="relative w-32 h-12 rounded-3xl bg-primaryPurple text-basicWhite overflow-hidden active:before:absolute active:before:w-full active:before:h-full active:before:bg-basicWhite/50 active:before:top-0 active:before:left-0"
              onClick={() => {
                signUpLoginInputValidation();
              }}
            >
              <span className="relative z-10">
                {isSignUp ? "Sign up" : "Login"}
              </span>
            </button>
            <p className="text-sm">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="text-primaryPurple cursor-pointer"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign up"}
              </span>
            </p>
          </div>
          <p className="text-center text-xtraSm">
            Click here to sign into{" "}
            <span
              className="text-primaryPurple cursor-pointer"
              onClick={() => {
                dispatch(
                  login({ username: demoUsername, password: demoPassword })
                );
              }}
            >
              demo account
            </span>
          </p>
        </main>
      )}
    </div>
  );
};

export default LoginSignup;
