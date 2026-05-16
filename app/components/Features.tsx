'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaLeaf,
  FaChartLine,
  FaFilePdf,
  FaGlobe,
  FaShieldAlt,
  FaSeedling,
} from 'react-icons/fa';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Disease Classification',
      description:
        'Analyzes uploaded leaf images and classifies visible plant disease symptoms using AI-based image analysis.',
      color: 'from-rose-500 to-orange-500',
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Health Score Estimation',
      description:
        'Generates a numerical health score to help users understand the overall condition of the analyzed leaf.',
      color: 'from-emerald-600 to-green-500',
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: 'Nutrient Stress Indication',
      description:
        'Provides suggestive nutrient stress indicators based on visible color and texture patterns observed on the leaf.',
      color: 'from-lime-500 to-emerald-500',
    },
    {
      icon: <FaFilePdf className="text-3xl" />,
      title: 'PDF Report Export',
      description:
        'Allows users to download structured reports containing analysis results, confidence information, and health feedback.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: 'Web-Based Accessibility',
      description:
        'Runs through a browser-based interface, making the system easy to access from desktop and mobile devices.',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Responsible AI Feedback',
      description:
        'Presents outputs with confidence scores and guidance-oriented wording instead of definitive agricultural diagnosis.',
      color: 'from-violet-500 to-indigo-500',
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-20 md:py-32"
      ref={ref}
    >
      <div className="absolute right-[-8rem] top-16 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-lime-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45 }}
          >
            Core Features
          </motion.div>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Practical AI capabilities for
            <br />
            <span className="text-emerald-700">plant health analysis</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SmartLeaf focuses on clear, interpretable outputs that support leaf-based
            disease evaluation, health scoring, nutrient stress awareness, and
            report generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 45 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-950/8">
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${feature.color}`}
                />

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-950">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="absolute -bottom-14 -right-14 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-50 to-lime-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
