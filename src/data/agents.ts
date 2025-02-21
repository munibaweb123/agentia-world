import { Agent } from '@/types/agent';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Research Assistant',
    description: 'Helps with research, summarization, and data analysis',
    category: 'productivity',
    imageUrl: '/images/research-assistant.jpg',
    capabilities: ['Research', 'Summarization', 'Analysis'],
    pricing: {
      free: false,
      price: 9.99
    }
  },
  {
    id: '2',
    name: 'Creative Writer',
    description: 'Generates creative content, stories, and marketing copy',
    category: 'creative',
    imageUrl: '/images/creative-writer.jpg',
    capabilities: ['Content Writing', 'Storytelling', 'Copywriting'],
    pricing: {
      free: false,
      price: 14.99
    }
  },
  {
    id: '3',
    name: 'Data Analyst',
    description: 'Analyzes data sets and provides actionable insights',
    category: 'analysis',
    imageUrl: '/images/data-analyst.avif',
    capabilities: ['Data Analysis', 'Visualization', 'Reporting'],
    pricing: {
      free: false,
      price: 19.99
    }
  },
  {
    id: '4',
    name: 'Personal Assistant',
    description: 'Helps with scheduling, reminders, and daily tasks',
    category: 'assistant',
    imageUrl: '/images/personal-assistant.avif',
    capabilities: ['Task Management', 'Scheduling', 'Reminders'],
    pricing: {
      free: true
    }
  },
  {
    id: '5',
    name: 'Code Helper',
    description: 'Assists with coding, debugging, and code reviews',
    category: 'productivity',
    imageUrl: '/images/code-helper.avif',
    capabilities: ['Code Generation', 'Debugging', 'Code Review'],
    pricing: {
      free: false,
      price: 24.99
    }
  },
  {
    id: '6',
    name: 'Image Creator',
    description: 'Creates and edits images using AI technology',
    category: 'creative',
    imageUrl: '/images/image-creator.avif',
    capabilities: ['Image Generation', 'Image Editing', 'Style Transfer'],
    pricing: {
      free: false,
      price: 29.99
    }
  }
]; 