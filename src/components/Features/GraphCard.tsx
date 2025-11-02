import { Card, CardContent } from "@/components/common/ui/card";
import GraphImage from "@assets/graph.svg?react";

const GraphCard = () => {
  return (
    <Card className="border-border bg-card2 flex flex-col rounded-2xl border shadow-sm md:col-span-2">
      <CardContent className="flex flex-1 flex-col p-5">
        <p className="text-card-foreground mb-4 text-center text-sm font-semibold">
          Bring harmony to team expenses with budget limits and real-time
          monitoring. Freedom for your staff. Peace of mind for you.
        </p>
        <div className="bg-muted mt-auto rounded-xl p-4">
          <GraphImage className="h-56 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphCard;
