import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

interface Earring {
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

const Earrings: React.FC = () => {
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

  // Mock data for earrings
  const earrings: Earring[] = [
    {
      id: '1',
      name: 'Classic Gold Stud Earrings',
      price: 1200,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 141847.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 8.5,
      karat: '22K',
      description: 'Elegant traditional gold stud earrings with intricate craftsmanship'
    },
    {
      id: '2',
      name: 'Rose Gold Hoop Earrings',
      price: 1800,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 141948.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      designStyle: 'Contemporary',
      weight: 12.2,
      karat: '18K',
      description: 'Modern rose gold hoop earrings with sleek design'
    },
    {
      id: '3',
      name: 'White Gold Diamond Earrings',
      price: 4200,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142026.png',
      stampType: 'BIS Hallmarked',
      metalType: 'White Gold',
      designStyle: 'Luxury',
      weight: 15.5,
      karat: '18K',
      description: 'Luxurious white gold earrings adorned with diamonds'
    },
    {
      id: '4',
      name: 'Platinum Drop Earrings',
      price: 5800,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142055.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Platinum',
      designStyle: 'Classic',
      weight: 18.0,
      karat: '950',
      description: 'Timeless platinum drop earrings with elegant design'
    },
    {
      id: '5',
      name: 'Gold Kundan Earrings',
      price: 2100,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142130.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 22.1,
      karat: '22K',
      description: 'Traditional kundan work gold earrings'
    },
    {
      id: '6',
      name: 'Rose Gold Floral Earrings',
      price: 2900,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      designStyle: 'Floral',
      weight: 14.8,
      karat: '18K',
      description: 'Beautiful rose gold earrings with floral patterns'
    },
    {
      id: '7',
      name: 'Gold Jhumka Earrings',
      price: 3400,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142225.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 19.5,
      karat: '22K',
      description: 'Traditional gold jhumka earrings with intricate detailing'
    },
    {
      id: '8',
      name: 'Diamond Stud Earrings',
      price: 4800,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142259.png',
      stampType: 'BIS Hallmarked',
      metalType: 'White Gold',
      designStyle: 'Luxury',
      weight: 16.2,
      karat: '18K',
      description: 'Elegant diamond stud earrings in white gold setting'
    },
    {
      id: '9',
      name: 'Gold Chandbali Earrings',
      price: 2600,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142317.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 21.8,
      karat: '22K',
      description: 'Traditional chandbali gold earrings with rich craftsmanship'
    },
    {
      id: '10',
      name: 'Rose Gold Chandelier Earrings',
      price: 5200,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142402.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Rose Gold',
      designStyle: 'Luxury',
      weight: 24.3,
      karat: '18K',
      description: 'Stunning rose gold chandelier earrings with crystal accents'
    },
    {
      id: '11',
      name: 'Gold Maang Tika Set',
      price: 1800,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142423.png',
      stampType: 'BIS Hallmarked',
      metalType: 'Yellow Gold',
      designStyle: 'Traditional',
      weight: 17.9,
      karat: '22K',
      description: 'Beautiful gold maang tika set with matching earrings'
    }
  ];

  const filteredAndSortedEarrings = useMemo(() => {
    let filtered = earrings.filter(earring => {
      return (
        (!filters.stampType || earring.stampType === filters.stampType) &&
        (!filters.metalType || earring.metalType === filters.metalType) &&
        (!filters.designStyle || earring.designStyle === filters.designStyle) &&
        earring.weight >= filters.weightRange.min &&
        earring.weight <= filters.weightRange.max &&
        earring.price >= filters.priceRange.min &&
        earring.price <= filters.priceRange.max
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
  }, [earrings, filters, sortBy]);

  const addToCart = (earring: Earring) => {
    addItem({
      id: earring.id,
      name: earring.name,
      price: earring.price,
      image: earring.image,
      specifications: {
        karat: earring.karat,
        weight: `${earring.weight}g`,
        dimensions: `${earring.weight}"`
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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Earrings</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our exquisite collection of handcrafted earrings from Popular Jewellers. Find the perfect earrings for every occasion.</p>
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
              <p className="text-charcoal-600">{filteredAndSortedEarrings.length} earrings found</p>
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

            {/* Earrings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedEarrings.map((earring) => (
                <div key={earring.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={earring.image}
                      alt={earring.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {earring.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{earring.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{earring.metalType} ({earring.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{earring.designStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight:</span>
                        <span>{earring.weight}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stamp:</span>
                        <span>{earring.stampType}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{earring.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(earring)}
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

export default Earrings;
