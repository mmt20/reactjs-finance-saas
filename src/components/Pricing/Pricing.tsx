import { Tag } from "lucide-react";
import AnnouncementBadge from "../common/AnnouncementBadge";
import PlanCard from "./PlanCard";

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  variant: "outline" | "raised" | "raised-accent";
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: 499,
    description: "Get a professional website designed according to your needs.",
    features: ["Get a fully designed Website", "Web flow Development", "Limited Support"],
    cta: "Get started",
    popular: false,
    variant: "outline",
  },
  {
    id: 2,
    name: "Pro",
    price: 499,
    description: "Get a professional website designed according to your needs.",
    features: [
      "Get a fully designed Website",
      "Web flow Development",
      "Limited Support",
      "Standard Integrations",
      "Email support",
    ],
    cta: "Get started",
    popular: true,
    variant: "raised",
  },
  {
    id: 3,
    name: "Enterprise",
    price: 999,
    description: "Get a professional website designed according to your needs.",
    features: [
      "Get a fully designed Website",
      "Web flow Development",
      "Limited Support",
      "Standard Integrations",
      "Email support",
    ],
    cta: "Contact Us",
    popular: false,
    variant: "raised-accent",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnnouncementBadge startIcon={Tag} variant="success" className="inline-flex">
            Pricing
          </AnnouncementBadge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Find the right plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Invest in your company's future with our comprehensive financial solution. Contact us for pricing details
            and see how we can help you streamline your finances and reach your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
