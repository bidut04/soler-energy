import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { BenefitsGrid } from './BenefitsGrid';
import { CertificationsStrip } from './CertificationsStrip';
import { Leaf } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-emerald-50/40 via-white to-white border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <Leaf className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>SMARTER ENGINEERING • SUSTAINABLE TOMORROW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineering Solar With <span className="text-emerald-600">Confid</span><span className="text-sky-600">ence</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            From single-point EPC accountability to Tier-1 direct supply chains and guaranteed performance ratios, we make solar adoption seamless.
          </p>

          <div className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mx-auto pt-0.5" />
        </div>

        {/* 8 Horizontal Benefit Cards Grid (2 rows x 4 columns) */}
        <BenefitsGrid />

        {/* Certifications strip */}
        <div className="pt-4">
          <CertificationsStrip />
        </div>

      </div>
    </section>
  );
};
