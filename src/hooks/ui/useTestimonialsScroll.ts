import { useRef, useState, useEffect } from "react";

export function useTestimonialsScroll(itemCount: number, cardWidth = 384, cardGap = 24) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -(cardWidth + cardGap) : cardWidth + cardGap;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const isAtStart = scrollPos <= 1;
  const isAtEnd = scrollPos >= maxScroll - 1;

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
  }, [itemCount]);

  return { scrollRef, scroll, isAtStart, isAtEnd };
}
