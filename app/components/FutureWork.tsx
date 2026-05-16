'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSeedling, FaChartArea, FaClock, FaGlobeAmericas } from 'react-icons/fa';

export default function FutureWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    {
      icon: <FaSeedling className="text-3xl" />,
      title: 'Multi-Crop & Multi-Disease Support',
      description:
        'Expanding SmartLeaf beyond the current crop and disease scope to support more plant species and plant health conditions.',
      color: 'from-emerald-600 to-green-500',
    },
    {
      icon: <FaChartArea className="text-3xl" />,
      title: 'Severity Estimation',
      description:
        'Estimating how severe a detected disease is, helping users better understand the urgency and possible impact of the problem.',
      color: 'from-rose-500 to-orange-500',
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Growth Tracking',
      description:
        'Tracking plant development over time by comparing image-based health indicators across multiple observations.',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: 'Larger Real-World Validation',
      description:
        'Testing the system with more field images captured under different lighting, camera, crop, and environmental conditions.',
      color: 'from-violet-500 to-indigo-500',
    },
  ];

  return (
    <section
      id="future-work"
      className="relative overflow-hidden bg-white py-20 md:py-32"
      ref={ref}
    >
      <div className="absolute left-[-8rem] top-20 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-lime-100/70 blur-3xl" />

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
            Future Work
          </motion.div>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Where SmartLeaf can
            <br />
            <span className="text-emerald-700">grow next</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SmartLeaf is designed as a scalable foundation for AI-powered plant
            health analysis. Future versions can expand its coverage, improve
            diagnostic detail, and validate performance under more diverse
            real-world conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-gray-100 bg-[#f8faf7] p-7 shadow-sm transition-all duration-300 hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-950/8">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
