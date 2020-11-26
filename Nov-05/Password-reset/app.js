const express = require('express');
const cors = require('cors');
const colors = require('colors');

require('dotenv').config(); // To use env variables
require('./db/connectDB');
const app = express();

// Import routes
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());

// Middlewares
app.use('/api', authRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`.yellow.bold);
});