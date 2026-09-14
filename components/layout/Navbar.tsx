'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Menu, ArrowRight, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MobileDrawer } from './MobileDrawer';
import { useQuoteModal } from './QuoteModalContext';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Solar Calculator', href: '/calculator' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-md shadow-slate-900/5'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/30"
              >
                <Sun className="w-5 h-5 fill-white text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  Solar<span className="text-emerald-600">Next</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-none">
                  Energy Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Animated Pill Indicator */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-slate-700 hover:text-emerald-700'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-emerald-600 rounded-full shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                href="/calculator"
                className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
                icon={<Calculator className="w-3.5 h-3.5" />}
              >
                Estimate Savings
              </Button>
              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-full shadow-md shadow-emerald-600/20 transition-all duration-300 cursor-pointer active:scale-95 hover:scale-[1.02]"
              >
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => openQuoteModal()}
                className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 text-white text-xs font-extrabold rounded-full shadow-xs active:scale-95 transition-transform"
              >
                <span>Book Now</span>
              </button>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuote={() => openQuoteModal()}
        navLinks={NAV_LINKS}
      />
    </>
  );
};
