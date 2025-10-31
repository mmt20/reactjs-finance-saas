import { Button } from "../common/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/common/ui/card";
import PopularBadge from "./PopularBadge";
import FeatureItem from "./FeatureItem";
import type { PricingPlan } from "./Pricing";

const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <Card className="relative rounded-3xl border transition-all bg-card text-card-foreground hover:shadow-lg hover:border-border/60 flex flex-col">
      {plan.popular && <PopularBadge />}

      <CardHeader className="p-6 pt-8 space-y-3">
        <CardTitle
          className={`text-3xl text-center sm:text-2xl font-semibold ${
            plan.popular ? "text-primary-brand" : "text-foreground"
          }`}
        >
          {plan.name}
        </CardTitle>
        <CardDescription className="text-md sm:text-sm text-muted-foreground text-center">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-6 mb-6 min-h-80">
        {/* Pricing display */}
        <div className="flex justify-center items-baseline gap-1 mb-4">
          <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>

        {/* Divider line */}
        <div className="border-t border-border mb-6" />

        {/* Feature list */}
        <ul role="list" className="mt-6 space-y-3">
          {plan.features.map((feature, idx) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </ul>
      </CardContent>

      {/* CTA button */}
      <CardFooter>
        <Button variant={plan.variant} className="w-full" size="lg" aria-label={`Select ${plan.name} plan`}>
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PlanCard;
