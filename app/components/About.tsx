'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLeaf, FaChartLine, FaGlobe } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Leaf-Based Analysis',
      description:
        'Users upload a plant leaf image and receive structured AI-supported plant health feedback.',
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Health Insights',
      description:
        'SmartLeaf presents disease prediction, confidence score, health score, and possible nutrient stress indication.',
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: 'Accessible Platform',
      description:
        'The system runs through a simple web interface designed for farmers, students, and agricultural researchers.',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8faf7] py-20 md:py-32"
      ref={ref}
    >
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-lime-200/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-extrabold text-emerald-700 shadow-sm">
              About SmartLeaf
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              AI support for clearer
              <br />
              <span className="text-emerald-700">plant health decisions</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SmartLeaf is a web-based decision-support system that uses
              computer vision and deep learning to analyze plant leaf images. It
              helps users identify visible disease symptoms, estimate plant
              health, and generate structured reports through a simple
              interface.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-500">
              The system is designed to support awareness and early evaluation.
              Its outputs are presented with confidence information and should
              be interpreted as guidance rather than a definitive agricultural
              diagnosis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-2xl shadow-emerald-950/8"
          >
            <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-950 via-emerald-800 to-green-700 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-lime-300">
                Project Focus
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                From leaf image to actionable insight
              </h3>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Disease Classification</span>
                    <span className="rounded-full bg-lime-300/20 px-3 py-1 text-xs font-bold text-lime-200">
                      AI Model
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Health Score</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                      0–100
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">PDF Report Export</span>
                    <span className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-bold text-amber-100">
                      Downloadable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="group rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/8"
            >
              <motion.div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/15"
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-950">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
