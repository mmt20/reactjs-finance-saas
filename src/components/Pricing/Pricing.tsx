import { usePricing } from "@/hooks/queries/usePricing";
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
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <AnnouncementBadge
            startIcon={Tag}
            variant="success"
            className="inline-flex"
          >
            Pricing
          </AnnouncementBadge>
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Find the right plan
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base">
            Invest in your company's future with our comprehensive financial
            solution. Contact us for pricing details and see how we can help you
            streamline your finances and reach your business goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
