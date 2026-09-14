'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types/solar';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between glass-panel-hover text-left group shadow-xs">
      <div>
        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

          <div className="absolute top-3 left-3">
            <Badge variant="emerald" className="bg-white/90 backdrop-blur-sm text-emerald-900 font-bold">
              {project.category.toUpperCase()}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-700/80">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              {project.capacity}
            </span>
            <span className="text-[10px] font-semibold text-slate-500">
              Completed {project.completionYear}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {project.name}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2 space-y-1">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100">
        <button
          onClick={() => openQuoteModal(project.category)}
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
        >
          <span>Request Similar Engineering Setup</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
