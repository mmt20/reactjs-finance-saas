import { Skeleton } from "../common/ui/skeleton";
import { Tag } from "lucide-react";
import AnnouncementBadge from "../common/AnnouncementBadge";

export function PricingSkeleton() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnnouncementBadge startIcon={Tag} variant="success" className="inline-flex">
            Pricing
          </AnnouncementBadge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Find the right plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Invest in your company's future with our comprehensive financial solution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-96 w-full rounded-3xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
