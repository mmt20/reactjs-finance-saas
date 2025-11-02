import { Card } from "@/components/common/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/ui/avatar";
import { Star, Quote } from "lucide-react";
import type { ITestimonial } from "@/types";

export default function TestimonialCard({
  name,
  avatar,
  rating,
  text,
}: ITestimonial) {
  return (
    <Card className="bg-card relative h-[220px] w-full shrink-0 rounded-3xl border p-4 transition-all sm:h-[260px] sm:p-6">
      <div className="flex h-full flex-col justify-between">
        <p className="text-foreground text-sm leading-relaxed sm:text-base">
          “{text}”
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="border-background h-10 w-10 rounded-full border sm:h-12 sm:w-12">
              <AvatarImage src={avatar} alt={`avatar of ${name}`} />
              <AvatarFallback className="bg-muted text-foreground text-sm font-medium">
                {name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-foreground text-xs font-semibold sm:text-sm">
                {name}
              </h3>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${
                      i < rating
                        ? "fill-yellow-500 text-yellow-500"
                        : "fill-muted-foreground/20 text-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Quote className="fill-accent text-muted-foreground/20 h-8 w-8 sm:h-10 sm:w-10" />
        </div>
      </div>
    </Card>
  );
}
