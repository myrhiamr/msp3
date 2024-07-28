const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const client = require('./mongoClient'); // Import the MongoDB client

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route to test the database connection
app.get('/api/test', async (req, res) => {
  try {
    // You can interact with your MongoDB database here
    const db = client.db('your_database_name'); // Replace with your actual database name
    const collection = db.collection('your_collection_name'); // Replace with your actual collection name
    const result = await collection.findOne({});
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
