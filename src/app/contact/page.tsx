export default function Contact() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl ">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-lg mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 