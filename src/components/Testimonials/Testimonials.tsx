"use client";
import { Button } from "@/components/common/ui/button";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AnnouncementBadge from "../common/AnnouncementBadge";
import TestimonialCard from "./TestimonialCard";
import tsOneImage from "@/assets/testimonials-images/ts-1.jpg";
import tsTwoImage from "@/assets/testimonials-images/ts-2.jpg";
import tsThreeImage from "@/assets/testimonials-images/ts-3.jpg";
import tsFourImage from "@/assets/testimonials-images/ts-4.jpg";

const CARD_WIDTH = 384;
const CARD_GAP = 24;

const testimonials = [
  {
    id: 1,
    name: "Alfredo Lubin",
    rating: 5,
    avatar: tsOneImage,
    text: "I really like the system at this management, I love recommending this software to you guys.",
  },
  {
    id: 2,
    name: "Randy Levin",
    rating: 5,
    avatar: tsTwoImage,
    text: "We align our success with the success of our customers which is why our offering transcends our software.",
  },
  {
    id: 3,
    name: "Angel Mango",
    rating: 5,
    avatar: tsThreeImage,
    text: "I really like the system at this management, I love recommending this software to you guys.",
  },
  {
    id: 4,
    name: "Sandy Cheeks",
    rating: 5,
    avatar: tsFourImage,
    text: "We align our success with the success of our customers which is why our offering transcends our software.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -(CARD_WIDTH + CARD_GAP) : CARD_WIDTH + CARD_GAP;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

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
  }, []);

  const isAtStart = scrollPos <= 1;
  const isAtEnd = scrollPos >= maxScroll - 1;

  return (
    <section className="w-full bg-background2 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <AnnouncementBadge startIcon={MessageSquare}>Testimonials</AnnouncementBadge>
        <h2 className="mt-4 text-3xl font-bold text-foreground ">What people are saying</h2>
        <p className="mt-2 text-[18px] font-normal text-muted-foreground">
          "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the
          best [products/services offered]. Read what our clients have to say about their experience with us.
        </p>

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
      </div>
    </section>
  );
}
