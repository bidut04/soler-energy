'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall, Calculator, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ScrollTextAnimation } from '@/components/ui/ScrollTextAnimation';

export const FinalCTA: React.FC = () => {
  return (
    <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Soft Ambient Green Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <ScrollTextAnimation animationType="fadeUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <Badge variant="emerald">
          READY TO LOWER YOUR ENERGY COSTS?
        </Badge>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto">
          Start Your Solar Transition With Certified EPC Engineers
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Get a comprehensive site assessment, 3D solar design modeling, and a customized financial ROI proposal for your commercial or residential property.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Calculate Solar Savings
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/quote"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-all duration-200 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-emerald-600" />
            Speak With an Engineer
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free On-Site Engineering Survey
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Zero Obligation Quotation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Bank &amp; Subsidies Assistance
          </span>
        </div>
      </ScrollTextAnimation>
    </section>
  );
};
