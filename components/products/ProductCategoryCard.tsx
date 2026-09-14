import React from 'react';
import Image from 'next/image';
import { ProductCategory } from '@/types/solar';
import { Sun, Cpu, Battery, Layers, BarChart3, Zap } from 'lucide-react';

interface ProductCategoryCardProps {
  category: ProductCategory;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun': return <Sun className="w-4 h-4 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Battery': return <Battery className="w-4 h-4 text-emerald-600" />;
      case 'Layers': return <Layers className="w-4 h-4 text-emerald-600" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-emerald-600" />;
      case 'Zap':
      default: return <Zap className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between glass-panel-hover text-left group shadow-xs">
      <div>
        {/* Top Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={category.imageUrl}
            alt={category.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0">
              {getIcon(category.iconName)}
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              {category.title}
            </h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {category.description}
          </p>

          {/* Key specs */}
          <div className="pt-2 space-y-1.5 border-t border-slate-100">
            {category.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">{spec.label}</span>
                <span className="font-semibold text-emerald-700">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands footer */}
      <div className="px-5 pb-5 pt-2 border-t border-slate-100 text-[10px] text-slate-500">
        <span className="font-semibold text-slate-700">Tier-1 Brands: </span>
        <span>{category.keyBrands.join(', ')}</span>
      </div>
    </div>
  );
};
