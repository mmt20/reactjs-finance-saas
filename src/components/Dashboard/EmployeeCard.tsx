import { Card, CardContent } from "@/components/common/ui/card";
import { Skeleton } from "../common/ui/skeleton";

const EmployeeCard = () => {
  const categories = [
    "Employee",
    "Independent Contractor",
    "Contracted Employee",
    "Stakeholders",
  ];

  return (
    <Card className="border-border bg-card rounded-lg border p-4 lg:col-span-3">
      <CardContent className="space-y-8 p-0">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex flex-col space-y-2">
              <span className="text-foreground text-xs">{category}</span>
              <div>
                <Skeleton className="mb-1 h-2 w-[60%] rounded-full" />
                <Skeleton className="h-2 w-full rounded-full opacity-50" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
