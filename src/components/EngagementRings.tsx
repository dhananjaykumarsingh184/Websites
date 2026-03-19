import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

interface Ring {
  id: string;
  name: string;
  price: number;
  image: string;
  stampType: string;
  metalType: string;
  diamondType: string;
  weight: number;
  karat: string;
  description: string;
}

const EngagementRings: React.FC = () => {
  const [filters, setFilters] = useState({
    stampType: '',
    metalType: '',
    diamondType: '',
    weightRange: { min: 0, max: 10 },
    priceRange: { min: 0, max: 100000 }
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  // Mock data for engagement rings
  const rings: Ring[] = [
    {
      id: '1',
      name: 'Classic Solitaire Diamond Ring',
      price: 2500,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142516.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      diamondType: 'VVS1 Clarity',
      weight: 1.5,
      karat: '18K',
      description: 'Timeless elegance with a brilliant center stone'
    },
    {
      id: '2',
      name: 'Rose Gold Halo Ring',
      price: 3200,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142551.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      diamondType: 'VS2 Clarity',
      weight: 2.0,
      karat: '18K',
      description: 'Romantic design with sparkling halo'
    },
    {
      id: '3',
      name: 'White Gold Princess Cut',
      price: 4100,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142611.png',
      stampType: 'BIS Hallmarked',
      metalType: 'White Gold',
      diamondType: 'VVS2 Clarity',
      weight: 2.5,
      karat: '18K',
      description: 'Modern princess cut in luxurious white gold'
    },
    {
      id: '4',
      name: 'Platinum Eternity Band',
      price: 5500,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142633.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Platinum',
      diamondType: 'FL Clarity',
      weight: 3.0,
      karat: '950',
      description: 'Endless love with full eternity setting'
    },
    {
      id: '5',
      name: 'Yellow Gold Three Stone Ring',
      price: 2800,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142709.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      diamondType: 'VS1 Clarity',
      weight: 1.8,
      karat: '18K',
      description: 'Past, present, future - three stone design'
    },
    {
      id: '6',
      name: 'Rose Gold Vintage Style',
      price: 3600,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142743.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      diamondType: 'VVS2 Clarity',
      weight: 2.2,
      karat: '18K',
      description: 'Antique inspired design with modern comfort'
    }
  ];

  const filteredAndSortedRings = useMemo(() => {
    let filtered = rings.filter(ring => {
      return (
        (!filters.stampType || ring.stampType === filters.stampType) &&
        (!filters.metalType || ring.metalType === filters.metalType) &&
        (!filters.diamondType || ring.diamondType === filters.diamondType) &&
        ring.weight >= filters.weightRange.min &&
        ring.weight <= filters.weightRange.max &&
        ring.price >= filters.priceRange.min &&
        ring.price <= filters.priceRange.max
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
  }, [rings, filters, sortBy]);

  const addToCart = (ring: Ring) => {
    addItem({
      id: ring.id,
      name: ring.name,
      price: ring.price,
      image: ring.image,
      specifications: {
        karat: ring.karat,
        weight: `${ring.weight}g`,
        dimensions: `${ring.weight}"`
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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Engagement Rings</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our collection of exquisite engagement rings from Popular Jewellers. Find the perfect ring for your special moment.</p>
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

                {/* Diamond Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Diamond Type
                  </label>
                  <select
                    value={filters.diamondType}
                    onChange={(e) => setFilters({...filters, diamondType: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="FL Clarity">FL Clarity</option>
                    <option value="VVS1 Clarity">VVS1 Clarity</option>
                    <option value="VVS2 Clarity">VVS2 Clarity</option>
                    <option value="VS1 Clarity">VS1 Clarity</option>
                    <option value="VS2 Clarity">VS2 Clarity</option>
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
                      max="10"
                      step="0.1"
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
                      max="10"
                      step="0.1"
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
                      max="100000"
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
                      max="100000"
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
              <p className="text-charcoal-600">{filteredAndSortedRings.length} rings found</p>
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

            {/* Rings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedRings.map((ring) => (
                <div key={ring.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={ring.image}
                      alt={ring.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {ring.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{ring.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{ring.metalType} ({ring.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Diamond:</span>
                        <span>{ring.diamondType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight:</span>
                        <span>{ring.weight}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stamp:</span>
                        <span>{ring.stampType}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{ring.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(ring)}
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

export default EngagementRings;
