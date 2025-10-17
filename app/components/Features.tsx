'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiPlantSeed, GiPlantRoots } from 'react-icons/gi';
import { FaSun, FaTint, FaChartBar } from 'react-icons/fa';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <GiPlantSeed className="text-5xl" />,
      title: 'Disease Detection',
      description:
        'Instantly identify common crop diseases using deep learning models trained on thousands of leaf images.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <GiPlantRoots className="text-5xl" />,
      title: 'Health Scoring',
      description:
        'Evaluate plant vitality by analyzing color, texture, and leaf patterns to generate a health score.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaSun className="text-5xl" />,
      title: 'Growth Monitoring',
      description:
        'Track plant development over time with image-based analysis of size and color changes.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaTint className="text-5xl" />,
      title: 'Nutrient & Water Stress Detection',
      description:
        'Detect early signs of deficiencies or dehydration before they visibly affect the crop.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaChartBar className="text-5xl" />,
      title: 'Smart Reports',
      description:
        'View detailed analysis results, trends, and recommendations in an easy-to-read dashboard.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      ref={ref}
    >
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
            Core Features
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What SmartLeaf Can Do
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful AI capabilities designed for modern agriculture
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${feature.color} text-white rounded-2xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-100 dark:to-gray-700 rounded-tl-full opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

