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
    <div className="pt-24 lg:pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4">
          <Badge variant="emerald">FREE ENGINEERING PROPOSAL</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Request a Free Solar Quotation
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Fill out your project details below. Our senior PV systems engineers will analyze your site coordinates and send a customized proposal within 2 hours.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-xl">
          <QuoteForm />
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-center text-xs text-slate-600">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-900">+1 (800) 555-SOLAR</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-900">quotes@solarnextenergy.com</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-900">Zero Commitment Required</span>
          </div>
        </div>

      </div>
    </div>
  );
}
