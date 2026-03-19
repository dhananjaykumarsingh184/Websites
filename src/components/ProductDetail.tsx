import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShareIcon, 
  ShoppingBagIcon,
  StarIcon,
  MinusIcon,
  PlusIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  specifications: {
    karat: string;
    weight: string;
    dimensions?: string;
    metal: string;
    stones?: string;
    purity: string;
  };
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  sku: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Mock product data - in production, this would come from an API
  const product: Product = {
    id: id || '1',
    name: 'Elegant Diamond Solitaire Ring',
    price: 12999,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
    ],
    description: 'Experience timeless elegance with this exquisite diamond solitaire ring. Featuring a brilliant-cut diamond set in 18k white gold, this piece embodies sophistication and grace. Perfect for engagements or special occasions, this ring showcases exceptional craftsmanship and attention to detail.',
    specifications: {
      karat: '18K',
      weight: '4.2g',
      dimensions: 'Size 6 (adjustable)',
      metal: 'White Gold',
      stones: '1.5ct Diamond, VVS1, G Color',
      purity: '91.6% Pure Gold',
    },
    category: 'Engagement Rings',
    rating: 4.8,
    reviews: 127,
    inStock: true,
    sku: 'NPJ-ER-001',
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      specifications: product.specifications,
    });
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-soft-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-charcoal-600 mb-8">
          <Link to="/" className="hover:text-champagne-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-champagne-600 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-charcoal-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                >
                  {isLiked ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-charcoal-700" />
                  )}
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-champagne-600 shadow-lg'
                        : 'border-charcoal-200 hover:border-charcoal-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-charcoal-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-champagne-600">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-charcoal-500 line-through">
                  ${(product.price * 1.2).toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                  20% OFF
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="text-charcoal-500 text-sm">SKU: {product.sku}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-charcoal max-w-none">
              <p className="text-charcoal-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">
                Specifications
              </h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <dt className="text-charcoal-600">Metal Type:</dt>
                  <dd className="font-medium text-charcoal-900">{product.specifications.metal}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-600">Karat:</dt>
                  <dd className="font-medium text-charcoal-900">{product.specifications.karat}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-600">Weight:</dt>
                  <dd className="font-medium text-charcoal-900">{product.specifications.weight}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-600">Purity:</dt>
                  <dd className="font-medium text-charcoal-900">{product.specifications.purity}</dd>
                </div>
                {product.specifications.stones && (
                  <div className="flex justify-between md:col-span-2">
                    <dt className="text-charcoal-600">Stones:</dt>
                    <dd className="font-medium text-charcoal-900">{product.specifications.stones}</dd>
                  </div>
                )}
                {product.specifications.dimensions && (
                  <div className="flex justify-between md:col-span-2">
                    <dt className="text-charcoal-600">Dimensions:</dt>
                    <dd className="font-medium text-charcoal-900">{product.specifications.dimensions}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-charcoal-700">Quantity:</label>
                <div className="flex items-center border border-charcoal-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-charcoal-100 transition-colors duration-200"
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-charcoal-100 transition-colors duration-200"
                    disabled={quantity >= 10}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="flex-1 btn-secondary py-4 flex items-center justify-center gap-2">
                  <ShareIcon className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 text-charcoal-600">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-600">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal-600">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Free Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to={`/category/${product.category.toLowerCase().replace(' ', '-')}`}
            className="inline-flex items-center gap-2 text-charcoal-600 hover:text-champagne-600 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to {product.category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
