import React from "react";
import { desktopLogoUrl } from "../constants/images";
import navMenu from "../constants/navMenu";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white py-5 font-light ">
      <ul className="relative flex justify-between items-center">
        {/* Left side: Desktop logo and mobile menu icon */}
        <li className="flex justify-between items-center">
          {/* Logo displayed on desktop */}
          <a href="/">
            <img className="" src={desktopLogoUrl} alt="logo" />
          </a>
        </li>

        <li className="lg:flex space-x-8 text-lg">
          {/* Desktop Navigation Items */}
          {navMenu.map((item) => (
            <NavLink
              key={item.page}
              to={item.link}
              className={({ isActive }) =>
                `hidden lg:block hover:font-normal ${
                  isActive ? "font-normal" : ""
                }`
              }
            >
              {item.page}
            </NavLink>
          ))}
        </li>

        <li className="hidden space-x-2 lg:flex">
          <button className="border-color-gray py-1 px-2">
            Sign In
          </button>
          <button className="border py-1 px-4 rounded-xl bg-[#292929] text-white border-none">
            Book a Call
          </button>
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
