
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  focusTime: number;
  distractionTime: number;
  completed: boolean;
}

const TasksBreakdown: React.FC = () => {
  // Mock tasks data
  const tasks: Task[] = [
    {
      id: 1,
      name: "Quarterly report preparation",
      tag: "business",
      tagColor: "bg-blue-500",
      focusTime: 120, // minutes
      distractionTime: 15,
      completed: true
    },
    {
      id: 2,
      name: "Website redesign mockups",
      tag: "design",
      tagColor: "bg-purple-500",
      focusTime: 90,
      distractionTime: 10,
      completed: true
    },
    {
      id: 3,
      name: "Client presentation review",
      tag: "business",
      tagColor: "bg-blue-500",
      focusTime: 45,
      distractionTime: 5,
      completed: true
    },
    {
      id: 4,
      name: "Email inbox zero",
      tag: "admin",
      tagColor: "bg-gray-500",
      focusTime: 30,
      distractionTime: 25,
      completed: true
    },
    {
      id: 5,
      name: "Team productivity analysis",
      tag: "management",
      tagColor: "bg-green-500",
      focusTime: 60,
      distractionTime: 5,
      completed: true
    }
  ];

  // Format time (minutes) to readable format
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  // Calculate efficiency percentage
  const calculateEfficiency = (focusTime: number, distractionTime: number) => {
    const totalTime = focusTime + distractionTime;
    return (focusTime / totalTime) * 100;
  };

  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Completed Tasks</CardTitle>
          <CheckSquare className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {tasks.map((task, index) => (
            <div 
              key={task.id}
              className={cn(
                "flex flex-col px-6 py-4 transition-colors duration-200 hover:bg-muted/50",
                index !== tasks.length - 1 ? "border-b" : ""
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-start space-x-3">
                  <div className="pt-0.5">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      task.completed ? "bg-green-500" : "border border-gray-300"
                    )}>
                      {task.completed && (
                        <CheckSquare className="h-2.5 w-2.5 text-white" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{task.name}</div>
                    <div className="flex items-center mt-1">
                      <div className={cn(
                        "text-xs px-2 py-0.5 rounded-full text-white",
                        task.tagColor
                      )}>
                        #{task.tag}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" /> 
                  <span>{formatTime(task.focusTime + task.distractionTime)}</span>
                </div>
              </div>
              <div className="ml-7 mt-1">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Focus: {formatTime(task.focusTime)}</span>
                  <span>Distractions: {formatTime(task.distractionTime)}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="bar bg-productivity-green" 
                    style={{ 
                      '--progress-value': `${calculateEfficiency(task.focusTime, task.distractionTime)}%`
                    } as React.CSSProperties} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksBreakdown;
