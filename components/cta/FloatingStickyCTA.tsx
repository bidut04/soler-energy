'use client';

import React, { useState, useEffect } from 'react';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';
import { Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingStickyCTA: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
      {/* Floating Bottom Sticky 'Book Now' Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-1 group"
          >
            <img
              src="/right-arrow.gif"
              alt="Arrow pointing to Book Now button"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 filter brightness-0 opacity-85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform group-hover:translate-x-1.5 group-hover:scale-110"
            />
            <button
              onClick={() => openQuoteModal('commercial')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-full shadow-2xl shadow-emerald-950/40 border border-white/30 backdrop-blur-md transition-all duration-300 active:scale-95 hover:scale-105 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping shrink-0" />
              <span className="tracking-wide">Book Now</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
