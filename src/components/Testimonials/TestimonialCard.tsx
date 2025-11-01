import { Card } from "@/components/common/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/ui/avatar";
import { Star, Quote } from "lucide-react";
import type { ITestimonial } from "@/types";

export default function TestimonialCard({ name, avatar, rating, text }: ITestimonial) {
  return (
    <Card
      className="relative shrink-0 rounded-3xl border bg-card p-6 transition-all"
      style={{ width: 384, height: 260 }}
    >
      <div className="flex flex-col h-full justify-between">
        <p className="text-base leading-relaxed text-foreground">“{text}”</p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-background rounded-full">
              <AvatarImage src={avatar} />
              <AvatarFallback className="bg-muted text-sm font-medium text-foreground">
                {name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold text-foreground">{name}</h4>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Quote className="h-10 w-10 fill-accent  text-muted-foreground/20" />
        </div>
      </div>
    </Card>
  );
}
