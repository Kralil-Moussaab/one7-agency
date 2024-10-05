import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex items-center justify-between border-b border-1 border-gray-one7 bg-dark-one7 flex-wrap py-3 px-14 lg:px-24">
      <img src={logo} className="w-100  mr-2" alt="Logo" />
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 text-white ${
              isOpen ? "hidden" : "block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 text-white ${
              isOpen ? "block" : "hidden"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md flex flex-col lg:flex-row justify-center items-center lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  font-semibold  hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Works
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Shop
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            About
          </a>
        </div>
        <div className="flex  justify-center items-center mt-3 lg:mt-0">
          <button className="bg-gradient rounded-lg border-0 py-2 px-4 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
