import React, { useEffect, useState } from 'react';
import SellCard from './sellCard';

const PoetryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <SellCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default PoetryList;
