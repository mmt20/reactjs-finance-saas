import { Skeleton } from "@/components/common/ui/skeleton";

export default function TestimonialsSkeleton() {
  return (
    <section className="bg-background2 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-56 w-full rounded-2xl sm:h-64" />
          <Skeleton className="hidden h-56 w-full rounded-2xl sm:block sm:h-64" />
          <Skeleton className="hidden h-56 w-full rounded-2xl sm:h-64 lg:block" />
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full sm:h-12 sm:w-12" />
          <Skeleton className="h-10 w-10 rounded-full sm:h-12 sm:w-12" />
        </div>
      </div>
    </section>
  );
}
