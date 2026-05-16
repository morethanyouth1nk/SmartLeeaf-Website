'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUpload, FaBrain, FaClipboardCheck, FaFilePdf } from 'react-icons/fa';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: <FaUpload className="text-3xl" />,
      title: 'Upload Leaf Image',
      description:
        'The user uploads a clear JPEG or PNG image of a plant leaf through the web interface.',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      number: '02',
      icon: <FaBrain className="text-3xl" />,
      title: 'AI-Based Analysis',
      description:
        'SmartLeaf validates the image, preprocesses it, and applies the analysis pipeline for prediction.',
      color: 'from-violet-500 to-indigo-500',
    },
    {
      number: '03',
      icon: <FaClipboardCheck className="text-3xl" />,
      title: 'Review Health Insights',
      description:
        'The system presents disease classification, confidence score, health score, and possible nutrient stress.',
      color: 'from-emerald-600 to-green-500',
    },
    {
      number: '04',
      icon: <FaFilePdf className="text-3xl" />,
      title: 'Download PDF Report',
      description:
        'Users can export the analysis results as a structured PDF report for documentation and review.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f8faf7] py-20 md:py-32"
      ref={ref}
    >
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute left-[-10rem] top-1/3 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute right-[-10rem] bottom-0 h-96 w-96 rounded-full bg-lime-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-extrabold text-emerald-700 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45 }}
          >
            How It Works
          </motion.div>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            From photo to insight
            <br />
            <span className="text-emerald-700">in four clear steps</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The workflow is designed to be simple for users while keeping the
            analysis pipeline structured and explainable.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-amber-200 md:block lg:hidden" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="relative"
              >
                <div className="relative h-full rounded-[1.6rem] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/8">
                  <div className="mb-8 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      {step.icon}
                    </div>

                    <span className="font-sans text-5xl font-black text-gray-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute right-[-1rem] top-1/2 hidden h-px w-8 bg-gradient-to-r from-emerald-200 to-lime-200 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mt-12 rounded-[1.6rem] border border-emerald-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md"
        >
          <p className="text-sm font-semibold leading-7 text-gray-600">
            SmartLeaf is intended as a decision-support tool. Results should be
            interpreted with confidence information and, when necessary,
            verified by agricultural experts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
