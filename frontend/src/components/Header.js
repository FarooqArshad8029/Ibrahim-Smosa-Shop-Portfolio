import React from 'react';
import { Link } from 'react-scroll';

const SamosaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white text-3xl"
    width="32"
    height="32"
  >
    <path d="M12 2L3 21h18L12 2z" /> 
  </svg>
);

const Header = () => (
  <header className="fixed top-0 w-full bg-black text-white py-6 shadow-lg z-50">
    <div className="container mx-auto flex items-center justify-between px-8 sm:px-4">
      <div className="flex items-center space-x-2">
        <SamosaIcon /> 
        <h1 className="text-2xl font-semibold tracking-wide">Ibrahim Samosa Shop</h1>
      </div>

      <nav className="flex space-x-6 text-lg hidden sm:flex">
        {['Home', 'Products', 'About', 'Contact'].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()} 
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-300 transition-colors duration-200"
          >
            {section}
          </Link>
        ))}
      </nav>

      <div className="sm:hidden flex items-center">
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
