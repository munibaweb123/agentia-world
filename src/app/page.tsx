'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Chat from './components/Chat';
import Hero from './components/Hero';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail');
    
    setIsLoggedIn(loggedIn);
    if (email) setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    router.push('/auth/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-100 dark:bg-blue-900 p-4"
        >
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-blue-800 dark:text-blue-200">
              Welcome back, {userEmail}!
            </p>
            <button
              onClick={handleLogout}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      )}

      <Hero />

      <motion.section 
        variants={itemVariants}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Choose Our AI Platform?
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-lg"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        variants={itemVariants}
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <Chat />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        variants={itemVariants}
        className="py-16 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/agents"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium"
            >
              Try Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}

const features = [
  {
    icon: "🤖",
    title: "Advanced AI",
    description: "Powered by cutting-edge AI technology for intelligent conversations"
  },
  {
    icon: "⚡",
    title: "Real-time Response",
    description: "Get instant answers to your questions with minimal latency"
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your conversations are protected with enterprise-grade security"
  }
];