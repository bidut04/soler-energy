import React from 'react';
import { COMPANY_HERO_STATS } from '@/data/testimonials';
import { Award, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const HeroTrustStrip: React.FC = () => {
  const icons = [
    <Award key="award" className="w-5 h-5 text-emerald-600" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-emerald-600" />,
    <Zap key="zap" className="w-5 h-5 text-emerald-600" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {COMPANY_HERO_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 ${
                idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0">
                {icons[idx]}
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
