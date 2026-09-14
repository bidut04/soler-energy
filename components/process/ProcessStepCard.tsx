import React from 'react';
import { ProcessStep } from '@/types/solar';

interface ProcessStepCardProps {
  step: ProcessStep;
  isLast?: boolean;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, isLast = false }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-xs text-left group">
      {/* Number Badge */}
      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 font-extrabold text-lg shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
        {step.stepNumber}
      </div>

      {/* Content */}
      <div className="space-y-1.5 flex-1">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {step.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {step.description}
        </p>
        <p className="text-[11px] text-emerald-700 font-medium italic pt-1">
          💡 {step.detail}
        </p>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute -bottom-3 left-6 w-0.5 h-6 bg-emerald-200 z-10" />
      )}
    </div>
  );
};
