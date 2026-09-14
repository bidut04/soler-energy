'use client';

import React from 'react';
import { Star, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Marquee from '@/components/ui/demo';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">
            CLIENT TESTIMONIALS
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
            Trusted by Industrial &amp; Business Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Read how our engineering quality and ongoing maintenance deliver measurable energy savings and operational peace of mind.
          </p>

          {/* Social Proof Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <strong className="text-slate-900">4.98 / 5.0</strong> Enterprise Rating
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <Zap className="w-4 h-4 text-emerald-600" />
              <strong className="text-slate-900">25+ MW</strong> Solar Installed
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <strong className="text-slate-900">25-Year</strong> Performance Warranty
            </span>
          </div>
        </div>

        {/* Dual Row Marquee Testimonials */}
        <div className="w-full pt-4">
          <Marquee />
        </div>
      </div>
    </section>
  );
};
