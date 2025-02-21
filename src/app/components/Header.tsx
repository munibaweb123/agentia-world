'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGetStarted = () => {
    setShowAuthModal(true);
  };

  return (
    <header className="fixed w-full backdrop-blur-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Agentia World
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/features" className="hover:text-blue-600">
              Features
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hidden md:block"
          >
            Get Started
          </motion.button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <Link href="/features" className="block text-blue-600 hover:text-blue-700">
              Features
            </Link>
            <Link href="/about" className="block text-blue-600 hover:text-blue-700">
              About
            </Link>
            <Link href="/pricing" className="block text-blue-600 hover:text-blue-700">
              Pricing
            </Link>
            <Link href="/contact" className="block text-blue-600 hover:text-blue-700">
              Contact
            </Link>
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 w-full"
            >
              Get Started
            </button>
          </div>
        )}

        {/* Auth Modal */}
        <AnimatePresence>
          {showAuthModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowAuthModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-4"
              >
                <h2 className="text-2xl font-bold mb-6">Get Started with Agentia</h2>
                <div className="space-y-4">
                  <button 
                    onClick={() => window.location.href = '/auth/signup'}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </button>
                  <button 
                    onClick={() => window.location.href = '/auth/login'}
                    className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Log In
                  </button>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}