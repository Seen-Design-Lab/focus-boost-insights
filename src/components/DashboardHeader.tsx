
import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-6 animate-fade-in">
      <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider self-start">
        PRODUCTIVITY DASHBOARD
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Your Week in Review
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Track your productivity metrics, analyze your time usage, and get personalized AI insights to boost your efficiency.
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
