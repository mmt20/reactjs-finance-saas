import { usePricing } from "@/hooks/usePricing";
import { PricingSkeleton } from "./PricingSkeleton";
import PlanCard from "./PlanCard";
import AnnouncementBadge from "../common/AnnouncementBadge";
import { Tag } from "lucide-react";

export default function Pricing() {
  const { data: plans = [], isLoading, error } = usePricing();

  if (isLoading) {
    return <PricingSkeleton />;
  }
  if (error) {
    throw error;
  }
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
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
