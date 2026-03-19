import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ChatBubbleLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  isVideo: boolean;
  productLink?: string;
}

const InstagramSection: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  // Mock Instagram data - in production, this would come from Instagram API
  useEffect(() => {
    const mockPosts: InstagramPost[] = [
      {
        id: '1',
        imageUrl: '/images/categories/Necklace/Screenshot 2026-03-19 142551.png',
        caption: 'Elegant diamond necklace perfect for your special day ✨ #NewPopularJewellers',
        likes: 342,
        comments: 28,
        timestamp: '2 hours ago',
        isVideo: false,
        productLink: '/product/diamond-necklace-1'
      },
      {
        id: '2',
        imageUrl: '/images/categories/Gold Bala/Screenshot 2026-03-19 141014.png',
        caption: 'Traditional gold bangles with modern twist 💫 #HandcraftedJewellery',
        likes: 567,
        comments: 45,
        timestamp: '5 hours ago',
        isVideo: false,
        productLink: '/product/gold-bangles-1'
      },
      {
        id: '3',
        imageUrl: '/images/categories/Gold Rings/Screenshot 2026-03-19 142812.png',
        caption: 'Stunning engagement ring that says "I do" 💍 #EngagementGoals',
        likes: 891,
        comments: 73,
        timestamp: '1 day ago',
        isVideo: false,
        productLink: '/product/engagement-ring-1'
      },
      {
        id: '4',
        imageUrl: '/images/categories/Gold Rings/Screenshot 2026-03-19 142516.png',
        caption: 'Behind the scenes: Our artisans crafting perfection 🎨 #JewelleryMaking',
        likes: 445,
        comments: 31,
        timestamp: '2 days ago',
        isVideo: true,
      },
      {
        id: '5',
        imageUrl: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
        caption: 'Minimalist earrings for everyday elegance 👌 #DailyStyle',
        likes: 623,
        comments: 52,
        timestamp: '3 days ago',
        isVideo: false,
        productLink: '/product/earrings-1'
      },
      {
        id: '6',
        imageUrl: '/images/categories/Pendants/48556.webp',
        caption: 'Customer love! Our best-selling pendant necklace ❤️ #CustomerFavorites',
        likes: 734,
        comments: 68,
        timestamp: '4 days ago',
        isVideo: false,
        productLink: '/product/pendant-1'
      },
    ];

    setPosts(mockPosts);
  }, []);

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="instagram" className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">IG</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                Shop the Look
              </h2>
            </div>
            <p className="text-lg text-charcoal-300 max-w-2xl mx-auto">
              Get inspired by our community and shop the latest trends from @newpopularjewellers
            </p>
            <div className="mt-6">
              <a
                href="https://instagram.com/newpopularjewellers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Follow on Instagram
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group relative bg-charcoal-800 rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative aspect-square">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Video indicator */}
                {post.isVideo && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-charcoal-800 border-y-4 border-y-transparent ml-1" />
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm mb-3 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 hover:text-pink-500 transition-colors duration-200"
                        >
                          {likedPosts.has(post.id) ? (
                            <HeartSolidIcon className="h-5 w-5 text-pink-500" />
                          ) : (
                            <HeartIcon className="h-5 w-5" />
                          )}
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <div className="flex items-center gap-1">
                          <ChatBubbleLeftIcon className="h-5 w-5" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                      <span className="text-xs text-white/70">{post.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop button */}
              {post.productLink && (
                <div className="absolute top-4 right-4">
                  <a
                    href={post.productLink}
                    className="bg-champagne-600 hover:bg-champagne-700 text-white p-2 rounded-lg shadow-lg transition-colors duration-300"
                  >
                    <ShoppingBagIcon className="h-5 w-5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary text-lg px-8 py-4">
            Load More Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
