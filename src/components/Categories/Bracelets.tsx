import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

interface Bracelet {
  id: string;
  name: string;
  price: number;
  image: string;
  gemstone: string;
  metalType: string;
  designStyle: string;
  claspType: string;
  width: string;
  karat: string;
  description: string;
}

const Bracelets: React.FC = () => {
  const [filters, setFilters] = useState({
    gemstone: '',
    metalType: '',
    designStyle: '',
    claspType: '',
    priceRange: { min: 0, max: 50000 }
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  // Mock data for bracelets
  const bracelets: Bracelet[] = [
    {
      id: '1',
      name: 'Diamond Tennis Bracelet',
      price: 18500,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Tennis',
      claspType: 'Box Clasp',
      width: '3mm',
      karat: '18K',
      description: 'Elegant diamond tennis bracelet with secure box clasp'
    },
    {
      id: '2',
      name: 'Gold Chain Bracelet',
      price: 5200,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Chain',
      claspType: 'Lobster Clasp',
      width: '4mm',
      karat: '22K',
      description: 'Classic gold chain bracelet perfect for everyday wear'
    },
    {
      id: '3',
      name: 'Pearl Strand Bracelet',
      price: 4800,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Strand',
      claspType: 'Magnetic Clasp',
      width: '5mm',
      karat: '18K',
      description: 'Beautiful freshwater pearl strand in white gold setting'
    },
    {
      id: '4',
      name: 'Ruby Bangle Bracelet',
      price: 9200,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'Ruby',
      metalType: 'Rose Gold',
      designStyle: 'Bangle',
      claspType: 'Toggle Clasp',
      width: '8mm',
      karat: '18K',
      description: 'Stunning ruby bangle bracelet with toggle clasp'
    },
    {
      id: '5',
      name: 'Sapphire Bead Bracelet',
      price: 6800,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'Sapphire',
      metalType: 'Platinum',
      designStyle: 'Beaded',
      claspType: 'Box Clasp',
      width: '6mm',
      karat: '950',
      description: 'Luxurious sapphire bead bracelet in platinum'
    },
    {
      id: '6',
      name: 'Gold Cuff Bracelet',
      price: 7600,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Cuff',
      claspType: 'Magnetic Clasp',
      width: '12mm',
      karat: '22K',
      description: 'Modern gold cuff bracelet with clean, contemporary design'
    }
  ];

  const filteredAndSortedBracelets = useMemo(() => {
    let filtered = bracelets.filter(bracelet => {
      return (
        (!filters.gemstone || bracelet.gemstone === filters.gemstone) &&
        (!filters.metalType || bracelet.metalType === filters.metalType) &&
        (!filters.designStyle || bracelet.designStyle === filters.designStyle) &&
        (!filters.claspType || bracelet.claspType === filters.claspType) &&
        bracelet.price >= filters.priceRange.min &&
        bracelet.price <= filters.priceRange.max
      );
    });

    // Sort by price
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return filtered;
  }, [bracelets, filters, sortBy]);

  const addToCart = (bracelet: Bracelet) => {
    addItem({
      id: bracelet.id,
      name: bracelet.name,
      price: bracelet.price,
      image: bracelet.image,
      specifications: {
        karat: bracelet.karat,
        weight: bracelet.width,
        dimensions: bracelet.gemstone
      }
    });
  };

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-champagne-50 to-champagne-100 py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute top-4 left-4">
            <Link
              to="/"
              className="bg-white/90 backdrop-blur-sm text-charcoal-800 hover:text-champagne-700 font-medium px-3 py-2 rounded-lg shadow-sm transition-all duration-200"
            >
              ← Back
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Bracelets</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our exquisite collection of handcrafted bracelets from Popular Jewellers. Find the perfect bracelet for every occasion.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-charcoal-800">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="md:hidden p-2 text-charcoal-600 hover:text-charcoal-800"
                >
                  <FunnelIcon className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                {/* Gemstone */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Gemstone
                  </label>
                  <select
                    value={filters.gemstone}
                    onChange={(e) => setFilters({...filters, gemstone: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Sapphire">Sapphire</option>
                    <option value="Pearl">Pearl</option>
                    <option value="None">No Gemstone</option>
                  </select>
                </div>

                {/* Metal Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Metal Type
                  </label>
                  <select
                    value={filters.metalType}
                    onChange={(e) => setFilters({...filters, metalType: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="Yellow Gold">Yellow Gold</option>
                    <option value="Rose Gold">Rose Gold</option>
                    <option value="White Gold">White Gold</option>
                    <option value="Platinum">Platinum</option>
                  </select>
                </div>

                {/* Design Style */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Design Style
                  </label>
                  <select
                    value={filters.designStyle}
                    onChange={(e) => setFilters({...filters, designStyle: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Chain">Chain</option>
                    <option value="Strand">Strand</option>
                    <option value="Bangle">Bangle</option>
                    <option value="Beaded">Beaded</option>
                    <option value="Cuff">Cuff</option>
                  </select>
                </div>

                {/* Clasp Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Clasp Type
                  </label>
                  <select
                    value={filters.claspType}
                    onChange={(e) => setFilters({...filters, claspType: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="Box Clasp">Box Clasp</option>
                    <option value="Lobster Clasp">Lobster Clasp</option>
                    <option value="Magnetic Clasp">Magnetic Clasp</option>
                    <option value="Toggle Clasp">Toggle Clasp</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Price: ₹{filters.priceRange.min.toLocaleString()} - ₹{filters.priceRange.max.toLocaleString()}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="500"
                      value={filters.priceRange.min}
                      onChange={(e) => setFilters({
                        ...filters,
                        priceRange: {...filters.priceRange, min: parseInt(e.target.value)}
                      })}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="500"
                      value={filters.priceRange.max}
                      onChange={(e) => setFilters({
                        ...filters,
                        priceRange: {...filters.priceRange, max: parseInt(e.target.value)}
                      })}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-charcoal-600">{filteredAndSortedBracelets.length} bracelets found</p>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-charcoal-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price-low' | 'price-high')}
                  className="px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent text-sm"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Bracelets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedBracelets.map((bracelet) => (
                <div key={bracelet.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={bracelet.image}
                      alt={bracelet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {bracelet.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{bracelet.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{bracelet.metalType} ({bracelet.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gemstone:</span>
                        <span>{bracelet.gemstone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{bracelet.designStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clasp:</span>
                        <span>{bracelet.claspType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Width:</span>
                        <span>{bracelet.width}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{bracelet.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(bracelet)}
                        className="bg-champagne-600 hover:bg-champagne-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
                      >
                        <ShoppingBagIcon className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bracelets;
