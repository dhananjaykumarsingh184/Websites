import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'consultation',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', appointmentData);
    // Handle appointment booking
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Sat: 10AM-7PM',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'info@newpopularjewellers.com',
      description: 'We respond within 24 hours',
    },
   {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: '49/5/H 214, Karl Marx Sarani Rd,',
      description: 'Babu Bazar, Khidirpur, Kolkata, West Bengal 700023',
    },
    {
      icon: ClockIcon,
      title: 'Store Hours',
      details: 'Mon-Sat: 10AM-7PM',
      description: 'Sunday: 11AM-5PM',
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
    <section id="contact" className="py-20 bg-soft-white">
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
            Get in Touch
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Visit our showroom or reach out to us. We're here to help you find the perfect piece of jewellery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="custom">Custom Design</option>
                  <option value="repair">Jewelry Repair</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.662!2d88.317158775!3d22.5363695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279e12bf95ddb%3A0x41768cc95392a156!2sNEW+POPULAR+JEWELLERS!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Popular Jewellers Location"
              />
            </div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-champagne-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-900 mb-1">{info.title}</h4>
                      <p className="text-charcoal-700 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-charcoal-500">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Book Appointment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-charcoal-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-champagne-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">
                Book an Appointment
              </h3>
              <p className="text-charcoal-300 text-lg">
                Schedule a personalized consultation with our jewellery experts
              </p>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="apt-name" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="apt-name"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white placeholder-charcoal-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="apt-email" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="apt-email"
                  name="email"
                  value={appointmentData.email}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white placeholder-charcoal-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="apt-phone" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="apt-phone"
                  name="phone"
                  value={appointmentData.phone}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white placeholder-charcoal-400 transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="apt-type" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Appointment Type *
                </label>
                <select
                  id="apt-type"
                  name="type"
                  value={appointmentData.type}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white transition-all duration-300"
                >
                  <option value="consultation">General Consultation</option>
                  <option value="engagement">Engagement Ring Shopping</option>
                  <option value="custom">Custom Design</option>
                  <option value="repair">Jewelry Repair</option>
                  <option value="appraisal">Jewelry Appraisal</option>
                </select>
              </div>

              <div>
                <label htmlFor="apt-date" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="apt-date"
                  name="date"
                  value={appointmentData.date}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="apt-time" className="block text-sm font-medium text-charcoal-200 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="apt-time"
                  name="time"
                  value={appointmentData.time}
                  onChange={handleAppointmentChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:ring-2 focus:ring-champagne-600 focus:border-transparent text-white transition-all duration-300"
                >
                  <option value="">Select time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-champagne-600 hover:bg-champagne-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
