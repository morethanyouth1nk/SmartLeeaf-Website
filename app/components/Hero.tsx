'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden gradient-green"
    >
      <div className="absolute inset-0 soft-grid opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lime-300/20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-emerald-300/20 blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="mb-7 inline-flex items-center rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-emerald-50 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="mr-2">🌱</span>
              AI-Powered Plant Health Analysis
            </motion.div>

            <motion.h1
              className="text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Smarter Plant Care
              <br />
              <span className="text-lime-300">Starts with One Leaf</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-emerald-50/88 md:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SmartLeaf transforms leaf photos into AI-powered plant health
              insights, helping users detect visible disease symptoms, estimate
              health scores, and understand possible nutrient stress.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <motion.a
                href="#about"
                className="rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-800 shadow-2xl shadow-black/20 transition hover:bg-lime-100"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Explore SmartLeaf
              </motion.a>

              <motion.a
                href="/reports"
                className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/18"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                View Reports
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-4 text-center lg:max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white">AI</div>
                <div className="mt-1 text-xs font-medium text-emerald-50/75">
                  Analysis
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white">0–100</div>
                <div className="mt-1 text-xs font-medium text-emerald-50/75">
                  Health Score
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white">PDF</div>
                <div className="mt-1 text-xs font-medium text-emerald-50/75">
                  Reports
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-3xl bg-lime-300/30 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-200/25 blur-3xl" />

            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/50 p-5 shadow-2xl shadow-black/25">
              <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">
                      Live Preview
                    </p>
                    <h3 className="mt-1 font-sans text-xl font-bold">
                      Leaf Analysis
                    </h3>
                  </div>

                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                    Processing
                  </div>
                </div>

                <div className="relative mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-green-700 to-lime-600 p-6">
                  <div className="absolute inset-0 opacity-20 soft-grid" />

                  <motion.div
                    className="relative mx-auto h-56 w-44 rounded-full bg-gradient-to-br from-lime-300 via-green-400 to-emerald-700 shadow-2xl"
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      borderTopLeftRadius: '70% 90%',
                      borderTopRightRadius: '35% 75%',
                      borderBottomLeftRadius: '45% 70%',
                      borderBottomRightRadius: '70% 90%',
                    }}
                  >
                    <div className="absolute left-1/2 top-6 h-44 w-1 -translate-x-1/2 rotate-[-8deg] rounded-full bg-emerald-900/35" />
                    <div className="absolute left-11 top-16 h-1 w-20 rotate-[28deg] rounded-full bg-emerald-900/25" />
                    <div className="absolute right-10 top-24 h-1 w-20 rotate-[-30deg] rounded-full bg-emerald-900/25" />

                    <motion.div
                      className="absolute inset-x-[-22px] top-20 h-[3px] bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.85)]"
                      animate={{ y: [-52, 84, -52] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Health Score
                      </span>
                      <span className="text-lg font-extrabold text-lime-300">
                        86/100
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[86%] rounded-full bg-lime-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/8 p-4">
                      <p className="text-xs text-slate-400">Disease Risk</p>
                      <p className="mt-1 font-bold text-white">Early Blight</p>
                    </div>

                    <div className="rounded-2xl bg-white/8 p-4">
                      <p className="text-xs text-slate-400">Confidence</p>
                      <p className="mt-1 font-bold text-white">92%</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                    <p className="text-xs text-amber-200">Possible Stress</p>
                    <p className="mt-1 font-bold text-white">
                      Nitrogen deficiency indication
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -left-4 bottom-16 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <p className="text-xs font-semibold text-gray-500">Upload</p>
              <p className="text-sm font-extrabold text-emerald-800">
                leaf_image.jpg
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
