import { Card, CardHeader, CardTitle, CardContent } from "@/components/common/ui/card";
import { useMemo, useState } from "react";
import { generateChartData } from "@/lib/charts/chartUtils";
import SpendChart from "./SpendChart";

type TimeFrame = "Daily" | "Weekly" | "Monthly" | "Yearly";

const TIME_FRAMES: TimeFrame[] = ["Daily", "Weekly", "Monthly", "Yearly"];

const ChartCard = () => {
  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>("Daily");
  const data = useMemo(() => generateChartData(), []);

  return (
    <Card className="lg:col-span-6 p-4 rounded-lg border border-border bg-card">
      <CardHeader className="p-0 mb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-medium text-muted-foreground">Spend Overview</CardTitle>
          <div className="flex gap-3 text-xs text-muted-foreground">
            {TIME_FRAMES.map((timeFrame) => (
              <button
                key={timeFrame}
                onClick={() => setActiveTimeFrame(timeFrame)}
                className={`hover:text-foreground transition-colors ${
                  activeTimeFrame === timeFrame ? "text-foreground font-medium" : ""
                }`}
              >
                {timeFrame}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <SpendChart data={data} />
      </CardContent>
    </Card>
  );
};

export default ChartCard;
