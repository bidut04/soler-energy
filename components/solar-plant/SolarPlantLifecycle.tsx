import React from 'react';
import { SOLAR_PLANT_LIFECYCLE } from '@/data/solarPlantLifecycle';
import { CheckCircle2 } from 'lucide-react';

export const SolarPlantLifecycle: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      {SOLAR_PLANT_LIFECYCLE.map((stage) => (
        <div
          key={stage.step}
          className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white space-y-4 glass-panel-hover flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                {stage.step}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200 uppercase tracking-wider">
                Phase {stage.step}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              {stage.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {stage.shortDesc}
            </p>
          </div>

          {/* Deliverables list */}
          <div className="pt-4 border-t border-slate-100 space-y-1.5">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest block">
              Core Deliverables:
            </span>
            {stage.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
