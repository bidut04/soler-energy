'use client';

import React from 'react';
import { CalculatorResult } from '@/types/solar';
import { Button } from '@/components/ui/Button';
import { Zap, DollarSign, Leaf, Clock, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';

interface CalculatorResultCardProps {
  result: CalculatorResult;
}

export const CalculatorResultCard: React.FC<CalculatorResultCardProps> = ({ result }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-6 text-left shadow-lg">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">
            ESTIMATED SYSTEM RECOMMENDATION
          </span>
          <h4 className="text-2xl font-bold text-slate-900">
            {result.recommendedCapacityKw} kW Solar Array
          </h4>
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">
          ~{result.estimatedPanelsCount} Tier-1 Panels
        </span>
      </div>

      {/* Grid of key results */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span>Annual Savings</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-700">
            ${result.estimatedAnnualSavings.toLocaleString('en-US')}
          </div>
          <span className="text-[10px] text-slate-500 block">Estimated 25-yr total: ${(result.estimatedAnnualSavings * 25).toLocaleString('en-US')}</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Estimated Payback</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">
            {result.paybackPeriodYears} Years
          </div>
          <span className="text-[10px] text-slate-500 block">Accelerated depreciation eligible</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>CO₂ Avoided / Year</span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {result.estimatedCO2AvoidedTons} Tons
          </div>
          <span className="text-[10px] text-slate-500 block">Equivalent to ~{Math.round(result.estimatedCO2AvoidedTons * 45)} trees</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Est. Turnkey Budget</span>
          </div>
          <div className="text-lg font-bold text-slate-900">
            {result.estimatedInvestmentRange}
          </div>
          <span className="text-[10px] text-slate-500 block">Before local government tax credits</span>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={() => openQuoteModal()}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Request Official Proposal for this {result.recommendedCapacityKw} kW System
        </Button>
      </div>
    </div>
  );
};
