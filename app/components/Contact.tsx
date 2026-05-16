'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'tolga.akyol@tedu.edu.tr',
      link: 'mailto:tolga.akyol@tedu.edu.tr',
      color: 'from-emerald-600 to-green-500',
      isLink: true,
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      value: 'Ankara, Türkiye',
      link: '',
      color: 'from-amber-500 to-orange-500',
      isLink: false,
    },
    {
      icon: <FaUniversity className="text-3xl" />,
      title: 'Institution',
      value: 'TED University, Department of Computer Engineering',
      link: '',
      color: 'from-sky-500 to-cyan-500',
      isLink: false,
    },
  ];

  return (
    <section
      id="contact"
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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div
            className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45 }}
          >
            Contact
          </motion.div>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Get in touch with
            <br />
            <span className="text-emerald-700">the SmartLeaf team</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SmartLeaf is developed as a senior design project at TED University.
            For project-related questions, documentation, or academic evaluation,
            you can contact the team through the information below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => {
            const CardContent = (
              <div className="h-full rounded-[1.6rem] border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-100 group-hover:shadow-2xl group-hover:shadow-emerald-950/8">
                <motion.div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {info.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-950">
                  {info.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 group-hover:text-emerald-700">
                  {info.value}
                </p>
              </div>
            );

            if (info.isLink) {
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 45 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="group block"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-10 max-w-4xl rounded-[1.6rem] border border-emerald-100 bg-[#f8faf7] p-6 text-center"
        >
          <p className="text-sm font-semibold leading-7 text-gray-600">
            CMPE 491 / CMPE 492 Senior Design Project · SmartLeaf · AI-powered
            plant health analysis through leaf images
          </p>
        </motion.div>
      </div>
    </section>
  );
}
