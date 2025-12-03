import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface TrendChartProps {
  data: number[];
  trend: string;
}

export const TrendChart = ({ data, trend }: TrendChartProps) => {
  const trendLower = trend.toLowerCase();
  
  const getColor = () => {
    if (trendLower === "rising") return "#10b981";
    if (trendLower === "declining") return "#f43f5e";
    return "#f59e0b";
  };

  const chartData = data.map((value, index) => ({
    name: `T${index + 1}`,
    value,
  }));

  const color = getColor();

  return (
    <div className="w-full h-48 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.4} />
              <stop offset="95%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(270, 15%, 50%)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(270, 15%, 50%)', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(270, 30%, 98%)',
              border: '1px solid hsl(280, 50%, 80%)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px -4px rgba(168,85,247,0.15)',
              padding: '8px 12px',
            }}
            labelStyle={{ color: 'hsl(270, 25%, 10%)', fontWeight: 600 }}
            itemStyle={{ color: color }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            fill="url(#colorTrend)"
            dot={false}
            activeDot={{ r: 6, fill: color, strokeWidth: 2, stroke: 'white' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
