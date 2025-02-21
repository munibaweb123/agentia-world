'use client';
import { useState } from 'react';
import Image from 'next/image';
import { agents } from '@/data/agents';

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || agent.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Explore AI Agents
        </h1>
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
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Agent Card */}
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="border dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
              <Image
                src={agent.imageUrl}
                alt={agent.name}
                fill
                className="object-cover"
                priority={agent.id === '1'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/agents/placeholder.png';
                }}
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
          </div>
        ))}
      </div>
    </div>
  )
} 