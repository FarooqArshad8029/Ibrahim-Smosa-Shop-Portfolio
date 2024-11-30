import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(true);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setSuccess('');
    setIsSubmitting(true);
    const data = { name, email, message };

    try {
      const response = await fetch('http://localhost:4000/api/contact/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(
          <span className="text-[#D77647] text-sm font-medium">
            Thank you for your suggestion! We will get back to you soon.
          </span>
        );
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsInfoVisible(false); 
  };

  return (
    <div className="contact_us bg-gray-100 py-12 px-6 sm:px-8 lg:px-16">
      <div className="section_header text-center mb-12">
        <h2 className="section_title text-3xl sm:text-4xl font-semibold text-gray-800">
          Keep in Touch
        </h2>
        <h6 className="section_sub_title text-lg sm:text-xl text-gray-600 mt-2">
          Send us mail if you have anything to suggest
        </h6>
      </div>

      <form onSubmit={handleSubmit} className="contact_form max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="form-container mb-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D77647]"
              placeholder="Your Name*"
              required
            />
          </div>
        </div>

        <div className="form-container mb-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D77647]"
              placeholder="Your Email Address*"
              required
            />
          </div>
        </div>

        <div className="form-container mb-6">
          <div className="form-group">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D77647]"
              placeholder="Message Here*"
              required
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <div className="form-group">
          <button
            type="submit"
            className="button w-full p-4 bg-[#D77647] text-white rounded-lg shadow-md hover:bg-[#C66A38] focus:outline-none focus:ring-2 focus:ring-[#D77647] transition-all ease-in-out duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>

      {isInfoVisible && (
        <div className="contact-info bg-gradient-to-r from-[#2d2d2d] to-[#444444] text-white p-4 rounded-lg shadow-xl mt-8 relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-[#333333] text-white p-3 rounded-full shadow-lg hover:bg-[#555555] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] border-2 border-transparent hover:border-black transition-all duration-300 ease-in-out"
          >
            <span className="font-bold text-xl">X</span>
          </button>

          <h3 className="text-2xl font-extrabold mb-3 text-center text-white">
            Ready to Build Your Dream Website?
          </h3>
          <p className="text-lg mb-4 text-center text-white">
            Don’t miss the opportunity to have your own website. Reach out to us for a consultation or more information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-x-3 sm:space-y-0 mt-4">
            <p className="text-lg sm:text-xl font-medium text-gray-200">
              Call or message Mr. Farooq at
            </p>
            <p className="flex items-center text-2xl font-semibold text-gray-200 hover:text-gray-300 cursor-pointer">
              <FaPhoneAlt className="mr-2 text-xl" />
              <span>+92 307 0003007</span>
            </p>
          </div>
          <p className="text-sm mt-4 text-center text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300">
            We're here to help turn your vision into reality! Get in touch now.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
