'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for fluid cursor physics
  const cursorX = useSpring(0, { damping: 28, stiffness: 400 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 400 });

  const ringX = useSpring(0, { damping: 20, stiffness: 200 });
  const ringY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    // Only enable on desktop pointer fine devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer')
        );
        setIsHovered(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden lg:block">
      {/* Outer Spring Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-emerald-400/60 bg-emerald-500/10 backdrop-blur-[0.5px] shadow-[0_0_12px_rgba(16,185,129,0.25)] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 38 : 26,
          height: isHovered ? 38 : 26,
          borderColor: isHovered ? 'rgba(52, 211, 153, 0.9)' : 'rgba(16, 185, 129, 0.5)',
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.08)',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-emerald-500 pointer-events-none shadow-[0_0_8px_rgba(52,211,153,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? '#34d399' : '#10b981',
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
