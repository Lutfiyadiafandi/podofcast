import React, { useState } from "react";
import Button from "../atoms/Button";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mt-5 lg:mt-10 max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto relative flex items-center justify-between">
      <div className="mx-auto lg:mx-0">
        <img src="icons/Logo.svg" alt="Logo" className="w-[143px] h-[68px]" />
      </div>
      <nav className="hidden lg:flex text-type-xl leading-[64%] text-basic-400 font-medium">
        <ul className="flex gap-11">
          <li className="cursor-pointer active">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Package</li>
          <li className="cursor-pointer">Facilities</li>
          <li className="cursor-pointer">Gallery</li>
        </ul>
      </nav>
      <div className="hidden lg:block">
        <Button>Contact us</Button>
      </div>

      <div
        className={`lg:hidden border-2 p-1 border-secondary-dark rounded-[10px] ${
          isOpen ? "hidden" : "absolute"
        }`}
      >
        <FaBars
          className="text-secondary-dark"
          size={24}
          onClick={toggleMenu}
          id="hamburger"
        />
      </div>

      {/* MOBILE */}
      <nav
        id="mobile-menu"
        className={`${
          isOpen ? "block animate-slideDown" : "hidden animate-slideUp"
        } lg:hidden inset-0 fixed z-40 w-3/4 h-screen bg-secondary shadow-lg transition-transform duration-300`}
      >
        <div className="flex flex-col justify-between h-full py-4 px-6 ">
          <div>
            <div className="flex justify-between items-baseline">
              <img src="icons/Logo.svg" alt="Logo" className="w-[100px]" />
              <div className="border-2 p-1 border-secondary-dark rounded-[10px]">
                <FaTimes
                  className="text-secondary-dark"
                  size={24}
                  onClick={toggleMenu}
                  id="hamburger"
                />
              </div>
            </div>
            <ul className="mt-8 flex flex-col gap-4 text-type-l font-semibold text-basic-300">
              <li className="cursor-pointer active">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Package</li>
              <li className="cursor-pointer">Facilities</li>
              <li className="cursor-pointer">Gallery</li>
            </ul>
          </div>
          <div>
            <Button size="small">Contact us</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
