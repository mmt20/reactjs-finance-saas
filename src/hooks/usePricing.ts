import { useQuery } from "@tanstack/react-query";
import { pricingServices } from "@/services/pricingServices";

const PRICING_QUERY_KEY = ["pricing"];

export function usePricing() {
  return useQuery({
    queryKey: PRICING_QUERY_KEY,
    queryFn: pricingServices.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export { PRICING_QUERY_KEY };
