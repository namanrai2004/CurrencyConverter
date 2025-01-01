import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b bg-black">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Login
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-white">Currency Exachange</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <a href="#" className="text-sm font-medium text-white hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-blue-600">
              Contact
            </a>
            <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded p-2 text-white hover:bg-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 p-4 border-t bg-black">
              <a href="#" className="text-lg font-medium text-white hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-lg font-medium text-white hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-lg font-medium text-white hover:text-blue-600">
                Contact
              </a>
              <button className="w-full rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;