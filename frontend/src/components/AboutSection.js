import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaCogs, FaBuilding } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="about_us bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
      {/* Section Header */}
      <div className="section_header text-center mb-16">
        <motion.h2
          className="section_title text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.h6
          className="section_sub_title text-lg sm:text-xl md:text-2xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover our tradition, commitment and story.
        </motion.h6>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-16">
        {/* Stats Cards */}
        <motion.div
          className="detail_card flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaBuilding className="text-4xl sm:text-5xl text-[#D77647] mb-4" />
          <p className="text-xl sm:text-2xl font-semibold">30+ Years in Business</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FaUsers className="text-4xl sm:text-5xl text-[#D77647] mb-4" />
          <p className="text-xl sm:text-2xl font-semibold">20+ Employees</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaStar className="text-4xl sm:text-5xl text-[#D77647] mb-4" />
          <p className="text-xl sm:text-2xl font-semibold">10k+ Reviews</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaCogs className="text-4xl sm:text-5xl text-[#D77647] mb-4" />
          <p className="text-xl sm:text-2xl font-semibold">4+ Specialized Machines</p>
        </motion.div>
      </div>

      {/* About Text */}
      <motion.div
        className="about_text text-center text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="px-6 sm:px-0">
          <p className="text-xl font-semibold mb-3 text-gray-800">
            Located in the heart of Burewala
          </p>
          <p className="text-lg sm:text-xl mb-6 text-gray-600">
            Situated in D Block near Galla Mandi, we’ve been serving the community with the finest samosas and snacks for decades. 
            <span className="font-bold text-[#D77647]">Our secret?</span> A mix of tradition, love and dedication to quality.
          </p>

          <p className="text-xl font-semibold mb-3 text-gray-800">
            Our Mission
          </p>
          <p className="text-lg sm:text-xl mb-6 text-gray-600">
            We believe in bringing people together through <span className="font-semibold text-[#D77647]">delicious food</span> and unforgettable moments. With state-of-the-art equipment and a passionate team, we continue to innovate while preserving our rich heritage.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
