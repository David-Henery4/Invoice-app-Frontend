// import { useContext } from "react";
import { Logo, avatarIcon, MoonIcon } from "../assets";
// import { ThemeContext } from "../themeContext/themeContext";

const Navbar = () => {
  // const {theme,setTheme} = useContext(ThemeContext)
  //
  return (
    <nav className="w-full bg-navbarLight h-[72px] sticky top-0 z-[5] flex justify-between items-center col-start-1 col-end-13 md:h-20 lg:col-start-1 lg:col-end-2 lg:h-full lg:flex-col lg:rounded-r-[20px] lg:fixed lg:w-[101px]">
      {/* Left/Top */}
      <div className="h-full bg-primaryPurple w-[72px] relative rounded-r-[20px] overflow-hidden md:w-20 lg:w-full lg:h-[103px]">
        <div
          className="w-full h-1/2
          "
        ></div>
        <div
          className="absolute top-1/2
          left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Logo />
        </div>
        <div className="w-full h-1/2 bg-shadedPurple rounded-tl-[20px]"></div>
      </div>

      {/* Right/Bottom */}
      <div
        className="
        h-full flex lg:flex-col lg:w-full lg:h-auto"
      >
        <div className="h-full px-6 grid place-items-center md:px-8 lg:px-0 lg:py-8">
          <MoonIcon className="hover:cursor-pointer" />
        </div>
        <div className="h-full px-6 grid place-items-center border-l border-avatarBorderColour md:pr-6 md:pl-8 lg:px-0 lg:py-6 lg:border-l-0 lg:border-t">
          <div
            className="w-8 h-8 rounded-full overflow-hidden
            "
          >
            <img src={avatarIcon} alt="profile-avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
