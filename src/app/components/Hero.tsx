import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="w-full max-w-[90rem] mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to Agentia World
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Discover, create, and deploy intelligent AI agents in a collaborative ecosystem
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mx-auto max-w-sm sm:max-w-none">
            <Link 
              href="/agents" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100 text-sm sm:text-base"
            >
              Explore Agents
            </Link>
            <Link 
              href="/features" 
              className="w-full sm:w-auto border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 hover:shadow-lg text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}