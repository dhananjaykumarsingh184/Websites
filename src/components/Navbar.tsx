import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '#collections' },
    { name: 'Shop the Look', href: '#instagram' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'nav-blur shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-champagne-600 to-champagne-800 bg-clip-text text-transparent font-bold"
            >
              New Popular Jewellers
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isCollectionsOnHome = item.name === 'Collections' && item.href === '#collections';
                const href = isCollectionsOnHome && location.pathname !== '/' ? '/#collections' : item.href;
                return (
                  <Link
                    key={item.name}
                    to={href}
                    className={`text-charcoal-700 hover:text-champagne-600 transition-colors duration-200 ${
                      location.pathname === '/' && item.href.startsWith('#')
                        ? 'scroll-smooth'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-charcoal-700 hover:text-champagne-600 transition-colors duration-200"
              >
                <ShoppingBagIcon className="h-6 w-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-champagne-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-charcoal-700 hover:text-champagne-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-charcoal-200">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => {
                  const isCollectionsOnHome = item.name === 'Collections' && item.href === '#collections';
                  const href = isCollectionsOnHome && location.pathname !== '/' ? '/#collections' : item.href;
                  return (
                    <Link
                      key={item.name}
                      to={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-charcoal-700 hover:text-champagne-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-charcoal-200">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-xl">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-charcoal-100 rounded-lg transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <p className="text-center text-charcoal-500 py-8">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex space-x-4 p-4 bg-charcoal-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-champagne-600 font-medium">${item.price}</p>
                    <p className="text-xs text-charcoal-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t border-charcoal-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-xl text-champagne-600">
                ${state.total.toFixed(2)}
              </span>
            </div>
            <button className="w-full btn-primary">
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
