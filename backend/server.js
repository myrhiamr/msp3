const mongoose = require('mongoose');

// Define your schema
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// Seed data
const seedProducts = async () => {
  await Product.deleteMany({});
  const products = [
    { name: 'Postcard A', image: 'imageA.jpg', price: 10.99 },
    { name: 'Postcard B', image: 'imageB.jpg', price: 12.99 },
    // Add more products here
  ];
  await Product.insertMany(products);
};

// Seed the database
seedProducts().then(() => {
  console.log('Database seeded');
  mongoose.connection.close();
}).catch(err => {
  console.error('Seeding error:', err);
  mongoose.connection.close();
});
