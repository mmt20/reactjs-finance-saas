import { Skeleton } from "@/components/common/ui/skeleton";

export default function TestimonialsSkeleton() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background2">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3  gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-2xl" />
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </section>
  );
}
