'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiPlantSeed } from 'react-icons/gi';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GiPlantSeed className="text-green-600 text-3xl" />
            <span className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              SmartLeaf
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                    : 'text-white hover:text-green-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button (değiştirmedik) */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
