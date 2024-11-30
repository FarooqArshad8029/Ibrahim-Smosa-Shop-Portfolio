import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white py-8 border-t-4 border-solid border-[#D77647]">
    <div className="container mx-auto flex flex-col items-center space-y-6 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
        Ibrahim Samosa Shop & Drink Corner
      </h2>

      <div className="flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-4 text-sm text-gray-300">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-[#D77647] text-xl" />
          <p className="text-center sm:text-left">D Block, Near Galla Mandi, Burewala</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="text-[#D77647] text-xl" />
          <p className="text-center sm:text-left">+92 303 7147470</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-[#D77647] text-xl" />
          <p className="text-center sm:text-left">ibrahimsamosashop@gmail.com</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        &copy; {new Date().getFullYear()} Ibrahim Samosa Shop & Drink Corner. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
