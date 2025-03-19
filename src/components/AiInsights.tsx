
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Lightbulb } from 'lucide-react';

const AiInsights: React.FC = () => {
  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
      <CardContent className="p-0">
        <div className="border-b">
          <div className="flex items-start gap-4 p-6">
            <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Weekly Summary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You completed 20 tasks, blocked 15 distractions, and saved 5 hours compared to last week. Your productivity score improved by 12 points, and you've been most efficient on Tuesday and Wednesday.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-4 p-6">
            <div className="bg-amber-100 text-amber-600 rounded-full p-2 mt-1">
              <Lightbulb className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Personalized Tip</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You're most productive in the morning—try scheduling your hardest tasks between 9am and 11am. We've noticed that you have fewer distractions during this time window, and your task completion rate is 35% higher compared to afternoon sessions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiInsights;
