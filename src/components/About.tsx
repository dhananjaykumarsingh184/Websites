import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  HandThumbUpIcon,
  TrophyIcon,
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: SparklesIcon,
      title: 'Premium Quality',
      description: 'We use only the finest materials and highest quality standards in every creation.',
    },
    {
      icon: TruckIcon,
      title: 'Fast & Secure Delivery',
      description: 'Reliable shipping with insurance and tracking for all your precious purchases.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Certified Authenticity',
      description: 'Every piece comes with certificates of authenticity and quality guarantee.',
    },
    {
      icon: HandThumbUpIcon,
      title: 'Expert Craftsmanship',
      description: 'Master artisans with decades of experience crafting exceptional jewelry.',
    },
    {
      icon: TrophyIcon,
      title: 'Award-Winning Designs',
      description: 'Recognized excellence in jewelry design and innovation.',
    },
    {
      icon: StarIcon,
      title: '5-Star Satisfaction',
      description: 'Over 50,000 happy customers worldwide trust our quality and service.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Master Craftsman',
      experience: '35+ Years',
      specialty: 'Traditional Gold Jewelry',
      image: '/images/categories/Gold Rings/Screenshot 2026-03-19 142812.png',
    },
    {
      name: 'Priya Sharma',
      role: 'Head Designer',
      experience: '18+ Years',
      specialty: 'Modern Jewelry Design',
      image: '/images/categories/Gold Earings/Screenshot 2026-03-19 142203.png',
    },
    {
      name: 'Amit Patel',
      role: 'Quality Assurance Manager',
      experience: '15+ Years',
      specialty: 'Diamond Certification',
      image: '/images/categories/Screenshot 2026-03-19 141014.png',
    },
  ];

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
            <h1 className="text-5xl font-serif font-bold text-charcoal-800 mb-6">About Popular Jewellers</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Discover the legacy of excellence that has made us Kolkata's most trusted jewelry destination for over three decades.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  Founded in 1990 as a humble family workshop in Kolkata, Popular Jewellers began with a simple yet profound vision:
                  to create extraordinary jewelry that captures life's most precious moments.
                </p>
                <p>
                  Starting with just a handful of skilled artisans and a passion for craftsmanship, we have grown into one of India's
                  most respected jewelry houses. Our journey has been guided by unwavering commitment to quality, integrity, and
                  the timeless beauty of fine jewelry.
                </p>
                <p>
                  Today, we continue to blend traditional techniques with contemporary design, creating pieces that tell stories
                  and create memories for generations to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/categories/Gold Rings/Screenshot 2026-03-19 142812.png"
                alt="Our workshop and craftsmanship"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-champagne-100 rounded-full flex items-center justify-center mb-6">
                <TrophyIcon className="h-8 w-8 text-champagne-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">Our Mission</h3>
              <p className="text-charcoal-600 leading-relaxed">
                To create extraordinary jewelry that celebrates life's most precious moments, combining
                traditional craftsmanship with contemporary design to deliver unparalleled quality and elegance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <StarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">Our Vision</h3>
              <p className="text-charcoal-600 leading-relaxed">
                To become the most trusted jewelry name worldwide, setting the standard for excellence
                in craftsmanship, innovation, and customer satisfaction across the globe.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-charcoal-600">Our legacy in jewelry craftsmanship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-champagne-500 to-champagne-600 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl font-bold mb-2">33+</div>
              <div className="text-xl font-medium mb-2">Years Experience</div>
              <div className="text-sm opacity-90">Since 1990</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <div className="text-xl font-medium mb-2">Happy Customers</div>
              <div className="text-sm opacity-90">Across India & Worldwide</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl font-medium mb-2">Pieces Crafted</div>
              <div className="text-sm opacity-90">Annually</div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">Why Choose Popular Jewellers?</h2>
            <p className="text-xl text-charcoal-600">Excellence in every aspect of our service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-champagne-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-champagne-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-charcoal-600">The artisans behind our legacy of excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-champagne-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-charcoal-500 mb-3">{member.experience}</p>
                  <p className="text-charcoal-600 text-sm">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-champagne-50 to-champagne-100 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">
            Experience Excellence Today
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Popular Jewellers for their most precious purchases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/all-products"
              className="inline-flex items-center gap-2 bg-champagne-600 hover:bg-champagne-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              Shop All Products
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-charcoal-900 px-8 py-4 rounded-lg font-medium transition-colors duration-200 border border-charcoal-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
