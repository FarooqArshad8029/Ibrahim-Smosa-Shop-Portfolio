import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  

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

  return (
    <div className="contact_us bg-gray-100 py-12 px-6">
      <div className="section_header text-center mb-10">
        <h2 className="section_title text-3xl font-semibold text-gray-800">Keep in Touch</h2>
        <h6 className="section_sub_title text-lg text-gray-600 mt-2">Send us mail if you have anything to suggest</h6>
      </div>

      <form onSubmit={handleSubmit} className="contact_form max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="form-container mb-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="button w-full p-4 bg-[#D77647] text-white rounded-lg shadow-md hover:bg-[#D77647] focus:outline-none focus:ring-2 focus:ring-[#D77647]"
            disabled={isSubmitting}  
          >
            {isSubmitting ? 'Sending...' : 'Send'}  
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
