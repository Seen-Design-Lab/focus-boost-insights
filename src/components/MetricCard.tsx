
import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  colorClass?: string;
  className?: string;
  animationDelay?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  description,
  colorClass = "bg-blue-50 text-blue-600",
  className,
  animationDelay = "0s"
}) => {
  return (
    <Card className={cn(
      "relative overflow-hidden p-6 transition-all duration-300 animate-fade-in opacity-0",
      className
    )}
    style={{ animationDelay }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </div>
          <div className="text-2xl font-semibold tracking-tight">
            {value}
          </div>
          {description && (
            <div className="text-sm text-muted-foreground mt-1">
              {description}
            </div>
          )}
        </div>
        <div className={cn(
          "flex items-center justify-center h-10 w-10 rounded-full",
          colorClass
        )}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
