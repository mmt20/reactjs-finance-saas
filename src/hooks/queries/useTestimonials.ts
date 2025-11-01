import { useQuery } from "@tanstack/react-query";
import { testimonialServices } from "@/services/testimonialServices";

const TESTIMONIALS_QUERY_KEY = ["testimonials"];

export function useTestimonials() {
  return useQuery({
    queryKey: TESTIMONIALS_QUERY_KEY,
    queryFn: testimonialServices.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export { TESTIMONIALS_QUERY_KEY };
