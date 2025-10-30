import { Card, CardContent } from "@/components/common/ui/card";
import { ArrowUp } from "lucide-react";
import AnalyticsImage from "@assets/analytics.svg?react";

const AnalyticsCard = () => {
  return (
    <Card className="rounded-2xl border border-border bg-card2 shadow-sm flex flex-col">
      <CardContent className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-card-foreground mb-4">
          Make informed decisions backed by data through our analytics tools.
        </h3>
        <div className="mt-auto bg-muted rounded-xl p-4 relative">
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-primary-brand" />
            </div>
            <span className="text-sm font-semibold text-primary-brand">14.12%</span>
          </div>
          <AnalyticsImage className="w-full h-56" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
