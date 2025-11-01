import { supabase } from "@/lib/supabase/client";
import type { PricingPlan } from "@/types";

export const pricingServices = {
  async getAll(): Promise<PricingPlan[]> {
    const { data, error } = await supabase
      .from("pricing_plans")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error fetching pricing plans:", error);
      throw error;
    }

    return data.map((plan) => ({
      ...plan,
      features: Array.isArray(plan.features) ? plan.features : [],
    }));
  },
};
