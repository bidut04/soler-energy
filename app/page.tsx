import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { HeroTrustStrip } from '@/components/hero/HeroTrustStrip';
import { WhatWeDo } from '@/components/solutions/WhatWeDo';
//import { SolarPlantSection } from '@/components / solar - plant / SolarPlantSection';
import { TechnologySection } from '@/components/products/TechnologySection';
import { WhyChooseUs } from '@/components/trust/WhyChooseUs';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
//import { HowItWorksSection } from '@/components / process / HowItWorksSection';
import { SolarCalculatorCTA } from '@/components/calculator/SolarCalculatorCTA';
import { AboutSection } from '@/components/about/AboutSection';
//import { EnvironmentalImpact } from '@/components / about / EnvironmentalImpact';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
//import { FinalCTA } from '@/components / cta / FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do */}
      <WhatWeDo />

      {/* 4. Solar Power Plant EPC */}
      {/* <SolarPlantSection /> */}

      {/* 5. Technology & Products */}
      <TechnologySection />

      {/* 6. Why Choose Us & Certifications */}
      <WhyChooseUs />

      {/* 7. Featured Projects */}
      <ProjectsSection />

      {/* 8. Process Flow */}
      {/* <HowItWorksSection /> */}

      {/* 9. Solar Calculator */}
      <SolarCalculatorCTA />

      {/* 10. About Corporate */}
      <AboutSection />

      {/* 11. Environmental Impact Stats */}
      {/* <EnvironmentalImpact /> */}

      {/* 12. Testimonials Marquee */}
      <TestimonialsSection />

      {/* 13. Final CTA Banner */}
      {/* <FinalCTA /> */}
    </div>
  );
}
