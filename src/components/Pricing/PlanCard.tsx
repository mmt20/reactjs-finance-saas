import { Check, Stars } from "lucide-react";
import { Button } from "../common/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/common/ui/card";
import type { PricingPlan } from "./Pricing";

export default function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card className="relative rounded-3xl border transition-all bg-card text-card-foreground hover:shadow-lg hover:border-border/60 flex flex-col">
      {plan.popular && (
        <div className="absolute top-5 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-brand text-primary rounded-full text-xs font-semibold">
            <Stars className="w-3 h-3" />
            Popular
          </span>
        </div>
      )}

      <CardHeader className="p-6 pt-8 space-y-3">
        <CardTitle className="text-3xl text-center sm:text-2xl font-bold text-foreground">{plan.name}</CardTitle>
        <CardDescription className="text-md sm:text-sm text-muted-foreground text-center">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-6    mb-6 h-80">
        <div className="flex justify-center  items-baseline gap-1 mb-4">
          <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>

        <div className="mt-6 space-y-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary-brand" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button variant={plan.variant} className="w-full" size="lg">
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
