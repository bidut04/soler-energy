'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, ArrowRight, Phone, Mail } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
  navLinks
}) => {
  const pathname = usePathname();

  const handleNavClick = () => {
    // Delay closing slightly so Next.js route navigation initiates smoothly on mobile
    setTimeout(() => {
      onClose();
    }, 120);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Link 
                  href="/" 
                  onClick={handleNavClick}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                    <Sun className="w-5 h-5 fill-white text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-slate-900">
                    Solar<span className="text-emerald-600">Next</span>
                  </span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 active:bg-emerald-100'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer CTAs */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full group inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md shadow-emerald-600/30 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 text-xs text-slate-500 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>+1 (800) 555-SOLAR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>info@solarnextenergy.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
