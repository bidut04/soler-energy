'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/process';
import { 
  MessageSquare, 
  Compass, 
  Layers, 
  FileCheck, 
  Wrench, 
  Zap, 
  Activity,
  Check
} from 'lucide-react';

const STEP_ICONS = [
  MessageSquare,
  Compass,
  Layers,
  FileCheck,
  Wrench,
  Zap,
  Activity
];

export const SnakeProcessFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 35%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const stepIndex = Math.min(
        PROCESS_STEPS.length - 1,
        Math.floor(latest * (PROCESS_STEPS.length + 0.2))
      );
      setActiveIndex(stepIndex);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const topRow = PROCESS_STEPS.slice(0, 3);
  const bottomRow = PROCESS_STEPS.slice(3, 7);

  return (
    <div ref={containerRef} className="relative w-full py-4 overflow-hidden">

      {/* DESKTOP & TABLET SINGLE-PATH CONTINUOUS SNAKE TIMELINE */}
      <div className="hidden lg:block relative max-w-6xl mx-auto px-4 min-h-[460px]">

        {/* SINGLE CONTINUOUS SVG SNAKE PATH */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 1000 460"
          preserveAspectRatio="none"
        >
          {/* Background Track Path */}
          <path
            d="M 150 70 L 850 70 C 960 70, 960 330, 850 330 L 150 330"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Active Animated Green Progress Line */}
          <motion.path
            d="M 150 70 L 850 70 C 960 70, 960 330, 850 330 L 150 330"
            fill="none"
            stroke="#10B981"
            strokeWidth="5"
            strokeLinecap="round"
            style={{
              pathLength: smoothProgress,
              filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.6))'
            }}
          />
        </svg>

        {/* TOP ROW: Steps 01, 02, 03 */}
        <div className="relative z-10 flex justify-between items-start px-24 pt-2">
          {topRow.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isCompleted = activeIndex >= index;
            const isCurrent = activeIndex === index;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center text-center cursor-pointer group w-52"
              >
                {/* Compact Node Circle */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: isCurrent ? 1.15 : 1,
                      backgroundColor: isCompleted ? '#10B981' : '#FFFFFF',
                      borderColor: isCompleted ? '#34D399' : '#CBD5E1',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-full border-3 flex items-center justify-center shadow-md transition-colors ${
                      isCompleted
                        ? 'text-white shadow-emerald-500/30'
                        : 'text-slate-400 group-hover:border-emerald-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    )}
                  </motion.div>

                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-extrabold flex items-center justify-center border border-white shadow-xs ${
                      isCompleted ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3 h-3 text-[#10B981]" /> : step.stepNumber}
                  </div>
                </div>

                {/* Compact Title & Short Description */}
                <h4
                  className={`text-xs font-extrabold mt-3 transition-colors ${
                    isCompleted ? 'text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug max-w-[155px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ROW: Steps 04, 05, 06, 07 */}
        <div className="relative z-10 flex justify-between items-start px-16 pt-32">
          {bottomRow.map((step, idx) => {
            const index = 3 + idx;
            const Icon = STEP_ICONS[index];
            const isCompleted = activeIndex >= index;
            const isCurrent = activeIndex === index;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center text-center cursor-pointer group w-48"
              >
                {/* Compact Node Circle */}
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: isCurrent ? 1.15 : 1,
                      backgroundColor: isCompleted ? '#10B981' : '#FFFFFF',
                      borderColor: isCompleted ? '#34D399' : '#CBD5E1',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-full border-3 flex items-center justify-center shadow-md transition-colors ${
                      isCompleted
                        ? 'text-white shadow-emerald-500/30'
                        : 'text-slate-400 group-hover:border-emerald-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    )}
                  </motion.div>

                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-extrabold flex items-center justify-center border border-white shadow-xs ${
                      isCompleted ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3 h-3 text-[#10B981]" /> : step.stepNumber}
                  </div>
                </div>

                {/* Compact Title & Short Description */}
                <h4
                  className={`text-xs font-extrabold mt-3 transition-colors ${
                    isCompleted ? 'text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug max-w-[155px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* MOBILE RESPONSIVE STEP FLOW */}
      <div className="block lg:hidden space-y-4 max-w-sm mx-auto px-4 relative">
        <div className="absolute top-4 bottom-4 left-8 w-1 bg-slate-200 -z-10 rounded-full">
          <motion.div
            className="w-full bg-[#10B981] rounded-full"
            style={{ height: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
          />
        </div>

        {PROCESS_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index];
          const isCompleted = activeIndex >= index;

          return (
            <div
              key={step.stepNumber}
              onClick={() => setActiveIndex(index)}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                  : 'bg-white border-slate-200 opacity-80'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 font-bold ${
                  isCompleted
                    ? 'bg-[#10B981] border-emerald-400 text-white shadow-xs'
                    : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600">
                    {step.stepNumber}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
