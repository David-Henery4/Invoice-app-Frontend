import { useState, useEffect } from "react";

const LoginSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInputActive, setIsUsernameInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
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
  return (
    <div className="w-full min-h-screen grid place-items-center bg-bgColourLight text-textLight dark:bg-bgColourDark dark:text-basicWhite">
      <div className="w-11/12 max-w-lg pt-10 pb-6 px-6 rounded-lg bg-basicWhite flex flex-col justify-center items-center gap-6 dark:bg-contentBgDark">
        <h2 className="font-light text-4xl mb-6">Login</h2>
        {/**/}
        <div className="w-full grid gap-6">
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
              className="w-full outline-none border border-shadedTextDark p-2 dark:border-none dark:bg-[#181B2E]"
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
              className="w-full outline-none border border-shadedTextDark p-2 dark:border-none dark:bg-[#181B2E]"
              onFocus={() => setIsPasswordInputActive(true)}
              onBlur={handlePasswordInputValue}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/**/}
        <div className="w-full flex flex-col justify-center items-center gap-6 mt-4">
          <button className="w-32 h-12 rounded-3xl bg-primaryPurple text-basicWhite">
            Login
          </button>
          <p className="text-sm">
            Don't have an Account?{" "}
            <span className="text-primaryPurple cursor-pointer">Sign up</span>
          </p>
        </div>
        <p className="text-center text-xtraSm">
          Click here to sign into{" "}
          <span className="text-primaryPurple">demo account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
