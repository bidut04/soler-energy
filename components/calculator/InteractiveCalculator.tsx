'use client';

import React, { useState, useMemo } from 'react';
import { SolutionCategory, CalculatorInput, CalculatorResult } from '@/types/solar';
import { CalculatorResultCard } from './CalculatorResultCard';
import { Calculator, Home, Building2, Factory, Zap } from 'lucide-react';

export const InteractiveCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInput>({
    propertyType: 'commercial',
    monthlyBill: 1200,
    roofAreaSqFt: 3500,
    sunlightHours: 5,
    locationState: 'California'
  });

  const propertyOptions: { id: SolutionCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'residential', label: 'Home / Villa', icon: <Home className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial Office', icon: <Building2 className="w-4 h-4" /> },
    { id: 'industrial', label: 'Factory / Industrial', icon: <Factory className="w-4 h-4" /> },
    { id: 'utility', label: 'Solar Farm / Land', icon: <Zap className="w-4 h-4" /> }
  ];

  const results: CalculatorResult = useMemo(() => {
    const { monthlyBill, propertyType } = inputs;
    
    const monthlyKwh = monthlyBill / 0.16;
    const dailyKwh = monthlyKwh / 30;
    
    let capacityKw = Math.round((dailyKwh / 4.2) * 10) / 10;
    if (capacityKw < 3) capacityKw = 3;

    if (propertyType === 'industrial' && capacityKw < 50) capacityKw = 50;
    if (propertyType === 'utility' && capacityKw < 500) capacityKw = 500;

    const panelsCount = Math.ceil((capacityKw * 1000) / 550);
    const annualSavings = Math.round(monthlyBill * 12 * 0.85);
    const co2Avoided = Math.round((capacityKw * 1.35) * 10) / 10;
    const payback = propertyType === 'industrial' || propertyType === 'utility' ? 3.4 : 4.2;

    const minInvestment = Math.round(capacityKw * 850);
    const maxInvestment = Math.round(capacityKw * 1100);

    const investmentRangeStr = `$${(minInvestment).toLocaleString('en-US')} - $${(maxInvestment).toLocaleString('en-US')}`;

    return {
      recommendedCapacityKw: capacityKw,
      estimatedPanelsCount: panelsCount,
      estimatedAnnualSavings: annualSavings,
      estimatedCO2AvoidedTons: co2Avoided,
      estimatedInvestmentRange: investmentRangeStr,
      paybackPeriodYears: payback
    };
  }, [inputs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
      {/* Input controls */}
      <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-lg space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">System Estimator Inputs</h3>
            <p className="text-xs text-slate-500">Adjust sliders to calculate custom ROI</p>
          </div>
        </div>

        {/* Property Type Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            1. Select Property Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {propertyOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setInputs(prev => ({ ...prev, propertyType: opt.id }))}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  inputs.propertyType === opt.id
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-500 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-400'
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Bill Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 uppercase tracking-wider">
              2. Average Monthly Power Bill
            </span>
            <span className="text-base font-extrabold text-emerald-600">
              ${inputs.monthlyBill.toLocaleString('en-US')} / mo
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="15000"
            step="100"
            value={inputs.monthlyBill}
            onChange={(e) => setInputs(prev => ({ ...prev, monthlyBill: Number(e.target.value) }))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>$100</span>
            <span>$5,000</span>
            <span>$15,000+</span>
          </div>
        </div>

        {/* Roof Area Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 uppercase tracking-wider">
              3. Available Roof / Land Area
            </span>
            <span className="text-base font-extrabold text-slate-900">
              {inputs.roofAreaSqFt.toLocaleString('en-US')} sq ft
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="50000"
            step="500"
            value={inputs.roofAreaSqFt}
            onChange={(e) => setInputs(prev => ({ ...prev, roofAreaSqFt: Number(e.target.value) }))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>500 sq ft</span>
            <span>25,000 sq ft</span>
            <span>50,000+ sq ft</span>
          </div>
        </div>
      </div>

      {/* Output results card */}
      <div className="lg:col-span-6">
        <CalculatorResultCard result={results} />
      </div>
    </div>
  );
};
