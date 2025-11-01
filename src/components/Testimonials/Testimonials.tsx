import { Button } from "@/components/common/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSkeleton from "./TestimonialsSkeleton";

const CARD_WIDTH = 384;
const CARD_GAP = 24;

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -(CARD_WIDTH + CARD_GAP) : CARD_WIDTH + CARD_GAP;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const isAtStart = scrollPos <= 1;
  const isAtEnd = scrollPos >= maxScroll - 1;
  const { data: testimonials = [], isLoading, error } = useTestimonials();
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollInfo = () => {
      setScrollPos(el.scrollLeft);
      setMaxScroll(el.scrollWidth - el.clientWidth);
    };

    updateScrollInfo();
    el.addEventListener("scroll", updateScrollInfo);
    window.addEventListener("resize", updateScrollInfo);

    return () => {
      el.removeEventListener("scroll", updateScrollInfo);
      window.removeEventListener("resize", updateScrollInfo);
    };
  }, [testimonials]);

  if (error) throw error;

  return (
    <section className="w-full bg-background2 py-16">
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
                className="rounded-full p-6 cursor-pointer"
                onClick={() => scroll("left")}
                disabled={isAtStart}
              >
                <ChevronLeft />
              </Button>
              <Button
                size="icon"
                variant="accent"
                className="cursor-pointer p-6"
                onClick={() => scroll("right")}
                disabled={isAtEnd}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
