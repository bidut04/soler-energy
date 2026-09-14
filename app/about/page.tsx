import React from 'react';
import { Metadata } from 'next';
import { AboutSection } from '@/components/about/AboutSection';
import { WhyChooseUs } from '@/components/trust/WhyChooseUs';
import { EnvironmentalImpact } from '@/components/about/EnvironmentalImpact';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { FinalCTA } from '@/components/cta/FinalCTA';

export const metadata: Metadata = {
  title: 'About SolarNext Energy | Certified Solar Engineering Contractors',
  description: 'SolarNext is an ISO 9001 certified renewable energy contractor delivering turnkey solar power plant engineering, procurement, and construction.'
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <AboutSection />
      <WhyChooseUs />
      <EnvironmentalImpact />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
