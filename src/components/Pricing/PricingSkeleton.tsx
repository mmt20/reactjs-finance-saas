import { Skeleton } from "../common/ui/skeleton";
import { Tag } from "lucide-react";
import AnnouncementBadge from "../common/AnnouncementBadge";

export function PricingSkeleton() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <AnnouncementBadge
            startIcon={Tag}
            variant="success"
            className="inline-flex"
          >
            Pricing
          </AnnouncementBadge>
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Find the right plan
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base">
            Invest in your company's future with our comprehensive financial
            solution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-96 w-full rounded-3xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
