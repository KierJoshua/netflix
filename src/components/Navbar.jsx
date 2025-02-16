import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import profile from "../assets/profile_img.png";
import caret from "../assets/caret_icon.svg";
import bell from "../assets/bell_icon.svg";
import NavBarMenu from "./NavBarMenu";
import { IoMdArrowDropdown } from "react-icons/io";
import NavBarMenuSm from "./NavBarMenuSm";

const Navbar = () => {
  const navRef = useRef(null); // Initialize navRef
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("bg-black");
        } else {
          navRef.current.classList.remove("bg-black");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex justify-between items-center px-[6%] py-2 sm:py-5 fixed w-full z-10"
      ref={navRef}
    >
      {/* Left Side - Logo & Menu */}
      <div className="flex gap-8 items-center">
        <img src={logo} alt="Logo" className="w-12 sm:w-24" />

        {/* Mobile Dropdown Menu */}
        <div className="relative flex items-center md:hidden">
          <p
            className="flex text-xs cursor-pointer items-center gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            Browse <IoMdArrowDropdown />
          </p>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="border z-100 text-xs border-white flex flex-col items-center p-2 absolute gap-3 w-[60%] min-w-[200px] left-0 bg-black/80 top-[500%] rounded-lg shadow-lg">
              <NavBarMenuSm title="Home" link="home" />
              <NavBarMenuSm title="TV Shows" link="tvshows" />
              <NavBarMenuSm title="Movies" link="movies" />
              <NavBarMenuSm title="New & Popular" link="new-and-popular" />
              <NavBarMenuSm title="My List" link="mylist" />
              <NavBarMenuSm title="Browse By Languages" link="browse-by-languages" />
            </ul>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-xs lg:text-sm items-center">
          <NavBarMenu title="Home" link="home" />
          <NavBarMenu title="TV Shows" link="tvshows" />
          <NavBarMenu title="Movies" link="movies" />
          <NavBarMenu title="New & Popular" link="new-and-popular" />
          <NavBarMenu title="My List" link="mylist" />
          <NavBarMenu title="Browse By Languages" link="browse-by-languages" />
        </ul>
      </div>

      {/* Right Side - Icons & User Section */}
      <div className="flex items-center gap-4">
        <img src={search} alt="Search" className="w-4 md:w-[20px]" />
        <p className="text-xs md:text-sm">User</p>
        <img src={bell} alt="Notifications" className="w-4 md:w-[20px]" />

        {/* Profile Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={profile} alt="Profile" className="w-7 md:w-[35px] rounded" />
          <img src={caret} alt="Dropdown" className="w-3" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
