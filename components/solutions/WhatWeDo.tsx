'use client';

import React, { useState } from 'react';
import { SOLAR_SOLUTIONS } from '@/data/solutions';
import { SolarSolution } from '@/types/solar';
import { SolutionCard } from './SolutionCard';
import { SolutionDetailModal } from './SolutionDetailModal';
import { Badge } from '@/components/ui/Badge';

export const WhatWeDo: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<SolarSolution | null>(null);

  return (
    <section id="solutions" className="py-7 lg:py-10 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="emerald">OUR ENGINEERING CAPABILITIES</Badge>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tailored solar energy systems designed, built, and maintained to meet precise residential, commercial, industrial, and utility scale demands.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLAR_SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onSelect={(sol) => setSelectedSolution(sol)}
            />
          ))}
        </div>
      </div>

      {/* Modal detail */}
      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </section>
  );
};
