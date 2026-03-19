import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

interface Bangle {
  id: string;
  name: string;
  price: number;
  image: string;
  stampType: string;
  metalType: string;
  designStyle: string;
  weight: number;
  karat: string;
  description: string;
}

const Bangles: React.FC = () => {
  const [filters, setFilters] = useState({
    stampType: '',
    metalType: '',
    designStyle: '',
    weightRange: { min: 0, max: 50 },
    priceRange: { min: 0, max: 50000 }
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  // Mock data for bangles
  const bangles: Bangle[] = [
    {
      id: '1',
      name: 'Classic Gold Bangle',
      price: 1500,
      image: '/images/categories/Gold Bala/581242058_18426434302109051_5517617175268629416_n.webp',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 15.5,
      karat: '22K',
      description: 'Elegant traditional gold bangle with intricate craftsmanship'
    },
    {
      id: '2',
      name: 'Rose Gold Contemporary Bangle',
      price: 2200,
      image: '/images/categories/Gold Bala/Screenshot 2026-03-19 140719.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      designStyle: 'Contemporary',
      weight: 18.2,
      karat: '18K',
      description: 'Modern rose gold bangle with sleek design'
    },
    {
      id: '3',
      name: 'White Gold Diamond Bangle',
      price: 3800,
      image: '/images/categories/Gold Bala/Screenshot 2026-03-19 141014.png',
      stampType: 'BIS Hallmarked',
      metalType: 'White Gold',
      designStyle: 'Luxury',
      weight: 22.5,
      karat: '18K',
      description: 'Luxurious white gold bangle adorned with diamonds'
    },
    {
      id: '4',
      name: 'Platinum Eternity Bangle',
      price: 5200,
      image: '/images/categories/Gold Bala/Screenshot 2026-03-19 1410145.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Platinum',
      designStyle: 'Classic',
      weight: 25.0,
      karat: '950',
      description: 'Timeless platinum bangle with eternity design'
    },
    {
      id: '5',
      name: 'Gold Kundan Bangle',
      price: 1800,
      image: '/images/categories/Gold Bala/Screenshot 2026-03-19 141340.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 20.1,
      karat: '22K',
      description: 'Traditional kundan work gold bangle'
    },
    {
      id: '6',
      name: 'Rose Gold Floral Bangle',
      price: 2600,
      image: '/images/categories/Gold Bala/Screenshot 2026-03-19 141430.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      designStyle: 'Floral',
      weight: 19.8,
      karat: '18K',
      description: 'Beautiful rose gold bangle with floral patterns'
    }
  ];

  const filteredAndSortedBangles = useMemo(() => {
    let filtered = bangles.filter(bangle => {
      return (
        (!filters.stampType || bangle.stampType === filters.stampType) &&
        (!filters.metalType || bangle.metalType === filters.metalType) &&
        (!filters.designStyle || bangle.designStyle === filters.designStyle) &&
        bangle.weight >= filters.weightRange.min &&
        bangle.weight <= filters.weightRange.max &&
        bangle.price >= filters.priceRange.min &&
        bangle.price <= filters.priceRange.max
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
  }, [bangles, filters, sortBy]);

  const addToCart = (bangle: Bangle) => {
    addItem({
      id: bangle.id,
      name: bangle.name,
      price: bangle.price,
      image: bangle.image,
      specifications: {
        karat: bangle.karat,
        weight: `${bangle.weight}g`,
        dimensions: `${bangle.weight}"`
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
              ← Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Bangles</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our exquisite collection of handcrafted bangles from Popular Jewellers. Find the perfect bangle for every occasion.</p>
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
                {/* Stamp Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Stamp Type
                  </label>
                  <select
                    value={filters.stampType}
                    onChange={(e) => setFilters({...filters, stampType: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="BIS Hallmarked">BIS Hallmarked</option>
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
                    <option value="Traditional">Traditional</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Classic">Classic</option>
                    <option value="Floral">Floral</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                {/* Weight Range */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Weight (grams): {filters.weightRange.min} - {filters.weightRange.max}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="0.5"
                      value={filters.weightRange.min}
                      onChange={(e) => setFilters({
                        ...filters,
                        weightRange: {...filters.weightRange, min: parseFloat(e.target.value)}
                      })}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="0.5"
                      value={filters.weightRange.max}
                      onChange={(e) => setFilters({
                        ...filters,
                        weightRange: {...filters.weightRange, max: parseFloat(e.target.value)}
                      })}
                      className="w-full"
                    />
                  </div>
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
              <p className="text-charcoal-600">{filteredAndSortedBangles.length} bangles found</p>
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

            {/* Bangles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedBangles.map((bangle) => (
                <div key={bangle.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={bangle.image}
                      alt={bangle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {bangle.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{bangle.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{bangle.metalType} ({bangle.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{bangle.designStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight:</span>
                        <span>{bangle.weight}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stamp:</span>
                        <span>{bangle.stampType}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{bangle.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(bangle)}
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

export default Bangles;
