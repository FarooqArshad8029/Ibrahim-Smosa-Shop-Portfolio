const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: process.env.FRONTENDURL,  
}));
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

const PORT = process.env.BACKENDPORT ;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
