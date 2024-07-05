import { useState } from "react";
import Button from "../atoms/Button";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import Logo from "/images/Logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-background-pink">
      <nav className="pt-5 lg:pt-6 px-4 xl:px-0 w-full max-w-screen-xl mx-auto relative z-10 flex items-center justify-between">
        <section className="flex items-center gap-[50px] lg:gap-[123px]">
          <Link to={"/"}>
            <img src={Logo} alt={"Image Logo"} className="size-[74px]" />
          </Link>
          <div>
            <ul className="hidden md:flex items-center gap-[60px]">
              <li className="text-type-l font-bold text-basic-900 hover:text-basic-500">
                <NavLink
                  to={"/podcast/are-you-a-perplexed-mind-person#full-episodes"}
                >
                  Episodes
                </NavLink>
              </li>
              <li className="text-type-l font-bold text-basic-900 hover:text-basic-500">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="relative text-type-l font-bold text-basic-900 hover:text-basic-500">
                <button
                  onClick={toggleDropdown}
                  className="focus:outline-none flex gap-1 items-center"
                >
                  More
                  <IoChevronDownCircleOutline
                    size={16}
                    className={`text-basic-900 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-basic-100 border border-gray-200 rounded-lg z-20 transition-opacity duration-300 opacity-100">
                    <NavLink to="/blog">
                      <li className="px-6 py-2 rounded-lg text-type-l font-bold text-basic-900 hover:text-basic-100 hover:bg-basic-500 transit duration-300 ease-in-out">
                        Blog
                      </li>
                    </NavLink>
                    <NavLink to="/">
                      <li className="px-6 py-2 rounded-lg text-type-l font-bold text-basic-900 hover:text-basic-100 hover:bg-basic-500 transit duration-300 ease-in-out">
                        Features
                      </li>
                    </NavLink>
                    <NavLink to="/#subscribe">
                      <li className="px-6 py-2 rounded-lg text-type-l font-bold text-basic-900 hover:text-basic-100 hover:bg-basic-500 transit duration-300 ease-in-out">
                        Pricing
                      </li>
                    </NavLink>
                    <NavLink to="/#testimonials">
                      <li className="px-6 py-2 rounded-lg text-type-l font-bold text-basic-900 hover:text-basic-100 hover:bg-basic-500 transit duration-300 ease-in-out">
                        Testimonials
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </section>
        <section className="hidden md:flex gap-5">
          <Button variant="secondary" size="small" href="#recent-episodes">
            Recent Episodes
          </Button>
          <Button size="small" href="#subscribe">
            Subscribe
          </Button>
        </section>

        <div className={`md:hidden ${isOpen ? "hidden" : "block"}`}>
          <FaBars className="text-basic-900" size={30} onClick={toggleMenu} />
        </div>

        {/* MOBILE NAVBAR */}
        <nav
          id="mobile-menu"
          className={`fixed inset-0 bg-background-blue z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-5">
            <Link to="/">
              <img src={Logo} alt="Image Logo" className="size-[74px]" />
            </Link>
            <div>
              <FaTimes
                className="text-primary"
                size={30}
                onClick={toggleMenu}
              />
            </div>
          </div>
          <ul className="mt-5 flex flex-col gap-5 items-center">
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink
                to="/podcast/are-you-a-perplexed-mind-person#full-episodes"
                onClick={toggleMenu}
              >
                Episodes
              </NavLink>
            </li>
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink to="/blog" onClick={toggleMenu}>
                Blog
              </NavLink>
            </li>
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink to="/" onClick={toggleMenu}>
                Features
              </NavLink>
            </li>
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink to="/#subscribe" onClick={toggleMenu}>
                Pricing
              </NavLink>
            </li>
            <li className="text-type-xl font-bold text-basic-900 hover:text-basic-500">
              <NavLink to="/#testimonials" onClick={toggleMenu}>
                Testimonials
              </NavLink>
            </li>
          </ul>
          <div className="mt-10 flex justify-center items-center gap-5">
            <Button variant="secondary" size="small" href="#recent-episodes">
              Recent Episodes
            </Button>
            <Button href="#subscribe" size="small">
              Subscribe
            </Button>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
