import React from 'react';
import { Metadata } from 'next';
import { TechnologySection } from '@/components/products/TechnologySection';
import { CertificationsStrip } from '@/components/trust/CertificationsStrip';
import { FinalCTA } from '@/components/cta/FinalCTA';

export const metadata: Metadata = {
  title: 'Technology & Component Supply | Tier-1 Panels, Inverters & Storage',
  description: 'Learn about our Tier-1 BloombergNEF rated solar PV modules, string and central inverters, LFP energy storage systems, and galvanized mounting hardware.'
};

export default function ProductsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <TechnologySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CertificationsStrip />
      </div>

      <FinalCTA />
    </div>
  );
}
