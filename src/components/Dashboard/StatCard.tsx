import BarsIcon from "@/assets/icons/BarsIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../common/ui/card";

interface IStatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard = ({ title, value, change, color }: IStatCardProps) => (
  <Card className="border-border bg-card rounded-lg border p-4">
    <CardHeader className="mb-2 flex flex-row items-start justify-between p-0">
      <CardTitle className="text-muted-foreground text-xs font-medium">
        {title}
      </CardTitle>
      <span className="text-xs font-semibold" style={{ color }}>
        {change}
      </span>
    </CardHeader>
    <CardContent className="flex items-center justify-between p-0">
      <span className="text-2xl font-bold tracking-tight">{value}</span>
      <BarsIcon className="h-8 w-8" color={color} />
    </CardContent>
  </Card>
);

export default StatCard;
