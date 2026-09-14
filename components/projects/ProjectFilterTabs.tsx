'use client';

import React from 'react';
import { SolutionCategory } from '@/types/solar';

interface ProjectFilterTabsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectFilterTabs: React.FC<ProjectFilterTabsProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'utility', label: 'Solar Power Plants' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 shadow-xs'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
