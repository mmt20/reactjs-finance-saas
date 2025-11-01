export type PricingPlanVariant = "outline" | "raised" | "raised-accent";

export interface IPricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  variant: PricingPlanVariant;
  display_order?: number;
  created_at?: string;
  updated_at?: string;
}
