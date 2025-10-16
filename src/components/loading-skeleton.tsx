import { Skeleton } from "@/components/ui/shadcn/skeleton";

export function PageLoadingSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-96" />
      </div>

      {/* Search and Filters Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ComponentCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function ComponentCardSkeleton() {
  return (
    <div className="component-card">
      <div className="component-card__header">
        <Skeleton className="h-5 w-32" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>
      <div className="component-card__body">
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function ComponentLoader() {
  return (
    <div className="flex flex-col gap-3 p-6 animate-pulse bg-card rounded-lg border-2 border-border">
      {/* Title skeleton */}
      <Skeleton className="h-5 w-32 mb-2" />
      
      {/* Content skeletons with shimmer */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1 rounded-md" />
          <Skeleton className="h-10 flex-1 rounded-md" />
        </div>
      </div>
      
      {/* Description skeleton */}
      <div className="mt-2 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
    </div>
  );
}
