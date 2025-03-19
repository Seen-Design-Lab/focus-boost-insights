
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from 'lucide-react';

const ProductivityHeatmap: React.FC = () => {
  // Mock data for the heatmap
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Generate mock productivity data (0-1 scale)
  const productivityData = Array.from({ length: daysInMonth }, () => 
    Math.random()
  );

  // Function to get color class based on productivity score
  const getColorClass = (score: number) => {
    if (score < 0.2) return "bg-gray-100";
    if (score < 0.4) return "bg-productivity-yellow/20";
    if (score < 0.6) return "bg-productivity-yellow/40";
    if (score < 0.8) return "bg-productivity-yellow/60";
    return "bg-productivity-yellow";
  };

  // Create calendar grid
  const calendar = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Add day names
  calendar.push(
    <div key="day-names" className="grid grid-cols-7 text-xs text-muted-foreground mb-2">
      {dayNames.map(day => (
        <div key={day} className="h-8 flex items-center justify-center">
          {day}
        </div>
      ))}
    </div>
  );

  // Create date grid
  let days = [];
  
  // Add empty cells for days before first of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10 rounded-md"></div>);
  }
  
  // Add days of month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayIndex = i - 1;
    const isToday = i === currentDate.getDate();
    
    days.push(
      <div 
        key={`day-${i}`} 
        className={`h-10 w-10 flex items-center justify-center rounded-md text-xs font-medium transition-all duration-300 ${
          getColorClass(productivityData[dayIndex])
        } ${
          isToday ? 'ring-2 ring-offset-2 ring-productivity-yellow' : ''
        }`}
      >
        {i}
      </div>
    );
    
    // Start a new row after Saturday
    if ((firstDayOfMonth + i) % 7 === 0 || i === daysInMonth) {
      calendar.push(
        <div key={`week-${Math.floor((firstDayOfMonth + i) / 7)}`} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }
  }

  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Productivity Heatmap</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {calendar}
        </div>
        <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-productivity-yellow/40"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-productivity-yellow"></div>
            <span>High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductivityHeatmap;
