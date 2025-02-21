export default function Hero() {
    return (
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to Agentia World
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover, create, and deploy intelligent AI agents in a collaborative ecosystem
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                Explore Agents
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }