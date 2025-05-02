import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Header from './component/Header';
import Home from './Home/index'
import Footer from './component/Footer';
import Features from './Feature/features.jsx';
import FeatureDetails from './Feature/featuredetails.jsx';
import About from './AboutUs/About';
import Contact from './Contact/Contact.jsx';
import Faqs from './Faq/Faqs.js'
import { Toaster } from 'react-hot-toast';
 

function App() {
  return (
    <div className="App">    
      <Toaster position="top-right" />
      <BrowserRouter>
      <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/feature/:slug" element={<FeatureDetails />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>      
    </div>
  );
}
export default App;
