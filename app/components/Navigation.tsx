'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiPlantSeed } from 'react-icons/gi';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reports', href: '/reports' },
  ];

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const mutedColor = isScrolled
    ? 'text-gray-700 hover:text-emerald-700'
    : 'text-white/95 hover:text-lime-200';

  return (
    <motion.nav
      initial={{ y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-emerald-100 bg-white/88 shadow-xl shadow-emerald-950/8 backdrop-blur-xl'
            : 'border-white/25 bg-white/12 shadow-lg shadow-black/10 backdrop-blur-md'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 md:px-7">
          <motion.a
            href="#home"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(false)}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                isScrolled ? 'bg-emerald-50' : 'bg-white/15'
              }`}
            >
              <GiPlantSeed
                className={`text-2xl ${
                  isScrolled ? 'text-emerald-700' : 'text-lime-300'
                }`}
              />
            </span>

            <span className={`text-xl font-extrabold tracking-tight ${textColor}`}>
              SmartLeaf
            </span>
          </motion.a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-extrabold tracking-tight transition-colors ${mutedColor}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="https://smart-leaf-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-3 rounded-full px-6 py-3 text-base font-extrabold transition-all ${
                isScrolled
                  ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-800'
                  : 'bg-white text-emerald-800 shadow-xl shadow-black/20 hover:bg-lime-100'
              }`}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Try Demo
            </motion.a>
          </div>

          <motion.button
            className={`rounded-full p-2 md:hidden ${textColor}`}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-emerald-100/50 px-5 pb-5 pt-2 md:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-emerald-50'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://smart-leaf-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`mt-2 rounded-2xl px-4 py-3 text-base font-extrabold ${
                  isScrolled
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white text-emerald-800'
                }`}
              >
                Try Demo
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
