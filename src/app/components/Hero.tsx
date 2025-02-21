import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to Agentia World
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover, create, and deploy intelligent AI agents in a collaborative ecosystem
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/agents" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-3.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100">
              Explore Agents
            </Link>
            <Link href="/features" className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-8 sm:px-10 py-3.5 rounded-full font-medium transition-all duration-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}