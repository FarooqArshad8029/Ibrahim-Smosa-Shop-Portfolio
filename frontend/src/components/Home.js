import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import samosaImage from '../assets/Smosa_1.png';

const Home = () => {
  const handleMapClick = () => {
    const address = encodeURIComponent("Motta Samosay wala (ابراہیم سموسہ کارنر)");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section
      className="hero min-h-screen relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center p-6 sm:p-10 lg:p-14 space-y-6 sm:space-y-8"
      style={{ backgroundImage: `url(${samosaImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white z-10 text-shadow-lg">
         IBRAHIM SAMOSA SHOP
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl max-w-xl sm:max-w-2xl leading-relaxed z-10 text-shadow-md">
        Welcome to the ultimate spot for crispy samosas, delicious chicken kachori rolls, and refreshing cold drinks! Your satisfaction is our guarantee.
      </p>

      <div
        className="address-container flex items-center space-x-3 bg-black bg-opacity-50 p-3 sm:p-4 rounded-md shadow-lg cursor-pointer z-10"
        onClick={handleMapClick}
        title="Click for directions"
      >
        <FaMapMarkerAlt className="text-red-600 text-xl sm:text-2xl" />
        <span className="text-white text-sm sm:text-lg font-medium">
          D Block, Near Galla Mandi, Burewala
        </span>
      </div>

      <p className="text-xs sm:text-sm md:text-base text-gray-300 italic mt-4 z-10 text-shadow-sm">
        Click the address above for directions on Google Maps
      </p>
    </section>
  );
};

export default Home;
