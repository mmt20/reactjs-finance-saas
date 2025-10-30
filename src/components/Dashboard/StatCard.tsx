import BarsIcon from "@/assets/icons/BarsIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../common/ui/card";

interface IStatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard = ({ title, value, change, color }: IStatCardProps) => (
  <Card className="p-4 rounded-lg border border-border bg-card">
    <CardHeader className="flex flex-row justify-between items-start p-0 mb-2">
      <CardTitle className="text-xs font-medium text-muted-foreground">{title}</CardTitle>
      <span className="text-xs font-semibold" style={{ color }}>
        {change}
      </span>
    </CardHeader>
    <CardContent className="flex items-center justify-between p-0">
      <span className="text-2xl font-bold tracking-tight">{value}</span>
      <BarsIcon className="w-8 h-8" color={color} />
    </CardContent>
  </Card>
);

export default StatCard;
