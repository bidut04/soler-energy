import React from 'react';
import { Metadata } from 'next';
import { SolarCalculatorCTA } from '@/components/calculator/SolarCalculatorCTA';
import { HowItWorksSection } from '@/components/process/HowItWorksSection';
import { FinalCTA } from '@/components/cta/FinalCTA';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator | Estimate Array Sizing & Payback Period',
  description: 'Use our free interactive solar calculator to estimate required panel array capacity, annual financial power savings, and investment payback period.'
};

export default function CalculatorPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <SolarCalculatorCTA />
      <HowItWorksSection />
      <FinalCTA />
    </div>
  );
}
