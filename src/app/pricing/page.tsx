import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl ">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="Free"
          price="$0"
          features={[
            "Basic conversations",
            "Standard response time",
            "Community support"
          ]}
        />
        <PricingCard
          title="Pro"
          price="$10"
          features={[
            "Advanced conversations",
            "Faster response time",
            "Priority support",
            "Custom settings"
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          features={[
            "Unlimited conversations",
            "Instant responses",
            "24/7 dedicated support",
            "Custom integration"
          ]}
        />
      </div>
    </div>
  );
} 