const express = require('express');
const router = express.Router();

// Import the MongoDB client
const client = require('../config/mongoClient');

// Example route to fetch products
router.get('/products', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('yourDatabaseName');
        const products = database.collection('products');
        const productArray = await products.find().toArray();
        res.json(productArray);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    } finally {
        await client.close();
    }
});

module.exports = router;
