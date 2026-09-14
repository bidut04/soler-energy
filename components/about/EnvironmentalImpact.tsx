import React from 'react';
import { ENVIRONMENTAL_IMPACT_STATS } from '@/data/testimonials';
import { Zap, Globe, Leaf } from 'lucide-react';

export const EnvironmentalImpact: React.FC = () => {
  const icons = [
    <Zap key="zap" className="w-6 h-6 text-emerald-600" />,
    <Globe key="globe" className="w-6 h-6 text-emerald-600" />,
    <Leaf key="leaf" className="w-6 h-6 text-emerald-600" />
  ];

  return (
    <div className="w-full bg-emerald-900 border-y border-emerald-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
            SUSTAINABILITY MEASURED
          </span>
          <h3 className="text-2xl font-bold text-white">Our Environmental Impact</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENVIRONMENTAL_IMPACT_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-emerald-700/60 bg-emerald-950/60 text-center space-y-3 shadow-xl transition-all duration-300 hover:border-emerald-400/50"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center mx-auto">
                {icons[i]}
              </div>
              <div className="text-3xl font-extrabold text-emerald-300 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <p className="text-xs text-emerald-100/80">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
