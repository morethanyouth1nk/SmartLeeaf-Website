'use client';

import { motion } from 'framer-motion';
import { GiPlantSeed } from 'react-icons/gi';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Project Reports', href: '/reports' },
  ];

  const contactLinks = [
    { name: 'tolga.akyol@tedu.edu.tr', href: 'mailto:tolga.akyol@tedu.edu.tr' },
  ];

  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-emerald-50">
      <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <motion.a
              href="#home"
              className="mb-5 inline-flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <GiPlantSeed className="text-2xl text-lime-300" />
              </span>

              <span className="text-2xl font-extrabold text-white">
                SmartLeaf
              </span>
            </motion.a>

            <p className="max-w-md leading-7 text-emerald-100/75">
              SmartLeaf is a senior design project that applies AI-based image
              analysis to support plant health evaluation through leaf images.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">
              TED University · Computer Engineering
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-extrabold uppercase tracking-[0.2em] text-lime-200">
              Site
            </h3>

            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-emerald-100/70 transition hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-extrabold uppercase tracking-[0.2em] text-lime-200">
              Contact
            </h3>

            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-emerald-100/70 transition hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    <FaEnvelope className="text-xs" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-6 text-emerald-100/55">
              Ankara, Türkiye
              <br />
              CMPE 491 / CMPE 492
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-4 text-sm text-emerald-100/60 md:flex-row">
            <p>© {currentYear} SmartLeaf. All rights reserved.</p>
            <p>
              Developed by Computer Engineering students at TED University.
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500" />
    </footer>
  );
}
