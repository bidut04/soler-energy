'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  MessageSquare,
  Layers,
  CheckCircle2,
  Settings,
} from 'lucide-react';

export interface IsometricStep {
  stepNumber: string;
  title: string;
  badgeTitle: string;
  description: string;
  detail?: string;
  icon: React.ElementType;
  colors: {
    number: string;        // Tailwind text color for floating slanted number
    title: string;         // Tailwind text color for uppercase title
    glow: string;          // CSS glow color
    gradientFrom: string;  // glow gradient start
    gradientTo: string;    // glow gradient end
    bgLight: string;
    iconColor: string;
  };
}

export const ISOMETRIC_STEPS: IsometricStep[] = [
  {
    stepNumber: '01',
    badgeTitle: 'CONCEPT',
    title: 'Requirement & Concept',
    description:
      'Share your property specifications, electricity bill history, and sustainability goals for initial analysis.',
    detail: 'Instant initial consultation & energy sizing within 2 hours.',
    icon: Target,
    colors: {
      number: 'text-cyan-500',
      title: 'text-cyan-600',
      glow: 'rgba(6, 182, 212, 0.35)',
      gradientFrom: 'from-cyan-400',
      gradientTo: 'to-teal-500',
      bgLight: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
  },
  {
    stepNumber: '02',
    badgeTitle: 'COMMUNICATION',
    title: 'Site Survey & Audit',
    description:
      'Our certified engineers conduct 3D drone roof scans, shadow mapping, and electrical load profiling.',
    detail: 'Precision irradiance mapping for maximum solar output.',
    icon: MessageSquare,
    colors: {
      number: 'text-blue-500',
      title: 'text-blue-600',
      glow: 'rgba(37, 99, 235, 0.35)',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-600',
      bgLight: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  },
  {
    stepNumber: '03',
    badgeTitle: 'BUDGET',
    title: 'Custom Engineering & Budget',
    description:
      'We generate an optimal system engineering blueprint, PVSyst generation yield forecast, and ROI financial model.',
    detail: 'Transparent pricing with detailed financial payback schedule.',
    icon: Layers,
    colors: {
      number: 'text-purple-500',
      title: 'text-purple-600',
      glow: 'rgba(147, 51, 234, 0.35)',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-violet-600',
      bgLight: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  },
  {
    stepNumber: '04',
    badgeTitle: 'DEVELOPMENT',
    title: 'EPC Installation & Work',
    description:
      'Certified technicians execute mechanical mounting, tier-1 module wiring, and inverter installation.',
    detail: 'Strict safety standards and rapid turnaround timeline.',
    icon: Settings,
    colors: {
      number: 'text-pink-500',
      title: 'text-pink-600',
      glow: 'rgba(219, 39, 119, 0.35)',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-fuchsia-600',
      bgLight: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
  },
  {
    stepNumber: '05',
    badgeTitle: 'RESULTS',
    title: 'Commissioning & Telemetry',
    description:
      'Net-metering grid sync, utility inspection sign-off, and active 24/7 mobile telemetry performance tracking.',
    detail: 'Guaranteed uptime and continuous clean energy generation.',
    icon: CheckCircle2,
    colors: {
      number: 'text-rose-500',
      title: 'text-rose-600',
      glow: 'rgba(244, 63, 94, 0.35)',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-red-600',
      bgLight: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  },
];

/* ------------------------------------------------------------------ *
 *  Glass isometric tile
 *  size = side of the square before the iso tilt.
 *  Projected width  = size * 1.414
 *  Projected height = size * 0.707
 * ------------------------------------------------------------------ */
const ISO = 'rotateX(60deg) rotateZ(45deg)';

const GlassTile: React.FC<{ step: IsometricStep; size: number }> = ({ step, size }) => {
  const Icon = step.icon;
  const w = size * 1.414;
  const faceH = size * 0.707;
  const thickness = Math.max(6, size * 0.1);
  const h = faceH + thickness + 10;

  const faceBase: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: faceH / 2,
    width: size,
    height: size,
    marginLeft: -size / 2,
    marginTop: -size / 2,
    borderRadius: '22%',
  };

  return (
    <div className="relative group" style={{ width: w, height: h }}>
      {/* soft colored haze on the floor */}
      <div
        className={`absolute rounded-full bg-gradient-to-r ${step.colors.gradientFrom} ${step.colors.gradientTo} blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
        style={{
          left: '10%',
          width: '80%',
          top: faceH * 0.55,
          height: faceH * 0.8,
        }}
      />

      {/* glass thickness (edge under the tile) */}
      <div
        style={{
          ...faceBase,
          transform: `translateY(${thickness}px) ${ISO}`,
          background: `linear-gradient(135deg, ${step.colors.glow}, rgba(255,255,255,0.25))`,
          border: '1px solid rgba(255,255,255,0.7)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* glass top surface */}
      <div
        style={{
          ...faceBase,
          transform: ISO,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.8) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(255,255,255,0.95)',
          boxShadow: `inset 0 0 14px rgba(255,255,255,0.9), inset 0 -4px 10px ${step.colors.glow}, 0 4px 14px ${step.colors.glow}`,
        }}
      >
        {/* icon lies flat on the glass (cancels the Z rotation, keeps the tilt squash) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'rotateZ(-45deg)' }}
        >
          <Icon
            className={step.colors.iconColor}
            style={{ width: size * 0.34, height: size * 0.34 }}
            strokeWidth={1.8}
          />
        </div>
        {/* glossy streak */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: '22%',
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%)',
          }}
        />
      </div>
    </div>
  );
};

/**
 * Layout constants (px). The track SVG uses the same numbers, so the
 * line passes through the center of every tile.
 */
const TILE_SIZE = 108;                        // -> Larger size (~152px wide x ~76px tall on screen)
const TILE_W = TILE_SIZE * 1.414;
const DROP = 135;                             // how far the lower tiles sit below
const NUMBER_H = 48;
const NUMBER_OVERLAP = 12;                    // number sits slightly over the tile corner
const TOP_PAD = 10;
const CONTAINER_H = 425;
const TILE_CENTER_Y =
  TOP_PAD + NUMBER_H - NUMBER_OVERLAP + (TILE_SIZE * 0.707) / 2;

const columnCenters = [10, 30, 50, 70, 90];
const trackPoints = columnCenters.map((x, i) => ({
  x,
  y: TILE_CENTER_Y + (i % 2 === 1 ? DROP : 0),
}));
const trackPath = trackPoints
  .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
  .join(' ');

export const IsometricProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-2 sm:py-4 px-4 sm:px-6">
      {/* ============ DESKTOP: ZIG-ZAG ISOMETRIC TIMELINE ============ */}
      <div className="hidden lg:block relative" style={{ height: CONTAINER_H }}>
        {/* Sleek thin background shadow track line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox={`0 0 100 ${CONTAINER_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* 1. Thin Soft Ambient Shadow Layer */}
          <path
            d={trackPath}
            fill="none"
            stroke="rgba(100, 102, 105, 0.12)"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="blur-[4px]"
          />
          {/* 2. Sleek Thin Background Shadow Track Line */}
          <path
            d={trackPath}
            fill="none"
            stroke="#d6dadfff"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.85}
          />
        </svg>

        {ISOMETRIC_STEPS.map((step, index) => {
          const isBottom = index % 2 === 1;
          const isHovered = activeStep === index;

          return (
            <div
              key={step.stepNumber}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              className="absolute z-10 flex flex-col items-start text-left"
              style={{
                width: 225,
                left: `${columnCenters[index]}%`,
                top: (isBottom ? DROP : 0) + TOP_PAD,
                // put the tile's center exactly on the column center
                transform: `translateX(-${TILE_W / 2}px)`,
              }}
            >
              {/* slanted number, top-left of the tile */}
              <motion.span
                animate={{ y: isHovered ? -4 : 0 }}
                className={`block text-4xl sm:text-5xl font-black italic tracking-tighter transform -skew-x-12 select-none ${step.colors.number}`}
                style={{ height: NUMBER_H, lineHeight: `${NUMBER_H}px`, marginLeft: -4 }}
              >
                {step.stepNumber}
              </motion.span>

              {/* glass tile */}
              <motion.div
                className="cursor-pointer"
                style={{ marginTop: -NUMBER_OVERLAP }}
                animate={{ y: isHovered ? -6 : 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              >
                <GlassTile step={step} size={TILE_SIZE} />
              </motion.div>

              {/* text, left aligned under the tile */}
              <div className="mt-3.5 space-y-1.5 max-w-[225px]">
                <h3
                  className={`text-base font-black uppercase tracking-wider ${step.colors.title}`}
                >
                  {step.badgeTitle}
                </h3>
                <div
                  className={`h-[3px] w-14 rounded-full bg-gradient-to-r ${step.colors.gradientFrom} ${step.colors.gradientTo}`}
                />
                <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-4">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============ TABLET & MOBILE: STACKED CARDS ============ */}
      <div className="block lg:hidden space-y-6 max-w-md mx-auto pt-4">
        {ISOMETRIC_STEPS.map((step) => (
          <motion.div
            key={step.stepNumber}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden"
          >
            <div className="shrink-0 pt-2">
              <GlassTile step={step} size={56} />
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-black uppercase tracking-wider ${step.colors.title}`}
                >
                  {step.badgeTitle}
                </span>
                <span
                  className={`text-xl font-black italic transform -skew-x-12 ${step.colors.number}`}
                >
                  {step.stepNumber}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IsometricProcessFlow;