'use client';

import React from 'react';
import Image from 'next/image';
import { SolarSolution } from '@/types/solar';
import { Home, Building2, Factory, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface SolutionCardProps {
  solution: SolarSolution;
  onSelect: (solution: SolarSolution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onSelect }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
      default: return <Zap className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200/80 flex flex-col justify-between glass-panel-hover group bg-white">
      <div>
        {/* Visual Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={solution.imageUrl}
            alt={solution.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

          {/* Top Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="emerald" className="bg-white/90 backdrop-blur-sm text-emerald-900 font-bold">
              {solution.capacityRange}
            </Badge>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              {getIcon(solution.iconName)}
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              {solution.title}
            </h3>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {solution.shortDescription}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2 text-left">
        <button
          onClick={() => onSelect(solution)}
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
        >
          <span>Explore Solution</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
