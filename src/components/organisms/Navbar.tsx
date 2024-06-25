import React, { useState } from "react";
import Button from "../atoms/Button";
import { FaTimes, FaBars } from "react-icons/fa";
import data from "../../utils/data.json";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header] = useState(data.header);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mt-5 lg:mt-10 max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto relative flex items-center justify-between">
      <div>
        <img
          src={header.logo.src}
          alt={header.logo.alt}
          className="w-[150px] h-[83px]"
        />
      </div>
      <nav className="hidden lg:flex text-type-xl text-secondary-dark font-medium">
        <ul className="flex items-center gap-11">
          {header.navigation.map((path, index) => (
            <li key={index} className="cursor-pointer">
              {path.name}
            </li>
          ))}
          <div className="hidden lg:flex gap-[15px]">
            <Button variant="white" size="small">
              {header.button.text}
            </Button>
            <Button size="small">{header.buttonSecond.text}</Button>
          </div>
        </ul>
      </nav>

      <div
        className={`lg:hidden ${
          isOpen ? "hidden" : "absolute"
        } right-5 md:right-7`}
      >
        <FaBars
          className="text-secondary-dark"
          size={30}
          onClick={toggleMenu}
          id="hamburger"
        />
      </div>

      {/* MOBILE */}
      <nav
        id="mobile-menu"
        className={`${
          isOpen ? "block animate-slideDown" : "hidden animate-slideUp"
        } lg:hidden inset-0 fixed z-40 w-full h-screen bg-secondary shadow-lg transition-transform duration-300`}
      >
        <div className="flex flex-col justify-between h-full py-6 px-6 ">
          <div>
            <div className="flex justify-between items-center">
              <img src="images/Logo2.png" alt="Logo" className="w-[100px]" />
              <FaTimes
                className="text-primary"
                size={30}
                onClick={toggleMenu}
                id="hamburger"
              />
            </div>
            <ul className="mt-8 flex flex-col gap-4 text-type-l font-semibold text-basic-50">
              {header.navigation.map((path, index) => (
                <li key={index} className="cursor-pointer">
                  {path.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-2">
            <Button variant="white" size="small">
              {header.button.text}
            </Button>
            <Button size="small">{header.buttonSecond.text}</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
