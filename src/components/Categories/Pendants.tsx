import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

interface Pendant {
  id: string;
  name: string;
  price: number;
  image: string;
  gemstone: string;
  metalType: string;
  designStyle: string;
  chainLength: string;
  karat: string;
  description: string;
}

const Pendants: React.FC = () => {
  const [filters, setFilters] = useState({
    gemstone: '',
    metalType: '',
    designStyle: '',
    chainLength: '',
    priceRange: { min: 0, max: 50000 }
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  // Mock data for pendants
  const pendants: Pendant[] = [
    {
      id: '1',
      name: 'Diamond Heart Pendant',
      price: 8500,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Romantic',
      chainLength: '18 inches',
      karat: '18K',
      description: 'Elegant diamond heart pendant with delicate chain'
    },
    {
      id: '2',
      name: 'Gold Cross Pendant',
      price: 4200,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Religious',
      chainLength: '20 inches',
      karat: '22K',
      description: 'Traditional gold cross pendant for spiritual elegance'
    },
    {
      id: '3',
      name: 'Pearl Initial Pendant',
      price: 3800,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Personalized',
      chainLength: '16 inches',
      karat: '18K',
      description: 'Custom initial pendant with freshwater pearl'
    },
    {
      id: '4',
      name: 'Ruby Flower Pendant',
      price: 7200,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'Ruby',
      metalType: 'Rose Gold',
      designStyle: 'Floral',
      chainLength: '18 inches',
      karat: '18K',
      description: 'Beautiful ruby flower pendant in rose gold setting'
    },
    {
      id: '5',
      name: 'Sapphire Star Pendant',
      price: 6500,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'Sapphire',
      metalType: 'Platinum',
      designStyle: 'Celestial',
      chainLength: '17 inches',
      karat: '950',
      description: 'Star-shaped sapphire pendant in platinum'
    },
    {
      id: '6',
      name: 'Gold Om Pendant',
      price: 2800,
      image: '/images/categories/Pendants/48556.webp',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Spiritual',
      chainLength: '19 inches',
      karat: '22K',
      description: 'Sacred Om symbol pendant in pure gold'
    }
  ];

  const filteredAndSortedPendants = useMemo(() => {
    let filtered = pendants.filter(pendant => {
      return (
        (!filters.gemstone || pendant.gemstone === filters.gemstone) &&
        (!filters.metalType || pendant.metalType === filters.metalType) &&
        (!filters.designStyle || pendant.designStyle === filters.designStyle) &&
        (!filters.chainLength || pendant.chainLength === filters.chainLength) &&
        pendant.price >= filters.priceRange.min &&
        pendant.price <= filters.priceRange.max
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
  }, [pendants, filters, sortBy]);

  const addToCart = (pendant: Pendant) => {
    addItem({
      id: pendant.id,
      name: pendant.name,
      price: pendant.price,
      image: pendant.image,
      specifications: {
        karat: pendant.karat,
        weight: pendant.chainLength,
        dimensions: pendant.gemstone
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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Pendants</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our exquisite collection of handcrafted pendants from Popular Jewellers. Find the perfect pendant for every occasion.</p>
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
                    <option value="Romantic">Romantic</option>
                    <option value="Religious">Religious</option>
                    <option value="Personalized">Personalized</option>
                    <option value="Floral">Floral</option>
                    <option value="Celestial">Celestial</option>
                    <option value="Spiritual">Spiritual</option>
                  </select>
                </div>

                {/* Chain Length */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Chain Length
                  </label>
                  <select
                    value={filters.chainLength}
                    onChange={(e) => setFilters({...filters, chainLength: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All</option>
                    <option value="16 inches">16 inches</option>
                    <option value="17 inches">17 inches</option>
                    <option value="18 inches">18 inches</option>
                    <option value="19 inches">19 inches</option>
                    <option value="20 inches">20 inches</option>
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
              <p className="text-charcoal-600">{filteredAndSortedPendants.length} pendants found</p>
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

            {/* Pendants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedPendants.map((pendant) => (
                <div key={pendant.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={pendant.image}
                      alt={pendant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {pendant.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{pendant.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{pendant.metalType} ({pendant.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gemstone:</span>
                        <span>{pendant.gemstone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{pendant.designStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chain:</span>
                        <span>{pendant.chainLength}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{pendant.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(pendant)}
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

export default Pendants;
