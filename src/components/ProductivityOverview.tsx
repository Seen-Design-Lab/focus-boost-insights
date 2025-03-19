
import React from 'react';
import MetricCard from './MetricCard';
import { Activity, CheckCircle, Clock, CheckSquare, BellOff, Timer } from 'lucide-react';

const ProductivityOverview: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          title="Productivity Score"
          value="85/100"
          icon={<Activity className="h-5 w-5" />}
          colorClass="bg-productivity-yellow/20 text-productivity-yellow"
          animationDelay="0.1s"
        />
        <MetricCard
          title="Objectives Completed"
          value="5/8"
          icon={<CheckCircle className="h-5 w-5" />}
          colorClass="bg-productivity-blue/20 text-productivity-blue"
          animationDelay="0.2s"
        />
        <MetricCard
          title="Total Hours Worked"
          value="25h 37m"
          icon={<Clock className="h-5 w-5" />}
          colorClass="bg-productivity-purple/20 text-productivity-purple"
          animationDelay="0.3s"
        />
        <MetricCard
          title="Tasks Completed"
          value="20/25"
          icon={<CheckSquare className="h-5 w-5" />}
          colorClass="bg-productivity-green/20 text-productivity-green"
          animationDelay="0.4s"
        />
        <MetricCard
          title="Distractions Blocked"
          value="15"
          icon={<BellOff className="h-5 w-5" />}
          colorClass="bg-productivity-red/20 text-productivity-red"
          animationDelay="0.5s"
        />
        <MetricCard
          title="Time Saved"
          value="5 hours"
          icon={<Timer className="h-5 w-5" />}
          colorClass="bg-gray-200 text-gray-700"
          animationDelay="0.6s"
        />
      </div>
    </div>
  );
};

export default ProductivityOverview;
