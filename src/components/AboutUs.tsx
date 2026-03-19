import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, SparklesIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

const AboutUs: React.FC = () => {
  const timeline = [
    {
      year: '1985',
      title: 'Our Beginning',
      description: 'Founded with a vision to bring exquisite craftsmanship to every jewellery piece.',
    },
    {
      year: '1995',
      title: 'First Expansion',
      description: 'Opened our flagship store and expanded our collection to include international designs.',
    },
    {
      year: '2010',
      title: 'Digital Presence',
      description: 'Launched our online presence to reach customers worldwide.',
    },
    {
      year: '2020',
      title: 'Modern Era',
      description: 'Embraced sustainable practices and contemporary designs while preserving our heritage.',
    },
  ];

  const values = [
    {
      icon: ClockIcon,
      title: 'Timeless Craftsmanship',
      description: 'Each piece is meticulously crafted by our skilled artisans with decades of experience.',
    },
    {
      icon: SparklesIcon,
      title: 'Premium Quality',
      description: 'We use only the finest materials and highest quality standards in every creation.',
    },
    {
      icon: HandThumbUpIcon,
      title: 'Customer Trust',
      description: 'Building lasting relationships through exceptional service and authentic jewellery.',
    },
  ];

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
            Our Heritage & Legacy
          </h2>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            For over three decades, New Popular Jewellers has been synonymous with excellence in craftsmanship, 
            timeless designs, and unwavering commitment to quality. Our journey is a testament to the art of fine jewellery making.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Our Workshop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-champagne-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold mb-1">35+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-serif text-3xl font-bold text-charcoal-900 mb-4">
                A Legacy of Excellence
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Founded in 1985, New Popular Jewellers began as a small workshop with a big dream - 
                to create jewellery that captures the essence of beauty and tradition. Today, we stand as 
                a beacon of excellence in the jewellery industry, with our pieces adorning customers 
                across the globe.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our master craftsmen combine traditional techniques with modern innovation, ensuring 
                each piece tells a unique story. From engagement rings that symbolize eternal love to 
                everyday pieces that celebrate individuality, our collection reflects our commitment 
                to exceptional artistry.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-champagne-600 mb-1">10,000+</div>
                <div className="text-sm text-charcoal-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-champagne-600 mb-1">500+</div>
                <div className="text-sm text-charcoal-600">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-champagne-600 mb-1">25+</div>
                <div className="text-sm text-charcoal-600">Master Artisans</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-serif text-3xl font-bold text-center text-charcoal-900 mb-12">
            Our Journey Through Time
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-champagne-200" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-champagne-600 font-bold mb-2">{item.year}</div>
                      <h4 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-charcoal-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-champagne-600 rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl font-bold text-center text-charcoal-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-charcoal-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-champagne-600" />
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
