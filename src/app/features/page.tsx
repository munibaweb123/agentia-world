import FeatureCard from "../components/FeatureCard";

export default function Features() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl ">
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Smart Conversations"
          description="Engage in intelligent conversations powered by Google's Gemini AI"
          icon="💡"
        />
        <FeatureCard
          title="Real-time Responses"
          description="Get instant answers to your questions"
          icon="⚡"
        />
        <FeatureCard
          title="24/7 Availability"
          description="Access the chatbot anytime, anywhere"
          icon="🌐"
        />
      </div>
    </div>
  );
}
