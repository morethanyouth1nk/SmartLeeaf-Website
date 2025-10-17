'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLeaf, FaChartLine, FaMobileAlt } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'AI-Powered',
      description: 'Advanced deep learning models',
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Accurate',
      description: 'Precise disease detection',
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: 'Accessible',
      description: 'Simple web interface',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 mb-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            About SmartLeaf
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Bringing Artificial Intelligence
            <br />
            <span className="text-green-600">to Everyday Farming</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SmartLeaf is an AI-powered plant analysis system that helps farmers, agronomists, and
            researchers understand plant health using just a photo. Our mission is to make advanced
            plant diagnostics accessible, accurate, and affordable for everyone. With SmartLeaf,
            users can instantly detect diseases, identify nutrient deficiencies, and track growth
            all through a simple web interface.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-600 text-white rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

