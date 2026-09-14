'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SolarPlantMetrics } from './SolarPlantMetrics';
import { SolarPlantLifecycle } from './SolarPlantLifecycle';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';
import { ArrowRight } from 'lucide-react';

export const SolarPlantSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-8 lg:py-12 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">UTILITY SCALE EPC</Badge>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            From Land to Energy: Full Plant Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We provide end-to-end engineering, procurement, construction, and SCADA operation for megawatt-scale ground-mounted and industrial solar farms.
          </p>
        </div>

        {/* Plant Visual Overlay */}
        <SolarPlantMetrics />

        {/* Lifecycle Steps Grid */}
        <div className="space-y-8">
          <div className="text-left border-l-2 border-emerald-600 pl-4">
            <h3 className="text-xl font-bold text-slate-900">
              6-Stage Solar Power Plant EPC Execution
            </h3>
            <p className="text-xs text-slate-500">
              Rigorous engineering standards ensuring peak PR performance ratio from day one.
            </p>
          </div>

          <SolarPlantLifecycle />
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl glass-panel border border-emerald-200 bg-emerald-50/40 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900">
            Planning a Large-Scale or Industrial Solar Farm?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Consult with our chief solar power plant engineers for site feasibility, land irradiance modeling, and grid connection feasibility studies.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openQuoteModal('utility')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Plant Engineering Assessment
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
