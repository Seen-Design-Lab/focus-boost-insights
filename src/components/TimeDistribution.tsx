
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Clock } from 'lucide-react';

interface TimeCategory {
  name: string;
  value: number;
  color: string;
}

const TimeDistribution: React.FC = () => {
  // Mock data for time distribution
  const data: TimeCategory[] = [
    { name: "Business", value: 12, color: "#60A5FA" },
    { name: "Design", value: 6, color: "#A78BFA" },
    { name: "Management", value: 4, color: "#34D399" },
    { name: "Admin", value: 2, color: "#9CA3AF" },
    { name: "Learning", value: 1.5, color: "#FBBF24" }
  ];

  // Custom render for the tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded-md shadow-sm text-xs">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}h`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const renderLegend = (props: any) => {
    const { payload } = props;
    
    return (
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mt-2">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Time Distribution</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeDistribution;
