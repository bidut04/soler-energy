import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { InteractiveCalculator } from './InteractiveCalculator';

export const SolarCalculatorCTA: React.FC = () => {
  return (
    <section id="calculator" className="py-5 lg:py-7 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">FINANCIAL ESTIMATOR</Badge>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            How Much Can Solar Save You?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tell us about your electricity usage and we’ll help you estimate the right solar array capacity, annual financial savings, and payback period.
          </p>
        </div>

        {/* Interactive Widget */}
        <InteractiveCalculator />

      </div>
    </section>
  );
};
