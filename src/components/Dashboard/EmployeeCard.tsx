import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const EmployeeCard = () => {
  const categories = ["Employee", "Independent Contractor", "Contracted Employee", "Stakeholders"];

  return (
    <Card className="lg:col-span-3  p-4 rounded-lg border border-border bg-card ">
      <CardContent className="p-0 space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex flex-col space-y-2">
              <span className="text-xs text-foreground ">{category}</span>
              <div>
                <Skeleton className="h-2 w-[60%] rounded-full mb-1" />
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
