import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'; 
import Form from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './Pages/Products';






function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/products" element={<Products />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
