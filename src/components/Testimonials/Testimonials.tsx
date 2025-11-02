import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/common/ui/button";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";
import TestimonialsSkeleton from "./TestimonialsSkeleton";

import { useTestimonials } from "@/hooks/queries/useTestimonials";
import { useTestimonialsScroll } from "@/hooks/ui/useTestimonialsScroll";

const Testimonials = () => {
  const { data: testimonials = [], isLoading, error } = useTestimonials();
  const { scrollRef, scroll, isAtStart, isAtEnd } = useTestimonialsScroll(
    testimonials.length,
  );

  if (error) throw error;

  return (
    <section className="bg-background2 w-full py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <TestimonialsHeader />
        {isLoading ? (
          <TestimonialsSkeleton />
        ) : (
          <div className="relative mt-10">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth px-2 pb-4 sm:px-0"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="w-[calc(100vw-2rem)] shrink-0 sm:w-96"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="cursor-pointer rounded-full p-4 sm:p-6"
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
