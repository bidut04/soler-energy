'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilterTabs } from './ProjectFilterTabs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { ScrollTextAnimation } from '@/components/ui/ScrollTextAnimation';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-5 lg:py-7 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header with GSAP ScrollTrigger */}
        <ScrollTextAnimation animationType="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">PORTFOLIO EXCELLENCE</Badge>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Projects That Power Progress
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore a selection of our utility-scale solar farms, industrial rooftop plants, and high-reliability commercial energy systems.
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-4">
            <ProjectFilterTabs
              activeCategory={activeCategory}
              onSelectCategory={(cat) => setActiveCategory(cat)}
            />
          </div>
        </ScrollTextAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View full portfolio CTA */}
        <div className="text-center pt-3">
          <Button
            variant="outline"
            size="lg"
            href="/projects"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Full Project Portfolio
          </Button>
        </div>

      </div>
    </section>
  );
};
