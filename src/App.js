import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Header from './component/Header';
import Home from './Home/index'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">    
    
      <BrowserRouter>
      <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>      
    </div>
  );
}
export default App;
