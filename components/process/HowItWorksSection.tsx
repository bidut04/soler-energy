'use client';

import React from 'react';
import { IsometricProcessFlow } from './IsometricProcessFlow';
import { Badge } from '@/components/ui/Badge';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="pt-8 pb-4 lg:pt-12 lg:pb-6 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Section Header matching Reference Template */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <Badge variant="emerald">TURNKEY EPC WORKFLOW</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            New Project Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From preliminary energy assessment to drone site surveys, engineering blueprints, rapid installation, and 24/7 telemetry.
          </p>
        </div>

        {/* 3D Isometric Rhombus Process Flow */}
        <IsometricProcessFlow />

      </div>
    </section>
  );
};

