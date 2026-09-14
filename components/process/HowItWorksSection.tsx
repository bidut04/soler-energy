'use client';

import React from 'react';
import { SnakeProcessFlow } from './SnakeProcessFlow';
import { Badge } from '@/components/ui/Badge';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <Badge variant="emerald">SIMPLE 7-STEP JOURNEY</Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From your first inquiry to active clean energy generation and 24/7 telemetry monitoring—made simple and transparent.
          </p>
        </div>

        {/* Horizontal Snake Timeline Process Flow */}
        <SnakeProcessFlow />

      </div>
    </section>
  );
};
