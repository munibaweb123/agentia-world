import Chat from './components/Chat';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
    
      <Hero />
      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Discover Agents</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our marketplace of pre-built AI agents ready to help with various tasks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Create Agents</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build and customize your own AI agents using our intuitive tools.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Deploy & Scale</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deploy your agents to the cloud and scale them as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Chat />
   
    </main>
  );
}