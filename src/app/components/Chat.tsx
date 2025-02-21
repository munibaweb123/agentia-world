'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function Chat() {
  type Message = { role: 'user' | 'assistant'; content: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      const assistantMessage: Message = { role: 'assistant', content: data.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 dark:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-16 w-[95%] right-2 max-w-md sm:max-w-lg h-[80vh] sm:h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col">
          <div className="p-4 border-b dark:border-gray-700 bg-blue-600 dark:bg-blue-700 rounded-t-2xl">
            <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user' 
                    ? 'ml-auto bg-blue-600 text-white' 
                    : 'mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                } p-3 rounded-lg max-w-[80%]`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-lg">
                Thinking...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}