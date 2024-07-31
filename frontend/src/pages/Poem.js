import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Poem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('📚 Fetching products...');
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setProducts(res.data);
        console.log(`Fetched ${res.data.length} products`);
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Our Poetry Collections</h2>
      <div className="row">
        {products.map(product => (
          <div key={product._id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poem;