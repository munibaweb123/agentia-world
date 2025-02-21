import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Discover Agents</h3>
              <p className="text-gray-600">
                Explore our marketplace of pre-built AI agents ready to help with various tasks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Create Agents</h3>
              <p className="text-gray-600">
                Build and customize your own AI agents using our intuitive tools.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Deploy & Scale</h3>
              <p className="text-gray-600">
                Deploy your agents to the cloud and scale them as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Chat />
    </main>
  );
}