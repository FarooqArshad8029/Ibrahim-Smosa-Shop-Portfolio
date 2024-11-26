import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaCogs, FaBuilding } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="about_us bg-gray-100 py-12 px-6">
      <div className="section_header text-center mb-10">
        <motion.h2
          className="section_title text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.h6
          className="section_sub_title text-lg text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover our tradition, commitment, and story.
        </motion.h6>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <motion.div
          className="detail_card flex flex-col items-center bg-white p-6 rounded-lg shadow-md border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaBuilding className="text-4xl text-[#D77647] mb-2" />
          <p className="text-xl font-semibold">30+ Years in Business</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-6 rounded-lg shadow-md border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FaUsers className="text-4xl text-[#D77647] mb-2" />
          <p className="text-xl font-semibold">20+ Employees</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-6 rounded-lg shadow-md border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaStar className="text-4xl text-[#D77647] mb-2" />
          <p className="text-xl font-semibold">10k+ Reviews</p>
        </motion.div>

        <motion.div
          className="detail_card flex flex-col items-center bg-white p-6 rounded-lg shadow-md border hover:border-[#D77647] transition-all transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaCogs className="text-4xl text-[#D77647] mb-2" />
          <p className="text-xl font-semibold">5+ Specialized Machines</p>
        </motion.div>
      </div>

      <motion.div
        className="about_text mt-8 text-center text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-lg mb-4">
          Located in the heart of Burewala, D Block near Galla Mandi, we’ve been serving the community with the finest samosas and snacks for decades. Our secret? A mix of tradition, love, and dedication to quality.
        </p>
        <p className="text-lg mb-4">
          Our mission is simple: bring people together through delicious food and unforgettable moments. With state-of-the-art equipment and a passionate team, we continue to innovate while preserving our rich heritage.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
