'use client';

import React, { useState } from 'react';
import { SolutionCategory, QuoteFormData } from '@/types/solar';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface QuoteFormProps {
  initialProjectType?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProjectType = 'commercial',
  onSuccess
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: (initialProjectType as SolutionCategory) || 'commercial',
    propertyAddress: '',
    estimatedMonthlyBill: '500-1500',
    timeline: '1-3-months',
    additionalDetails: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-4 space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900">Quotation Request Received!</h4>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <span className="text-emerald-700 font-semibold">{formData.fullName}</span>. One of our senior solar engineers will evaluate your location and reach out within 2 business hours with a preliminary proposal.
        </p>
        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-left text-xs space-y-1.5 text-slate-700">
          <p><strong className="text-slate-900">Project Type:</strong> {formData.projectType.toUpperCase()}</p>
          <p><strong className="text-slate-900">Contact Phone:</strong> {formData.phone}</p>
          <p><strong className="text-slate-900">Address:</strong> {formData.propertyAddress}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Robert Vance"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+1 (555) 019-2834"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="robert@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Category *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          >
            <option value="residential">Residential Solar (Home)</option>
            <option value="commercial">Commercial Solar (Office/Business)</option>
            <option value="industrial">Industrial Solar (Factory/Plant)</option>
            <option value="utility">Utility Power Plant (Megawatt Scale)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Property Address / Project Location *
        </label>
        <input
          type="text"
          name="propertyAddress"
          required
          placeholder="Street Address, City, State/Province"
          value={formData.propertyAddress}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Estimated Monthly Power Bill
          </label>
          <select
            name="estimatedMonthlyBill"
            value={formData.estimatedMonthlyBill}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          >
            <option value="under-300">Under $300 / mo</option>
            <option value="300-1000">$300 - $1,000 / mo</option>
            <option value="1000-5000">$1,000 - $5,000 / mo</option>
            <option value="5000-plus">$5,000+ / mo (Industrial)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Implementation Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
          >
            <option value="immediate">Immediate (Ready to install)</option>
            <option value="1-3-months">Within 1 to 3 months</option>
            <option value="3-6-months">3 to 6 months</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Additional Project Notes (Optional)
        </label>
        <textarea
          name="additionalDetails"
          rows={3}
          placeholder="Roof type (Tin/Concrete/Tile), available land area, specific battery backup needs..."
          value={formData.additionalDetails}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full mt-2"
        icon={<ArrowRight className="w-4 h-4" />}
      >
        {isSubmitting ? 'Processing Quote Request...' : 'Submit Engineering Quote Request'}
      </Button>

      <p className="text-[11px] text-center text-slate-500 mt-2">
        🔒 100% Privacy guaranteed. Zero spam. We protect your project details.
      </p>
    </form>
  );
};
