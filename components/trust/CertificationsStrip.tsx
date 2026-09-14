import React from 'react';
import { CERTIFICATIONS } from '@/data/testimonials';
import { ShieldCheck } from 'lucide-react';

export const CertificationsStrip: React.FC = () => {
  return (
    <div className="pt-12 border-t border-slate-200">
      <div className="text-center space-y-2 mb-8">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
          Certifications &amp; Global Standards
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left space-y-2"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-slate-900">{cert.name}</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-tight">{cert.description}</p>
            <span className="inline-block px-2 py-0.5 bg-emerald-50 text-[10px] text-emerald-800 rounded font-semibold border border-emerald-200/80">
              {cert.badgeText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
