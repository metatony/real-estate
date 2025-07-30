import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router";
import navMenu from "../constants/navMenu";


function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  

  return (
    <nav className="lg:hidden">
      {/* Hamburger Icon (visible on mobile) */}
      <div className="block lg:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="right"
          color="#5c5c5c"
          duration={0.5}
          rounded
        />
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen ? (
        <div className="absolute top-full left-0 w-full z-20 bg-white lg:hidden ">
          <ul className="flex flex-col space-y-2 p-4 justify-center items-center">
            {navMenu.map(function (item) {
              return (
                <li key={item.page}>
                  {/* Using Link for navigation */}
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.page}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default HamburgerMenu;
