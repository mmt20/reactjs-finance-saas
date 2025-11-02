import { Button } from "../common/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/common/ui/card";
import PopularBadge from "./PopularBadge";
import FeatureItem from "./FeatureItem";
import type { IPricingPlan } from "@/types";

const PlanCard = ({ plan }: { plan: IPricingPlan }) => {
  return (
    <Card className="bg-card text-card-foreground hover:border-border/60 relative flex flex-col rounded-3xl border transition-all hover:shadow-lg">
      {plan.popular && <PopularBadge />}

      <CardHeader className="space-y-3 p-6 pt-8">
        <CardTitle
          className={`text-center text-3xl font-semibold sm:text-2xl ${
            plan.popular ? "text-primary-brand" : "text-foreground"
          }`}
        >
          {plan.name}
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground text-center sm:text-sm">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mb-6 min-h-80 pb-6">
        {/* Pricing display */}
        <div className="mb-4 flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold sm:text-4xl">${plan.price}</span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>

        {/* Divider line */}
        <div className="border-border mb-6 border-t" />

        {/* Feature list */}
        <ul role="list" className="mt-6 space-y-3">
          {plan.features.map((feature, idx) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </ul>
      </CardContent>

      {/* CTA button */}
      <CardFooter>
        <Button
          variant={plan.variant}
          className="w-full"
          size="lg"
          aria-label={`Select ${plan.name} plan`}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PlanCard;
