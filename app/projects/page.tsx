import React from 'react';
import { Metadata } from 'next';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { EnvironmentalImpact } from '@/components/about/EnvironmentalImpact';
import { FinalCTA } from '@/components/cta/FinalCTA';

export const metadata: Metadata = {
  title: 'Solar Projects Portfolio | Utility, Commercial & Industrial Case Studies',
  description: 'Browse SolarNext completed solar projects across utility solar farms, textile park rooftops, tech park carports, and microgrid residential estates.'
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <ProjectsSection />
      <EnvironmentalImpact />
      <FinalCTA />
    </div>
  );
}
