import React from 'react';
import { Metadata } from 'next';
import { QuoteForm } from '@/components/cta/QuoteForm';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Free Solar Quotation | SolarNext Energy Engineering',
  description: 'Get a free custom engineering proposal and site survey quotation for residential, commercial, industrial or utility solar power projects.'
};

export default function QuotePage() {
  return (
    <div className="pt-16 lg:pt-20 pb-10 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        <div className="text-center space-y-2">
          <Badge variant="emerald">FREE ENGINEERING PROPOSAL</Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request a Free Solar Quotation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Fill out your project details below. Our senior PV systems engineers will analyze your site coordinates and send a customized proposal within 2 hours.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-lg">
          <QuoteForm />
        </div>

        {/* Compact Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2 text-center text-xs text-slate-600">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 text-xs">+1 (800) 555-SOLAR</span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 text-xs">quotes@solarnextenergy.com</span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-900 text-xs">Zero Commitment Required</span>
          </div>
        </div>

      </div>
    </div>
  );
}
