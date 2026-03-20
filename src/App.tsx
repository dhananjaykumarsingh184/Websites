import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import InstagramSection from './components/InstagramSection';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EngagementRings from './components/Categories/EngagementRings';
import Bangles from './components/Categories/Bangles';
import Earrings from './components/Categories/Earrings';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';
import Pendants from './components/Categories/Pendants';
import Bracelets from './components/Categories/Bracelets';
import Necklaces from './components/Categories/Necklaces';
import AllProducts from './components/AllProducts';
import About from './components/About';

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
              <Route path="/category/pendants" element={<Pendants />} />
              <Route path="/category/necklaces" element={<Necklaces />} />
              <Route path="/category/bracelets" element={<Bracelets />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/instagram" element={<InstagramSection />} />
              <Route path="/collections" element={<ProductCategories />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </FilterProvider>
    </CartProvider>
  );
}

export default App;
