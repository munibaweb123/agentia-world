export default function Header() {
    return (
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Agentia World</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">Agents</a>
              <a href="#" className="hover:text-blue-600">Create</a>
              <a href="#" className="hover:text-blue-600">About</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </nav>
      </header>
    );
  }