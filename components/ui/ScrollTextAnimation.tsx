'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTextAnimationProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  animationType?: 'fadeUp' | 'splitWords' | 'slideLeft' | 'zoomIn';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export const ScrollTextAnimation: React.FC<ScrollTextAnimationProps> = ({
  children,
  className = '',
  as: Component = 'div',
  animationType = 'fadeUp',
  delay = 0,
  duration = 1,
  stagger = 0.08
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (animationType === 'splitWords' && typeof children === 'string') {
        const words = children.split(' ');
        el.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="gsap-word inline-block">${word}&nbsp;</span></span>`
          )
          .join('');

        const targetWords = el.querySelectorAll('.gsap-word');

        gsap.fromTo(
          targetWords,
          {
            y: '100%',
            opacity: 0,
            rotateX: -15
          },
          {
            y: '0%',
            opacity: 1,
            rotateX: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      } else if (animationType === 'slideLeft') {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      } else if (animationType === 'zoomIn') {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      } else {
        // Default fadeUp
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animationType, delay, duration, stagger, children]);

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
};
