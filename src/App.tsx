import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import InstagramSection from './components/InstagramSection';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import EngagementRings from './components/EngagementRings';
import Bangles from './components/Bangles';
import Earrings from './components/Earrings';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <Router>
          <div className="min-h-screen bg-soft-white">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ProductCategories />
                  <InstagramSection />
                  <AboutUs />
                  <Contact />
                </>
              } />
              <Route path="/category/engagement-rings" element={<EngagementRings />} />
              <Route path="/category/bangles" element={<Bangles />} />
              <Route path="/category/earrings" element={<Earrings />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </FilterProvider>
    </CartProvider>
  );
}

export default App;
