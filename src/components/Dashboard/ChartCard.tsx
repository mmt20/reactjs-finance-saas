import { Card, CardHeader, CardTitle, CardContent } from "@/components/common/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const generateChartData = () => {
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    const hour = i === 24 ? 0 : i;
    const time = `${hour.toString().padStart(2, "0")}:00AM`;
    const value = 4000 + Math.sin(i * 0.5) * 1500 + Math.cos(i * 0.3) * 800;
    hours.push({ time, value });
  }
  return hours;
};

const ChartCard = () => {
  const data = generateChartData();

  return (
    <Card className="lg:col-span-6 p-4 rounded-lg border border-border bg-card">
      <CardHeader className="p-0 mb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-medium text-muted-foreground">Spend Overview</CardTitle>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <button className="hover:text-foreground">Daily</button>
            <button className="hover:text-foreground">Weekly</button>
            <button className="hover:text-foreground">Monthly</button>
            <button className="hover:text-foreground">Yearly</button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis
              dataKey="time"
              stroke="#666"
              tick={{ fill: "#666", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#666"
              tick={{ fill: "#666", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[1000, 7000]}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
