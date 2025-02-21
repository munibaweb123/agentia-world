'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [words, setWords] = useState<string[]>([]);
  const title = "Welcome to Agentia World".split(" ");

  useEffect(() => {
    const timer = setInterval(() => {
      if (words.length < title.length) {
        setWords(prev => [...prev, title[prev.length]]);
      } else {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [words.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-16 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="w-full max-w-[90rem] mx-auto px-4 pt-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
          >
            Discover, create, and deploy intelligent AI agents in a collaborative ecosystem
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mx-auto max-w-sm sm:max-w-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/agents" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium block"
              >
                Explore Agents
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/features" 
                className="w-full sm:w-auto border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-full font-medium block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}