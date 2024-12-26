const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import the generate route
const generateRoutes = require('./routes/generate');

const app = express();
app.use(cors());
app.use(express.json());

// Mount the generate routes
app.use('/generate', generateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
