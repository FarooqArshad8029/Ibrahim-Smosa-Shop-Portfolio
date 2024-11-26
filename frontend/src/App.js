import './App.css';

import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home /> 
      </div>
      <div id="products">
        <ProductSection /> 
      </div>
      <div id="about">
        <AboutSection /> 
      </div>
      <div id="contact">
        <ContactSection /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
