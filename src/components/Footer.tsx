import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/all-products' },
      { name: 'Engagement Rings', href: '/category/engagement-rings' },
      { name: 'Necklaces', href: '/category/necklaces' },
      { name: 'Bangles', href: '/category/bangles' },
      { name: 'Pendants', href: '/category/pendants' },
      { name: 'Earrings', href: '/category/earrings' },
      { name: 'Bracelets', href: '/category/bracelets' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Heritage', href: '#about' },
      { name: 'Craftsmanship', href: '#about' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Book Appointment', href: '#contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Jewelry Care', href: '/jewelry-care' },
      { name: 'FAQs', href: '/faqs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/newpopularjewellers' },
    { name: 'Instagram', href: 'https://instagram.com/newpopularjewellers' },
    { name: 'Twitter', href: 'https://twitter.com/newpopularjewellers' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/newpopularjewellers' },
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.926.024 6.672.111c-1.274.088-2.148.242-2.908.51a5.855 5.855 0 00-2.11.958c-.654.43-1.208.98-1.654 1.654a5.855 5.855 0 00-.958 2.11c-.268.76-.422 1.634-.51 2.908C.024 7.926 0 8.396 0 12.017s.024 4.091.111 5.345c.088 1.274.242 2.148.51 2.908.23.714.558 1.31.958 1.783.43.654.98 1.208 1.654 1.654a5.855 5.855 0 002.11.958c.76.268 1.634.422 2.908.51C7.926 23.976 8.396 24 12.017 24s4.091-.024 5.345-.111c1.274-.088 2.148-.242 2.908-.51a5.855 5.855 0 002.11-.958c.654-.43 1.208-.98 1.654-1.654a5.855 5.855 0 00.958-2.11c.268-.76.422-1.634.51-2.908.087-1.254.111-1.724.111-5.345s-.024-4.091-.111-5.345c-.088-1.274-.242-2.148-.51-2.908a5.855 5.855 0 00-.958-2.11c-.43-.654-.98-1.208-1.654-1.654a5.855 5.855 0 00-2.11-.958c-.76-.268-1.634-.422-2.908-.51C16.091.024 15.621 0 12.017 0zm0 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zm0 10.179a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Stay in the Sparkle
              </h3>
              <p className="text-charcoal-300 mb-6">
                Subscribe to our newsletter for exclusive offers, new arrivals, and jewellery inspiration.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white placeholder-charcoal-400 transition-all duration-300"
              />
              <button className="bg-champagne-600 hover:bg-champagne-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-champagne-600 to-champagne-800 bg-clip-text text-transparent">
                New Popular Jewellers
              </h2>
            </Link>
            <p className="text-charcoal-300 mb-6 leading-relaxed">
              Crafting exquisite jewellery since 1985. Each piece tells a story of elegance, 
              tradition, and timeless beauty. Discover our collection of handcrafted treasures 
              designed to celebrate life's most precious moments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-charcoal-300">
                <PhoneIcon className="h-5 w-5 text-champagne-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-300">
                <EnvelopeIcon className="h-5 w-5 text-champagne-600" />
                <span>info@newpopularjewellers.com</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-300">
                <MapPinIcon className="h-5 w-5 text-champagne-600" />
                <span>49/5/H 214, Karl Marx Sarani Rd, Babu Bazar, Khidirpur, Kolkata, West Bengal 700023</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-charcoal-800 hover:bg-champagne-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  {renderIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-300 hover:text-champagne-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-300 hover:text-champagne-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-300 hover:text-champagne-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-charcoal-400 text-sm">
              © {currentYear} New Popular Jewellers. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-charcoal-400 hover:text-champagne-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-charcoal-400 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Secure Shopping
            </div>
            <div className="flex items-center gap-2 text-charcoal-400 text-sm">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Authenticity Guaranteed
            </div>
            <div className="flex items-center gap-2 text-charcoal-400 text-sm">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd" />
                </svg>
              </div>
              Lifetime Warranty
            </div>
            <div className="flex items-center gap-2 text-charcoal-400 text-sm">
              <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
