'use client';

import React from 'react';
import Image from 'next/image';
import { SolarSolution } from '@/types/solar';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';

interface SolutionDetailModalProps {
  solution: SolarSolution | null;
  onClose: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ solution, onClose }) => {
  const { openQuoteModal } = useQuoteModal();

  if (!solution) return null;

  return (
    <Modal
      isOpen={!!solution}
      onClose={onClose}
      title={solution.title}
      maxWidth="xl"
    >
      <div className="space-y-6 text-left">
        {/* Banner image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100">
          <Image
            src={solution.imageUrl}
            alt={solution.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
            Capacity Range: {solution.capacityRange}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            {solution.fullDescription}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Key Engineering Advantages
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {solution.keyBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200/60 text-xs">
          <span className="font-bold text-emerald-900 uppercase tracking-wider block mb-1">
            Ideal For:
          </span>
          <span className="text-slate-700">{solution.idealFor}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto flex-1"
            onClick={() => {
              onClose();
              openQuoteModal(solution.category);
            }}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request {solution.title} Quote
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
          >
            Close Window
          </Button>
        </div>
      </div>
    </Modal>
  );
};
