// seeder/seed.js

'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/model.js'); // Path to the Product model

const products = [
  {
    name: 'Poem One',
    image: `http://localhost:${process.env.PORT}/images/poemone.jpeg`,
    price: 5,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Poem Two',
    image: `http://localhost:${process.env.PORT}/images/poemtwo.jpeg`,
    price: 5,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Custom Poem',
    image: `http://localhost:${process.env.PORT}/images/custom.jpeg`,
    price: 5,
    created_at: new Date(),
    updated_at: new Date()
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { // Use your MongoDB Atlas connection string
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB Atlas');
    
    await Product.deleteMany({}); // Clear existing products
    console.log('Existing products removed');

    await Product.insertMany(products);
    console.log('Products seeded');

    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

seedDB();
