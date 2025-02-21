'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { agents } from '@/data/agents';

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || agent.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8 max-w-7xl"
    >
      {/* Agentic AI Introduction */}
      <motion.section variants={itemVariants} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Agentic AI: The Future of Intelligent Automation
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Agentic AI represents a new paradigm in artificial intelligence where AI systems act as autonomous agents, capable of understanding, planning, and executing tasks with minimal human intervention.
            </p>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Autonomous Decision Making</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Goal-Oriented Behavior</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Adaptive Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Multi-Agent Collaboration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm">Complex task decomposition and strategic execution</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Learning</h3>
              <p className="text-sm">Continuous improvement through experience and feedback</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-pink-500 to-red-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Automation</h3>
              <p className="text-sm">Streamlined workflows and process optimization</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-green-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm">Seamless interaction with humans and other AI agents</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Explore Our Agents</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="search"
            placeholder="Search agents..."
            className="flex-grow p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="productivity">Productivity</option>
            <option value="creative">Creative</option>
            <option value="analysis">Analysis</option>
            <option value="assistant">Assistant</option>
          </select>
        </div>
      </motion.div>

      {/* Agents Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredAgents.map((agent) => (
          <motion.div 
            key={agent.id} 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="border dark:border-gray-700 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
              <Image
                src={agent.imageUrl}
                alt={agent.name}
                fill
                className="object-cover"
                priority={agent.id === '1'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {agent.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2.5 py-1 rounded">
                  {agent.category}
                </span>
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 