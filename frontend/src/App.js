// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenavbar from './components/Navbar';
import Home from './components/Home';
import SellCard from './components/sellCard';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Poetone from './components/Poetone';
import Poettwo from './components/Poettwo'
import PoetryList from './components/PoetryList';

function App() {
  return (
    <Router>
      <Sidenavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postcardsforsale" element={<SellCard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/poets/poet1" element={<Poetone/>} />
        <Route path="/poets/poet2" element={<Poettwo />} />
        <Route path="/test" element={<PoetryList />} />
      </Routes>
    </Router>
  );
}

export default App;
