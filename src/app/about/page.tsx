'use client';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto py-12 px-4 max-w-7xl"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Understanding Agentic AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how our advanced AI agents are revolutionizing the way we interact with technology
          and automating complex tasks with unprecedented intelligence.
        </p>
      </motion.section>

      {/* Core Features */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Core Features of Agentic AI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How Agentic AI Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {workingSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">✓</span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Real-World Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Agentic AI?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Start exploring our AI agents and discover how they can transform your workflow.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium"
        >
          Get Started Now
        </motion.button>
      </motion.section>
    </motion.div>
  );
}

const coreFeatures = [
  {
    icon: "🧠",
    title: "Autonomous Decision Making",
    description: "AI agents that can make informed decisions independently based on complex data analysis and learning."
  },
  {
    icon: "🎯",
    title: "Goal-Oriented Behavior",
    description: "Agents work towards specific objectives, adapting their approach based on feedback and results."
  },
  {
    icon: "🔄",
    title: "Continuous Learning",
    description: "Constantly improving performance through experience and new data integration."
  },
  {
    icon: "🤝",
    title: "Multi-Agent Collaboration",
    description: "Agents work together to solve complex problems, sharing information and coordinating actions."
  },
  {
    icon: "🛡️",
    title: "Safe & Controlled",
    description: "Built-in safety measures and ethical guidelines ensure responsible AI behavior."
  },
  {
    icon: "📈",
    title: "Scalable Performance",
    description: "Easily scales to handle increasing workloads and complex tasks."
  }
];

const workingSteps = [
  {
    title: "Task Analysis",
    description: "AI agents break down complex tasks into manageable components."
  },
  {
    title: "Strategy Formation",
    description: "Develops optimal approaches based on goals and constraints."
  },
  {
    title: "Execution & Monitoring",
    description: "Implements solutions while continuously monitoring progress."
  },
  {
    title: "Adaptation & Improvement",
    description: "Adjusts strategies based on results and new information."
  }
];

const benefits = [
  "Increased Productivity & Efficiency",
  "Reduced Human Error",
  "24/7 Operation Capability",
  "Cost-Effective Scaling",
  "Improved Decision Making",
  "Enhanced Problem Solving"
];

const useCases = [
  {
    title: "Business Process Automation",
    description: "Streamline workflows and automate repetitive tasks with intelligent agents."
  },
  {
    title: "Research & Analysis",
    description: "Process and analyze large datasets to extract valuable insights."
  },
  {
    title: "Customer Service",
    description: "Provide 24/7 intelligent support and personalized assistance."
  },
  {
    title: "Content Creation",
    description: "Generate and optimize content across various platforms and formats."
  },
  {
    title: "Project Management",
    description: "Coordinate tasks and resources while adapting to changing conditions."
  },
  {
    title: "Risk Assessment",
    description: "Identify and evaluate potential risks in real-time."
  }
]; 