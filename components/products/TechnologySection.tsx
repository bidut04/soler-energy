import React from 'react';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { ProductCategoryCard } from './ProductCategoryCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-5 lg:py-7 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="emerald">TIER-1 EQUIPMENT SUPPLY</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technology We Trust
            </h2>
            <p className="text-sm text-slate-600">
              We exclusively integrate BloombergNEF Tier-1 modules, high-efficiency inverters, and IEC-tested electrical balance-of-system hardware.
            </p>
          </div>

          <div>
            <Button
              variant="outline"
              size="md"
              href="/products"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Tech Specs
            </Button>
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <ProductCategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};
