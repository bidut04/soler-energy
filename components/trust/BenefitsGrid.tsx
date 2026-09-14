import React from 'react';
import Image from 'next/image';
import { TRUST_BENEFITS } from '@/data/benefits';
import {
  Layers,
  Users,
  ShieldCheck,
  FileText,
  Wrench,
  Clock,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export const BenefitsGrid: React.FC = () => {
  const getIcon = (name: string, variant?: 'emerald' | 'blue') => {
    const isBlue = variant === 'blue';
    const iconClass = `w-4 h-4 ${isBlue ? 'text-sky-600' : 'text-emerald-600'}`;

    switch (name) {
      case 'Layers': return <Layers className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'FileText': return <FileText className={iconClass} />;
      case 'Wrench': return <Wrench className={iconClass} />;
      case 'Clock': return <Clock className={iconClass} />;
      case 'BarChart3': return <BarChart3 className={iconClass} />;
      default: return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
      {TRUST_BENEFITS.map((benefit) => {
        const isBlue = benefit.colorVariant === 'blue';

        return (
          <div
            key={benefit.id}
            className="p-4 rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-between gap-3 group relative overflow-hidden"
          >
            {/* Left Content Side */}
            <div className="flex-1 flex flex-col justify-between h-full min-h-[140px] space-y-2">
              <div className="space-y-2">
                {/* Icon Container */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  isBlue
                    ? 'bg-sky-50 border border-sky-200/80'
                    : 'bg-emerald-50 border border-emerald-200/80'
                }`}>
                  {getIcon(benefit.iconName, benefit.colorVariant)}
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {benefit.description}
                </p>
              </div>

              {/* Arrow */}
              <div className={`pt-1 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                isBlue ? 'text-sky-600' : 'text-emerald-600'
              }`}>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Right Image Side */}
            {benefit.imageUrl && (
              <div className="w-24 h-28 sm:w-28 sm:h-32 shrink-0 rounded-xl overflow-hidden relative shadow-xs border border-slate-100 bg-slate-100">
                <Image
                  src={benefit.imageUrl}
                  alt={benefit.title}
                  fill
                  unoptimized
                  sizes="120px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
