"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <nav className="bg-white fixed w-full h-auto xl:px-20 px-5 pt-8 pb-5 z-50">
      <div className="flex items-center justify-between mx-auto">
        <div>
          <Link to="#">
            <span className="text-xl font-semibold text-gray-900">
              SeaCoco.id
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="text-yellow-800 focus:outline-none"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute md:w-[20%] w-72 h-screen top-0 left-0 right-0 z-50 bg-white border-e"
            >
              <div className="flex flex-row justify-between mb-8 px-10 mt-8">
                <span className="font-semibold text-3xl text-gray-900 py-2 underline underline-offset-8">
                  Menu
                </span>

                <button
                  onClick={closeMenu}
                  className="p-2 transition delay-75 hover:bg-green-300 hover:rounded-xl self-center focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    fill="#AFAFAF"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-3 py-2 px-10 mt-5 text-md text-gray-900 font-medium">
                <li className="border-b border-yellow-700 transition-transform delay-100 hover:translate-x-5 py-2">
                  <Link
                    to="banner"
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={500}
                    offset={-50}
                    className="font-normal text-xl text-gray-900 py-2 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li className="transition-transform delay-100 hover:translate-x-5 hover:border-b hover:border-yellow-700 py-2">
                  <Link
                    to="featured"
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={500}
                    offset={-50}
                    className="font-normal text-xl text-gray-900 py-2 cursor-pointer"
                  >
                    Featured
                  </Link>
                </li>
                <li className="transition-transform delay-100 hover:translate-x-5 hover:border-b hover:border-yellow-700 py-2">
                  <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={500}
                    offset={-50}
                    className="font-normal text-xl text-gray-900 py-2 cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li className="transition-transform delay-100 hover:translate-x-5 hover:border-b hover:border-yellow-700 py-2">
                  <Link
                    to="product"
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={500}
                    offset={-50}
                    className="font-normal text-xl text-gray-900 py-2 cursor-pointer"
                  >
                    Product
                  </Link>
                </li>
                <li className="transition-transform delay-100 hover:translate-x-5 hover:border-b hover:border-yellow-700 py-2">
                  <Link
                    to="discount"
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={500}
                    offset={-50}
                    className="font-normal text-xl text-gray-900 py-2 cursor-pointer"
                  >
                    Discount
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
