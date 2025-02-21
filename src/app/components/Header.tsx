'use client'
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Agentia World</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Agents</a>
            <a href="#" className="hover:text-blue-600">Create</a>
            <a href="#" className="hover:text-blue-600">About</a>
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
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-blue-600 hover:text-blue-700">Home</a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">Agents</a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">Create</a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">About</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}