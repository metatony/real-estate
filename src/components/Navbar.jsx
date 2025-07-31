import React from "react";
import { desktopLogoUrl } from "../constants/images";
import navMenu from "../constants/navMenu";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white py-5 font-light ">
      
      <ul className="relative flex justify-between items-center">
        {/* Left side: Desktop logo and mobile menu icon */}
        <li className="flex justify-between items-center">
          {/* Logo displayed on desktop */}
          <a href="/"><img className="" src={desktopLogoUrl} alt="logo" /></a>
        </li>

        <li className="lg:flex space-x-8 text-lg">
          {/* Desktop Navigation Items */}
          {navMenu.map((item) => (
            <a key={item.page} href={item.link} className="hidden lg:block"> {item.page} </a>
          ))
          }
        </li>

        <li className="hidden space-x-2 lg:flex">
            <button className="border border-gray-200 py-1 px-2 rounded-md">Sign In</button>
            <button className="border py-1 px-4 rounded-md bg-[#292929] text-white border-none">Book a Call</button>
        </li>

        {/* Hamburger menu for mobile */}
        <li className="lg:hidden">
          <HamburgerMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
