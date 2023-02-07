import { Logo, avatarIcon, MoonIcon } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full bg-navbarLight h-[72px] flex justify-between items-center">
      {/* Left/Top */}
      <div className="h-full bg-primaryPurple w-[72px] relative rounded-r-[20px] overflow-hidden">
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
        h-full flex"
      >
        <div className="h-full px-6 grid place-items-center">
          <MoonIcon className="hover:cursor-pointer" />
        </div>
        <div className="h-full px-6 grid place-items-center border-l border-l-avatarBorderColour">
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
