import { useQuery } from "@tanstack/react-query";
import { pricingServices } from "@/services/pricingServices";

const PRICING_QUERY_KEY = ["pricing"];

export function usePricing() {
  return useQuery({
    queryKey: PRICING_QUERY_KEY,
    queryFn: pricingServices.getAll,
  });
}

export { PRICING_QUERY_KEY };
