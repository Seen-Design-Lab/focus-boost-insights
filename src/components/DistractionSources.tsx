
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { BellOff } from 'lucide-react';

interface DistractionSource {
  name: string;
  count: number;
}

const DistractionSources: React.FC = () => {
  // Mock data for distraction sources
  const data: DistractionSource[] = [
    { name: "Social Media", count: 7 },
    { name: "Email", count: 4 },
    { name: "News Sites", count: 2 },
    { name: "Entertainment", count: 1 },
    { name: "Shopping", count: 1 }
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded-md shadow-sm text-xs">
          <p className="font-medium">{`${label}: ${payload[0].value} blocks`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Distraction Sources</CardTitle>
          <BellOff className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 'dataMax + 2']} />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                width={70}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="count" 
                fill="#F87171" 
                radius={[0, 4, 4, 0]}
                barSize={16}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DistractionSources;
