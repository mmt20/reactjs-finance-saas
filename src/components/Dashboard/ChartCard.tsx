import { Card, CardHeader, CardTitle, CardContent } from "@/components/common/ui/card";
import { Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const generateChartData = () => {
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    const hour = i === 24 ? 0 : i;
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const time = `${displayHour.toString().padStart(2, "0")}:00${period}`;
    const value = 4500 + Math.sin(i * 0.6 - 1) * 1200 + Math.cos(i * 0.4) * 600 + Math.sin(i * 0.2) * 300;
    hours.push({ time, value: Math.max(2000, Math.min(6500, value)) });
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
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Area type="monotone" dataKey="value" stroke="none" fill="url(#colorGradient)" />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#10b981" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
