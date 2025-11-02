import { Card, CardContent } from "@/components/common/ui/card";
import { ArrowUp } from "lucide-react";
import AnalyticsImage from "@assets/analytics.svg?react";

const AnalyticsCard = () => {
  return (
    <Card className="border-border bg-card2 flex flex-col rounded-2xl border shadow-sm">
      <CardContent className="flex flex-1 flex-col p-5">
        <p className="text-card-foreground mb-4 text-sm font-medium">
          Make informed decisions backed by data through our analytics tools.
        </p>
        <div className="bg-muted relative mt-auto rounded-xl p-4">
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900">
              <ArrowUp className="text-primary-brand h-4 w-4" />
            </div>
            <span className="text-primary-brand text-sm font-semibold">
              14.12%
            </span>
          </div>
          <AnalyticsImage className="h-56 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
