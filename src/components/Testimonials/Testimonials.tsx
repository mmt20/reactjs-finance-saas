import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/common/ui/button";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";
import TestimonialsSkeleton from "./TestimonialsSkeleton";

import { useTestimonials } from "@/hooks/queries/useTestimonials";
import { useTestimonialsScroll } from "@/hooks/ui/useTestimonialsScroll";

const Testimonials = () => {
  const { data: testimonials = [], isLoading, error } = useTestimonials();
  const { scrollRef, scroll, isAtStart, isAtEnd } = useTestimonialsScroll(testimonials.length);

  if (error) throw error;

  return (
    <section className="w-full bg-background2 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <TestimonialsHeader />
        {isLoading ? (
          <TestimonialsSkeleton />
        ) : (
          <div className="mt-10 relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth px-2 sm:px-0 pb-4"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="shrink-0 w-[calc(100vw-2rem)] sm:w-96" style={{ scrollSnapAlign: "start" }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full p-4 sm:p-6 cursor-pointer"
                onClick={() => scroll("left")}
                disabled={isAtStart}
                aria-label="Scroll left"
              >
                <ChevronLeft />
              </Button>
              <Button
                size="icon"
                variant="accent"
                className="cursor-pointer p-4 sm:p-6"
                onClick={() => scroll("right")}
                disabled={isAtEnd}
                aria-label="Scroll right"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
