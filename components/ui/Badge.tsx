import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  className = ''
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    amber: 'bg-emerald-100/70 text-emerald-900 border-emerald-300',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-white text-emerald-700 border-emerald-600/40'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-xs ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
