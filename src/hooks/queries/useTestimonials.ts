import { useQuery } from "@tanstack/react-query";
import { testimonialServices } from "@/services/testimonialServices";

const TESTIMONIALS_QUERY_KEY = ["testimonials"];

export function useTestimonials() {
  return useQuery({
    queryKey: TESTIMONIALS_QUERY_KEY,
    queryFn: testimonialServices.getAll,
  });
}

export { TESTIMONIALS_QUERY_KEY };
