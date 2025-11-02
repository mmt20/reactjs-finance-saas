import {
  ResponsiveContainer,
  Area,
  AreaChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_COLORS, CHART_GRADIENTS } from "@/lib/charts/chartConfig";

interface SpendChartProps {
  data: Array<{ time: string; value: number }>;
}

const SpendChart = ({ data }: SpendChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id={CHART_GRADIENTS.green.id}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            {CHART_GRADIENTS.green.stops.map((stop) => (
              <stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          stroke={CHART_COLORS.muted}
          tick={{ fill: CHART_COLORS.muted, fontSize: 10 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          stroke={CHART_COLORS.muted}
          tick={{ fill: CHART_COLORS.muted, fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          domain={[1000, 7000]}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill={`url(#${CHART_GRADIENTS.green.id})`}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={CHART_COLORS.primary}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: CHART_COLORS.primary }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SpendChart;
