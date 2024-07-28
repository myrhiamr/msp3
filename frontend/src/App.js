import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './components/ContactUs';
import Login from './pages/Login';
import Creator1 from './components/Creator1';
import Creator2 from './components/Creator2';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/creators/creator1" element={<Creator1 />} />
        <Route path="/creators/creator2" element={<Creator2 />} />
      </Routes>
    </Router>
  );
}

export default App;
