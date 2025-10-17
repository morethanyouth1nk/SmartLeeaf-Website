'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'tolga.akyol@tedu.edu.tr',
      link: 'mailto:tolga.akyol@tedu.edu.tr',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      value: 'Ankara, Türkiye',
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900" ref={ref}>
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
            Contact Us
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions, feedback, or collaboration ideas? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const isEmail = info.title === 'Email';
            const Component = isEmail ? motion.a : motion.div;
            const extraProps = isEmail ? { href: info.link } : {};

            return (
              <Component
                key={index}
                {...extraProps}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group block"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${info.color} text-white rounded-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {info.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}

