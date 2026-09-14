import React from 'react';
import { Metadata } from 'next';
import { WhatWeDo } from '@/components/solutions/WhatWeDo';
import { SolarPlantSection } from '@/components/solar-plant/SolarPlantSection';
import { FinalCTA } from '@/components/cta/FinalCTA';

export const metadata: Metadata = {
  title: 'Solar Solutions | Residential, Commercial, Industrial & Utility Farms',
  description: 'Explore SolarNext energy solutions tailored for homeowners, commercial buildings, manufacturing factories, and utility ground-mounted solar farms.'
};

export default function SolutionsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <WhatWeDo />
      <SolarPlantSection />
      <FinalCTA />
    </div>
  );
}
