'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Tolga Akyol',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Kaan Aktürk',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Yiğit Aydın',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="team"
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
            Our Team
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the Team Behind
            <br />
            <span className="text-green-600">SmartLeaf</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate group of innovators dedicated to revolutionizing agriculture with AI
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${member.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Avatar */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full border-4 border-white dark:border-gray-800 shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>

                {/* Content */}
                <div className="pt-20 pb-8 px-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

