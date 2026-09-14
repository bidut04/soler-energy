import React from 'react';
import { Testimonial } from '@/types/solar';
import { Star, MapPin, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 bg-white space-y-4 flex flex-col justify-between text-left glass-panel-hover shadow-xs relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="space-y-3">
        {/* Rating stars & Impact pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {testimonial.impactMetric && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-800 border border-emerald-200/80">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              {testimonial.impactMetric} {testimonial.impactLabel}
            </span>
          )}
        </div>

        {/* Quote text */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {testimonial.avatarUrl ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.clientName}
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500/20"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
              {testimonial.clientName.charAt(0)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">{testimonial.clientName}</h4>
              {testimonial.verified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              )}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              {testimonial.role} · {testimonial.company}
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block px-2 py-0.5 bg-slate-100 text-[10px] font-medium text-slate-600 rounded">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
};
