const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../nodemailer');

router.post('/send-message', async (req, res) => {
  console.log("Api RUn:")

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log("Validation error: Missing required fields");
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    console.log("Attempting to send email...");
    const result = await sendContactEmail(name, email, message);  
    if (result.success) {
      console.log("Email sent successfully");
      res.json({ message: 'Thank you for your message!' });
    } else {
      console.log("Failed to send email:", result.error);
      res.status(500).json({ error: 'Failed to send message.' });
    }
  } catch (error) {
    console.error('Error handling message submission:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});

module.exports = router;
