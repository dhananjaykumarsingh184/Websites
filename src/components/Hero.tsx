import React, { useState, useEffect } from 'react';
import { PlayIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'video',
      title: 'Exquisite Craftsmanship',
      subtitle: 'Discover our latest collection of timeless elegance',
      cta: 'Explore Collection',
      media: '/video/long view.mp4',
      //poster: '/api/placeholder/1920/1080'
    },
    {
      id: 2,
      type: 'video',
      title: 'Engagement Rings',
      subtitle: 'Symbol of eternal love and commitment',
      cta: 'View Rings',
      media: '/video/Firefly generate a video with mp4 for showing hero section of a website 304502.mp4',
    },
    {
      id: 3,
      type: 'video',
      title: 'Heritage Collection',
      subtitle: 'Traditional designs with modern sophistication',
      cta: 'Discover More',
      media: '/video/Firefly generate a video with mp4 for showing hero section of a website 304502 (2).mp4',      
      poster: '/api/placeholder/1920/1080'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {currentSlideData.type === 'video' ? (
          <video
            key={currentSlideData.id}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={currentSlideData.poster}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={currentSlideData.media} type="video/mp4" />
          </video>
        ) : (
          <img
            src={currentSlideData.media}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={currentSlide}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light opacity-90">
              {currentSlideData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {(currentSlideData.cta === 'View Rings' || currentSlideData.cta === 'Explore Collection' || currentSlideData.cta === 'Discover More') ? (
                <Link to={currentSlideData.cta === 'View Rings' ? '/category/engagement-rings' : '/all-products'}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-champagne-600 hover:bg-champagne-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {currentSlideData.cta}
                    <ChevronRightIcon className="h-5 w-5" />
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-champagne-600 hover:bg-champagne-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {currentSlideData.cta}
                  <ChevronRightIcon className="h-5 w-5" />
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-charcoal-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayIcon className="h-5 w-5" />
                Watch Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-champagne-400 w-24'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
