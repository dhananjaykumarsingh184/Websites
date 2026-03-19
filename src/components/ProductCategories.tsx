import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

const ProductCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'engagement-rings',
      name: 'Engagement Rings',
      description: 'Timeless symbols of love and commitment',
      image: '/images/categories/Screenshot 2026-03-19 142551.png',
      itemCount: 48,
      featured: true,
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Elegant pieces for every occasion',
      image: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
      itemCount: 72,
    },
    {
      id: 'bangles',
      name: 'Bangles',
      description: 'Traditional craftsmanship meets modern design',
      image: '/images/categories/Screenshot 2026-03-19 141014.png',
      itemCount: 36,
    },
    {
      id: 'pendants',
      name: 'Pendants',
      description: 'Delicate charms and meaningful pieces',
      image: 'images/categories/Pendants/48556.webp',
      itemCount: 54,
    },
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'From studs to dramatic drops',
      image: 'images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
      itemCount: 63,
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      description: 'Sophisticated wrist adornments',
      image: 'images/categories/Bracelets/il_570xN.4117004915_4mdv.webp',
      itemCount: 41,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="collections" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-4"
          >
            Explore All Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal-600 max-w-2xl mx-auto"
          >
            Discover our exquisite range of handcrafted jewellery, each piece telling a story of elegance and tradition
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover ${
                category.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative ${category.featured ? 'h-96' : 'h-64'} overflow-hidden`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm md:text-base">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">
                      {category.itemCount} pieces
                    </span>
                    <Link
                      to={`/category/${category.id}`}
                      className="flex items-center gap-2 bg-champagne-600 hover:bg-champagne-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      Explore
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-champagne-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/all-products"
            className="inline-flex items-center gap-2 btn-secondary text-lg px-8 py-4"
          >
            View All Products
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
