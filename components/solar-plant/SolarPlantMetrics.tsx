import React from 'react';
import Image from 'next/image';
import { SOLAR_PLANT_FEATURED_METRICS } from '@/data/solarPlantLifecycle';
import { Zap, ShieldCheck, Leaf, Globe } from 'lucide-react';

export const SolarPlantMetrics: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
      {/* High Quality Solar Plant Visual */}
      <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/hero-solar-farm.jpg"
          alt="50 MW Utility Scale Solar Power Plant Engineering"
          fill
          priority
          unoptimized
          sizes="(max-width: 1200px) 100vw, 80vw"
          className="object-cover group-hover:scale-102 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Floating Specs Card */}
      <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl border border-white/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest block">
              FLAGSHIP UTILITY PROJECT
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              {SOLAR_PLANT_FEATURED_METRICS.location}
            </h3>
          </div>
          <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-full text-xs font-bold">
            Operational Grid Connection
          </span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>PROJECT CAPACITY</span>
            </div>
            <div className="text-xl font-extrabold text-slate-900">
              {SOLAR_PLANT_FEATURED_METRICS.capacity}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>ANNUAL GENERATION</span>
            </div>
            <div className="text-xl font-extrabold text-emerald-700">
              {SOLAR_PLANT_FEATURED_METRICS.annualGeneration}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>CO₂ REDUCTION</span>
            </div>
            <div className="text-xl font-extrabold text-emerald-700">
              {SOLAR_PLANT_FEATURED_METRICS.co2Reduction}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>HOMES POWERED</span>
            </div>
            <div className="text-xl font-extrabold text-slate-900">
              {SOLAR_PLANT_FEATURED_METRICS.homesPowered}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
