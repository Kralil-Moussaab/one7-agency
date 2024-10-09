import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-1 border-gray-one7 bg-dark-one7 py-3 px-6 lg:px-24">
      <img src={logo} className="w-32 mr-2" alt="Logo" />
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white"
        >
          <svg
            className={`fill-current h-6 w-6 text-white ${
              isOpen ? "hidden" : "block"
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 text-white ${
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
        className={`absolute top-full flex-grow left-0 w-full bg-dark-one7 lg:static lg:w-auto lg:flex lg:items-center lg:bg-transparent ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md flex flex-col lg:flex-row justify-center items-center lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Works
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            Shop
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:bg-gray-one7 py-2 px-4 rounded-md"
          >
            About
          </a>
        </div>
        <div className="flex justify-center items-center mt-4 lg:mt-0">
          <Button content="Contact Us" />
        </div>
      </div>
    </nav>
  );
}
