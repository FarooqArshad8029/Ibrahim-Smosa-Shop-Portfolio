const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibrahimsamosashop@gmail.com', 
    pass: process.env.NODEMAILERPASSWORD, 
  },
});

const sendContactEmail = async (name, email, message) => {
  console.log("Nodemailer fun run:")
  const mailOptions = {
    from: email,  
    to: 'ibrahimsamosashop@gmail.com',
    subject: 'New Message From Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log("Attempting to send mail...");
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

module.exports = { sendContactEmail };
