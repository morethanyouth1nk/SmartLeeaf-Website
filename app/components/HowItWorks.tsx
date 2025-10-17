'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUpload, FaCog, FaLightbulb } from 'react-icons/fa';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: <FaUpload className="text-4xl" />,
      title: 'Upload',
      description: 'Take or upload a clear photo of a plant leaf.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: <FaCog className="text-4xl" />,
      title: 'Analyze',
      description: 'Our AI model processes the image using advanced vision algorithms.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Get Insights',
      description:
        'Receive instant feedback on disease presence, health score, and improvement tips.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white dark:bg-gray-900" ref={ref}>
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
            How It Works
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            From Photo to Insight
            <br />
            <span className="text-green-600">In Three Simple Steps</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No hardware, no lab — just AI and your smartphone camera.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-900 dark:via-purple-900 dark:to-green-900 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-gray-100 dark:text-gray-800"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon Circle */}
                  <motion.div
                    className={`relative w-32 h-32 mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.icon}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

