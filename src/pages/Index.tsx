
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import ProductivityOverview from '@/components/ProductivityOverview';
import ProductivityHeatmap from '@/components/ProductivityHeatmap';
import TasksBreakdown from '@/components/TasksBreakdown';
import TimeDistribution from '@/components/TimeDistribution';
import DistractionSources from '@/components/DistractionSources';
import AiInsights from '@/components/AiInsights';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container py-8 md:py-12 mx-auto">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <DashboardHeader />
          
          <section>
            <ProductivityOverview />
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductivityHeatmap />
            <TasksBreakdown />
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimeDistribution />
            <DistractionSources />
          </section>
          
          <section>
            <AiInsights />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
