import { Card, CardContent } from "@/components/common/ui/card";
import GraphImage from "@assets/graph.svg?react";

const GraphCard = () => {
  return (
    <Card className="rounded-2xl border border-border bg-card2 shadow-sm md:col-span-2 flex flex-col">
      <CardContent className="p-5 flex flex-col flex-1">
        <p className="text-sm font-semibold text-card-foreground text-center mb-4">
          Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of
          mind for you.
        </p>
        <div className="mt-auto bg-muted rounded-xl p-4">
          <GraphImage className="w-full h-56" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphCard;
