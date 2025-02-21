'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed w-full  backdrop-blur-sm z-50">
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hidden md:block">
            Get Started
          </button>
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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}