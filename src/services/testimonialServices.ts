import { supabase } from "@/lib/supabase/client";
import type { ITestimonial } from "@/types/testimonialTypes";

export const testimonialServices = {
  getAll: async (): Promise<ITestimonial[]> => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, rating, avatar, text")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
        throw error;
      }

      return (data ?? []) as ITestimonial[];
    } catch (error) {
      console.error("Error in getAll:", error);
      throw error;
    }
  },
};
