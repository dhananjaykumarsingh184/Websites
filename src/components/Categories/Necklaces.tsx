import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

interface Necklace {
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

const Necklaces: React.FC = () => {
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
  const navigate = useNavigate();

  // Mock data for necklaces
  const necklaces: Necklace[] = [
    {
      id: '1',
      name: 'Diamond Pendant Necklace',
      price: 22500,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Pendant',
      chainLength: '18 inches',
      karat: '18K',
      description: 'Elegant diamond pendant necklace with delicate chain'
    },
    {
      id: '2',
      name: 'Gold Chain Necklace',
      price: 15200,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Chain',
      chainLength: '20 inches',
      karat: '22K',
      description: 'Classic gold chain necklace perfect for layering'
    },
    {
      id: '3',
      name: 'Pearl Strand Necklace',
      price: 12800,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Strand',
      chainLength: '16 inches',
      karat: '18K',
      description: 'Beautiful freshwater pearl strand in white gold setting'
    },
    {
      id: '4',
      name: 'Ruby Statement Necklace',
      price: 28900,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'Ruby',
      metalType: 'Rose Gold',
      designStyle: 'Statement',
      chainLength: '22 inches',
      karat: '18K',
      description: 'Bold ruby statement necklace with adjustable chain'
    },
    {
      id: '5',
      name: 'Sapphire Choker',
      price: 18900,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'Sapphire',
      metalType: 'Platinum',
      designStyle: 'Choker',
      chainLength: '14 inches',
      karat: '950',
      description: 'Luxurious sapphire choker in platinum setting'
    },
    {
      id: '6',
      name: 'Gold Lariat Necklace',
      price: 16800,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Lariat',
      chainLength: '30 inches',
      karat: '22K',
      description: 'Modern gold lariat necklace with contemporary design'
    }
  ];

  const filteredAndSortedNecklaces = useMemo(() => {
    let filtered = necklaces.filter(necklace => {
      return (
        (!filters.gemstone || necklace.gemstone === filters.gemstone) &&
        (!filters.metalType || necklace.metalType === filters.metalType) &&
        (!filters.designStyle || necklace.designStyle === filters.designStyle) &&
        (!filters.chainLength || necklace.chainLength === filters.chainLength) &&
        necklace.price >= filters.priceRange.min &&
        necklace.price <= filters.priceRange.max
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
  }, [necklaces, filters, sortBy]);

  const addToCart = (necklace: Necklace) => {
    addItem({
      id: necklace.id,
      name: necklace.name,
      price: necklace.price,
      image: necklace.image,
      specifications: {
        karat: necklace.karat,
        weight: necklace.chainLength,
        dimensions: necklace.gemstone
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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">Necklaces</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Discover our exquisite collection of handcrafted necklaces from Popular Jewellers. Find the perfect necklace for every occasion.</p>
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
                    <option value="Pendant">Pendant</option>
                    <option value="Chain">Chain</option>
                    <option value="Strand">Strand</option>
                    <option value="Statement">Statement</option>
                    <option value="Choker">Choker</option>
                    <option value="Lariat">Lariat</option>
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
                    <option value="14 inches">14 inches</option>
                    <option value="16 inches">16 inches</option>
                    <option value="18 inches">18 inches</option>
                    <option value="20 inches">20 inches</option>
                    <option value="22 inches">22 inches</option>
                    <option value="30 inches">30 inches</option>
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
              <p className="text-charcoal-600">{filteredAndSortedNecklaces.length} necklaces found</p>
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

            {/* Necklaces Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedNecklaces.map((necklace) => (
                <div key={necklace.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={necklace.image}
                      alt={necklace.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {necklace.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{necklace.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{necklace.metalType} ({necklace.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gemstone:</span>
                        <span>{necklace.gemstone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design:</span>
                        <span>{necklace.designStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chain Length:</span>
                        <span>{necklace.chainLength}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{necklace.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(necklace)}
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

export default Necklaces;
