import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/common/ui/card";
import { useMemo, useState, lazy, Suspense } from "react";
import { generateChartData } from "@/lib/charts/chartUtils";

const SpendChart = lazy(() => import("./SpendChart"));

type TimeFrame = "Daily" | "Weekly" | "Monthly" | "Yearly";

const TIME_FRAMES: TimeFrame[] = ["Daily", "Weekly", "Monthly", "Yearly"];

const ChartCard = () => {
  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>("Daily");
  const data = useMemo(() => generateChartData(), []);

  return (
    <Card className="border-border bg-card rounded-lg border p-4 lg:col-span-6">
      <CardHeader className="mb-3 p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-muted-foreground text-xs font-medium">
            Spend Overview
          </CardTitle>
          <div className="text-muted-foreground flex gap-3 text-xs">
            {TIME_FRAMES.map((timeFrame) => (
              <button
                key={timeFrame}
                onClick={() => setActiveTimeFrame(timeFrame)}
                className={`hover:text-foreground transition-colors ${
                  activeTimeFrame === timeFrame
                    ? "text-foreground font-medium"
                    : ""
                }`}
              >
                {timeFrame}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Suspense
          fallback={
            <div className="bg-muted h-[200px] animate-pulse rounded" />
          }
        >
          <SpendChart data={data} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
