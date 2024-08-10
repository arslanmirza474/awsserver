const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://al-hadef:oIF0f9zOqrkwj0sE@al-hadef.4yog0.mongodb.net/receiptdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Use routes
app.use('/api', routes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
