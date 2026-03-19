import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FunnelIcon, AdjustmentsHorizontalIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gemstone: string;
  metalType: string;
  designStyle: string;
  karat: string;
  description: string;
  specifications?: {
    weight?: string;
    dimensions?: string;
  };
}

const AllProducts: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    gemstone: '',
    metalType: '',
    designStyle: '',
    priceRange: { min: 0, max: 50000 }
  });
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  // Mock data for all products
  const allProducts: Product[] = [
    // Engagement Rings
    {
      id: 'er-1',
      name: 'Diamond Solitaire Ring',
      price: 28500,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142812.png',
      category: 'Engagement Rings',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Solitaire',
      karat: '18K',
      description: 'Classic diamond solitaire engagement ring'
    },
    {
      id: 'er-2',
      name: 'Three Stone Ring',
      price: 42500,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142516.png',
      category: 'Engagement Rings',
      gemstone: 'Diamond',
      metalType: 'Platinum',
      designStyle: 'Three Stone',
      karat: '950',
      description: 'Elegant three stone diamond engagement ring'
    },
    {
      id: 'er-3',
      name: 'Vintage Style Ring',
      price: 36500,
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142611.png',
      category: 'Engagement Rings',
      gemstone: 'Diamond',
      metalType: 'Yellow Gold',
      designStyle: 'Vintage',
      karat: '18K',
      description: 'Beautiful vintage style diamond engagement ring'
    },

    // Necklaces
    {
      id: 'n-1',
      name: 'Diamond Pendant Necklace',
      price: 22500,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      category: 'Necklaces',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Pendant',
      karat: '18K',
      description: 'Elegant diamond pendant necklace with delicate chain'
    },
    {
      id: 'n-2',
      name: 'Gold Chain Necklace',
      price: 15200,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      category: 'Necklaces',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Chain',
      karat: '22K',
      description: 'Classic gold chain necklace perfect for layering'
    },
    {
      id: 'n-3',
      name: 'Pearl Strand Necklace',
      price: 12800,
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      category: 'Necklaces',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Strand',
      karat: '18K',
      description: 'Beautiful freshwater pearl strand in white gold setting'
    },

    // Bangles
    {
      id: 'b-1',
      name: 'Gold Kada Bangle',
      price: 8500,
      image: '/images/categories/Screenshot 2026-03-19 141014.png',
      category: 'Bangles',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Kada',
      karat: '22K',
      description: 'Traditional gold kada bangle with intricate design'
    },
    {
      id: 'b-2',
      name: 'Diamond Bangle',
      price: 18500,
      image: '/images/categories/Screenshot 2026-03-19 141014.png',
      category: 'Bangles',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Classic',
      karat: '18K',
      description: 'Elegant diamond-studded gold bangle'
    },
    {
      id: 'b-3',
      name: 'Rose Gold Bangle',
      price: 12500,
      image: '/images/categories/Screenshot 2026-03-19 141014.png',
      category: 'Bangles',
      gemstone: 'None',
      metalType: 'Rose Gold',
      designStyle: 'Modern',
      karat: '18K',
      description: 'Contemporary rose gold bangle with sleek design'
    },

    // Pendants
    {
      id: 'p-1',
      name: 'Diamond Heart Pendant',
      price: 8500,
      image: '/images/categories/Pendants/48556.webp',
      category: 'Pendants',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Romantic',
      karat: '18K',
      description: 'Elegant diamond heart pendant with delicate chain'
    },
    {
      id: 'p-2',
      name: 'Gold Cross Pendant',
      price: 6200,
      image: '/images/categories/Pendants/48556.webp',
      category: 'Pendants',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Religious',
      karat: '22K',
      description: 'Beautiful gold cross pendant necklace'
    },
    {
      id: 'p-3',
      name: 'Ruby Pendant',
      price: 9800,
      image: '/images/categories/Pendants/48556.webp',
      category: 'Pendants',
      gemstone: 'Ruby',
      metalType: 'Rose Gold',
      designStyle: 'Statement',
      karat: '18K',
      description: 'Bold ruby pendant in rose gold setting'
    },

    // Earrings
    {
      id: 'e-1',
      name: 'Diamond Stud Earrings',
      price: 12800,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
      category: 'Earrings',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Stud',
      karat: '18K',
      description: 'Classic diamond stud earrings'
    },
    {
      id: 'e-2',
      name: 'Gold Hoop Earrings',
      price: 7200,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
      category: 'Earrings',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Hoop',
      karat: '22K',
      description: 'Simple yet elegant gold hoop earrings'
    },
    {
      id: 'e-3',
      name: 'Pearl Drop Earrings',
      price: 8900,
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
      category: 'Earrings',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Drop',
      karat: '18K',
      description: 'Elegant pearl drop earrings'
    },

    // Bracelets
    {
      id: 'br-1',
      name: 'Diamond Tennis Bracelet',
      price: 18500,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      category: 'Bracelets',
      gemstone: 'Diamond',
      metalType: 'White Gold',
      designStyle: 'Tennis',
      karat: '18K',
      description: 'Elegant diamond tennis bracelet with secure clasp'
    },
    {
      id: 'br-2',
      name: 'Gold Chain Bracelet',
      price: 5200,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      category: 'Bracelets',
      gemstone: 'None',
      metalType: 'Yellow Gold',
      designStyle: 'Chain',
      karat: '22K',
      description: 'Classic gold chain bracelet for everyday wear'
    },
    {
      id: 'br-3',
      name: 'Pearl Strand Bracelet',
      price: 4800,
      image: '/images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      category: 'Bracelets',
      gemstone: 'Pearl',
      metalType: 'White Gold',
      designStyle: 'Strand',
      karat: '18K',
      description: 'Beautiful freshwater pearl strand bracelet'
    }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.gemstone || product.gemstone === filters.gemstone) &&
        (!filters.metalType || product.metalType === filters.metalType) &&
        (!filters.designStyle || product.designStyle === filters.designStyle) &&
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
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
  }, [allProducts, filters, sortBy]);

  const addToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      specifications: {
        karat: product.karat,
        weight: product.specifications?.weight || '',
        dimensions: product.specifications?.dimensions || product.gemstone
      }
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Engagement Rings': 'bg-rose-100 text-rose-800',
      'Necklaces': 'bg-blue-100 text-blue-800',
      'Bangles': 'bg-green-100 text-green-800',
      'Pendants': 'bg-purple-100 text-purple-800',
      'Earrings': 'bg-yellow-100 text-yellow-800',
      'Bracelets': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">All Products</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">Explore our complete collection of handcrafted jewelry from Popular Jewellers. Find the perfect piece for every occasion.</p>
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
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full px-3 py-2 border border-charcoal-300 rounded-md focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    <option value="Engagement Rings">Engagement Rings</option>
                    <option value="Necklaces">Necklaces</option>
                    <option value="Bangles">Bangles</option>
                    <option value="Pendants">Pendants</option>
                    <option value="Earrings">Earrings</option>
                    <option value="Bracelets">Bracelets</option>
                  </select>
                </div>

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
                    <option value="Solitaire">Solitaire</option>
                    <option value="Three Stone">Three Stone</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Pendant">Pendant</option>
                    <option value="Chain">Chain</option>
                    <option value="Strand">Strand</option>
                    <option value="Kada">Kada</option>
                    <option value="Classic">Classic</option>
                    <option value="Modern">Modern</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Religious">Religious</option>
                    <option value="Statement">Statement</option>
                    <option value="Stud">Stud</option>
                    <option value="Hoop">Hoop</option>
                    <option value="Drop">Drop</option>
                    <option value="Tennis">Tennis</option>
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
              <p className="text-charcoal-600">{filteredAndSortedProducts.length} products found</p>
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mb-3">{product.description}</p>

                    <div className="space-y-1 text-xs text-charcoal-500 mb-4">
                      <div className="flex justify-between">
                        <span>Metal:</span>
                        <span>{product.metalType} ({product.karat})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gemstone:</span>
                        <span>{product.gemstone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Style:</span>
                        <span>{product.designStyle}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-champagne-600">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
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

export default AllProducts;
