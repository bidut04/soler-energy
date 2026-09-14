import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image visual left */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <Image
                src="/about-solar-team.jpg"
                alt="Solar Engineering Team Inspecting Substation"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-4 left-4 p-4 rounded-xl border border-slate-200 bg-white/95 shadow-xl max-w-xs text-left backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">ISO 9001:2015 EPC</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Certified quality assurance, rigorous safety protocols, and zero-compromise engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Content right */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <Badge variant="emerald">ABOUT THE COMPANY</Badge>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Building Reliable Energy for the Future
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              SolarNext Energy Engineering is a leading renewable energy contractor specializing in turnkey solar power plant construction, high-capacity commercial rooftops, and intelligent energy storage systems.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Turnkey EPC Leadership</h4>
                  <p className="text-xs text-slate-600">Single-point responsibility from preliminary irradiance analysis to grid synchronization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Tier-1 Equipment Guarantee</h4>
                  <p className="text-xs text-slate-600">We partner exclusively with BloombergNEF Tier-1 module makers and top global inverter manufacturers.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                href="/about"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
